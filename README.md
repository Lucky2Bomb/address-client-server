# Common info
## server
* set up mongoDB in *server/.env*
* /server `npm run build` - build project in production mode
* /server `npm start` - start server in development mode
* `POST {url}/seed/all` - seeded all data in mongoDB from src/seeds

## client
* set up url to api in *client/src/config.json*
* `npm run build` - build project in production mode
* `npm start` - start builded server

# client - React app
file *client/src/config.json* has initial settings (api url, chain of address)
* `npm run build` - build project in production mode
* `npm run dev` - build project in development mode
* `npm start` - start builded server
* `npm start-dev` - build and start project in development mode (webpack server)

# server - Express app
file *server/.env* has initial settings of database (host, port, db name)
* `npm run dev` - build project in development mode
* `npm run build` - build project in production mode
* `npm start` - start server in development mode
* `npm run test` - start tests

# server api routers:
* `POST {url}/seed/all` - seeded all data in mongoDB from src/seeds
* `POST {url}/seed/citizen` - seeded citizen data
* `POST {url}/seed/city` - seeded city data

* `GET {url}/city` - get all cities
* `GET {url}/city/:id` - get city by id
* `POST {url}/city` - add city

* `GET {url}/citizen` - get all cities
* `POST {url}/citizen` - add city

* `GET {url}/address` - get citizens by address
