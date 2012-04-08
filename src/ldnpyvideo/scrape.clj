(ns ldnpyvideo.scrape
  (:require [net.cgrand.enlive-html :as html])
  (:require [clojure.java.jdbc :as sql])
  (:import java.net.URL))

(def video-root "http://pyvideo.org")

(def video-cat "/category/17/pycon-us-2012")

(def db-url (System/getenv "DATABASE_URL"))

(defn fetch-url
  [url]
  (-> url
      java.net.URL.
      html/html-resource))

(defn is-talk-link?
  [node]
  (empty? (re-find #"\d+\." (first (node :content)))))

(defn get-talk-urls
  [page]
  (let [nodes (html/select page [:div.section :div.span7 :div :a])]
    (->> nodes
         (filter is-talk-link?)
         (map #(str video-root ((% :attrs) :href))))))

(defn process-metadata
  [metadata]
  (let [origin-tag (first (filter #(not (string? %))
                                  (get metadata "Video origin")))
        origin-content (first (origin-tag :content))
        speaker-divs (filter #(not (string? %)) (get metadata "Speakers"))
        speaker-names (map
                       #(first ((first (% :content)) :content))
                       speaker-divs)
        percent (first speaker-divs)]
    {:origin origin-content :speakers speaker-names}))

(defn get-talk-data
  [url]
  (let [page (fetch-url url)
        summary (first
                 ((first (html/select page [:div#videobox :p])) :content))
        title (first
               ((first (html/select page [:div#sidebar :h2])) :content))
        metakeys (map
                  #(first (% :content))
                  (html/select page [:div#sidebar :dt]))
        metavals (map #(% :content) (html/select page [:div#sidebar :dd]))
        metadata (process-metadata (zipmap metakeys metavals))
        origin (metadata :origin)
        speakers (metadata :speakers)]
    ;; (println
    ;;  (str "TITLE: " title "\n")
    ;;  (str "SUMMARY: " summary "\n")
    ;;  (str "ORIGIN: " origin "\n")
    ;;  (str "SPEAKERS: " (into [] speakers) "\n"))
    {:title title :summary summary :origin origin :speakers speakers}))

(defn create-data-table
  []
  (sql/with-connection db-url
    (sql/create-table
     :data
     [:id "SERIAL"]
     [:title "VARCHAR(255)"]
     [:summary :text]
     [:origin "VARCHAR(255)"]
     [:speakers "VARCHAR(255)"]
     [:votes "INT NOT NULL"])))

(defn format-record
  [r]
  (let [speakers (:speakers r)
        s-string (interleave speakers (repeat (count speakers) ", "))]
    (assoc r :speakers s-string)))

(defn insert-records
  [recs]
    (sql/with-connection db-url
      (sql/insert-records
       (map format-record recs))))

(defn scrape-and-insert
  []
  (let [listing-page (fetch-url (str video-root video-cat))]
    (println "Creating table")
    (create-data-table)
    (println "FETCHED DATA -- getting talk info")
    (insert-records (map get-talk-data (get-talk-urls listing-page)))
    (println "INSERTED")))
