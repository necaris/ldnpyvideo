(defproject ldnpyvideo "0.1.0-SNAPSHOT"
  :description "Web scraper and web site for London PyCon By Video"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [enlive "1.0.0"]
                 [jayq "0.1.0-SNAPSHOT"]
                 [fetch "0.1.0-SNAPSHOT"]
                 [noir "1.3.0-alpha1"]]
  :plugins [[lein-cljsbuild "0.1.2"]]
  :cljsbuild
  {:builds
   [{:source-path "src-cljs",
     :compiler
     {:output-dir "resources/public/cljs/",
      :output-to "resources/public/cljs/main.js",
      :optimizations :simple,
      :pretty-print true}}]}
  :main ldnpyvideo.core)

                         
