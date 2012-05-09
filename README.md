# ldnpyvideo

Scraper (from pyvideo.org) and web site for London PyCon video meetup. Yes, I am aware of the oddity of writing a Python-related web app in Clojure.

## Usage

This app was designed to be deployed on Heroku -- simply clone the repository, add a Heroku remote, and you're ready to go!

OK, that's not entirely true. In order to be _really_ ready to go, you need to:
- Configure the (free) shared database add-on
- Run the scraper: `heroku run lein run -m ldnpyvideo.scrape`

_Then_ you're ready to go!

## License

Copyright (C) 2012 Rami Chowdhury

Distributed under the Apache License
