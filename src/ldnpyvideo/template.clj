(ns ldnpyvideo.template
  (:require [net.cgrand.enlive-html :as html]))

(html/defsnippet video-snippet "templates/main.html" [:li.video]
  [context]
  [:a.vid-title] (html/do->
                  (html/content (:title context))
                  (html/set-attr :href (:origin context))
                  (html/set-attr :id (str "video-" (:id context))))
  [:span.vid-speakers] (html/content (:speakers context))
  [:p.vid-summary] (html/content (:summary context))
  [:p.vid-vote-count] (html/content (str (:votes context)))
  [:button.vid-vote-btn] (if (nil? (get context :ldr))
                           (html/set-attr :id (str "video-btn-" (:id context)))
                           (fn [node] {:tag :p}))
  )

(html/deftemplate index "templates/main.html"
  [context]
  [:#videos] (html/content
              (map
               #(video-snippet (merge {:ldr (get context :ldr)} %))
               (get context :videos))))

(defn render
  [t]
  (apply str t))

