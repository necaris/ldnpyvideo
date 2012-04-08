(ns ldnpyvideo.template
  (:require [net.cgrand.enlive-html :as html]))

(html/defsnippet video-snippet "templates/main.html" [:li.video]
  [{title :title origin :origin id :id
    speakers :speakers summary :summary
    votes :votes}]
  [:a.vid-title] (html/do->
        (html/content title)
        (html/set-attr :href origin)
        (html/set-attr :id (str "video-" id)))
  [:span.vid-speakers] (html/content speakers)
  [:p.vid-summary] (html/content summary)
  [:p.vid-vote-count] (html/content (str votes))
  [:button.vid-vote-btn] (html/set-attr :id (str "video-btn-" id))
  )

(html/deftemplate index "templates/main.html"
  [{:keys [videos]}]
  [:#videos] (html/content (map video-snippet videos)))

(defn render
  [t]
  (apply str t))

