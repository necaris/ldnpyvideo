(ns ldnpyvideo.core
  (:require [net.cgrand.enlive-html :as html])
  (:import java.net.URL))

(def video-root "http://pyvideo.org")

(def video-cat "/category/17/pycon-us-2012")

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
    (println
     (str "TITLE: " title "\n")
     (str "SUMMARY: " summary "\n")
     (str "META: " metadata "\n"))))

(defn -main
  []
  (let [listing-page (fetch-url (str video-root video-cat))]
    (map get-talk-data (take 5 (get-talk-urls listing-page)))))
