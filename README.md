# game of drones api

GraphQL server for [game_of_drones_client](https://github.com/marcelpedreira/game_of_drones_client) developed using NodeJS and MongoDB. By default the server listen at port 5000, but you can change this value editing the corresponding parameter in a file called .env located in the root of the project. For example this is the default configuration:

### `SERVER_PORT=5000`

You must set the MongoDB URL in the same way, in this case the corresponding parameter is:

### `DATABASE_URL`

In the project directory, you can run:

### `npm install`

and then:

### `npm start`

Runs the app in the endpoint [http://localhost:5000/graphql](http://localhost:5000/graphql) by default.

# docker-compose

The project provide a docker-compose file for quickly start the app in docker containers. 

In the project directory, you can run:

### `docker-compose up -d`

And just wait. No configurations needed!

If you use docker-machine on Mac or docker-toolbox on Windows, try the endpoint [http://192.168.99.100:5000/graphql](http://192.168.99.100:5000/graphql) instead.

