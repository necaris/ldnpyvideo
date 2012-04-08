(ns ldnpyvideo.core
  (:use noir.core)
  (:require [noir.server :as server])
  (:require [ldnpyvideo.template :as t])
  (:require [clojure.java.jdbc :as sql]))

(def db-url (System/getenv "DATABASE_URL"))

(def query-by-name "SELECT * FROM data ORDER BY title ASC")

(def query-by-votes "SELECT * FROM data ORDER BY votes DESC")

(defpage [:get "/"] []
  (let [vids (sql/with-connection db-url
               (sql/with-query-results res [query-by-name]
                 (into [] res)))]
    (t/render (t/index {:videos vids}))))

(defpage [:get "/leaderboard"] []
  (let [vids (sql/with-connection db-url
               (sql/with-query-results res [query-by-votes]
                 (into [] res)))]
    (t/render (t/index {:videos vids}))))

(defpage [:post "/"] {:keys [vidid]}
  (sql/with-connection db-url
    (let [video-id (try (Integer/parseInt vidid)
                        (catch Exception exc 0))
          matching (sql/with-query-results res
                   ["SELECT id, votes FROM data WHERE id=?" video-id]
                   (into [] res))
          selected (first matching)]
      (if (nil? selected)
        {:status 404 :body "Video with given ID not found!"}
        (let [vote-count (get selected :votes)]
          (sql/update-values
           :data
           ["id=?" video-id]
           {:votes (inc vote-count)})
          {:status 200 :body ""})))))

(defn -main
  []
  (let [port (try
               (Integer/parseInt (System/getenv "PORT"))
               (catch Exception exc
                 8080))]
    (server/start port)))
