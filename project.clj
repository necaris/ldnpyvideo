(defproject ldnpyvideo "0.1.0-SNAPSHOT"
  :description "Web scraper and web site for London PyCon By Video"
  :dependencies [[org.clojure/clojure "1.2.1"]
                 [enlive "1.0.0"]
                 [noir "1.3.0-alpha1"]
                 [postgresql/postgresql "9.1-901.jdbc4"]
                 [org.clojure/java.jdbc "0.1.1"]]
  :plugins [[lein-cljsbuild "0.1.2"]]
  :main ldnpyvideo.core)

                         
