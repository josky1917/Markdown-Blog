# How To Deploy in Localhost
## dependencies
### node.js
install [Node.js](https://nodejs.org) \
npm install all dependencies in package.json
### mongoDB
install [mongoDB](https://www.edureka.co/blog/install-mongodb-on-mac/#:~:text=1%20Again%20open%20the%20terminal%20application%20on%20your,your%20Mac%20keyboard%20to%20stop%20the%20MongoDb%20daemon.)

## Run
### mongoDB
set mongoDB environment path and launch \
### Node.js
> npm run devStart






# Docker Commands

## docker container list
> docekr ps

## docker image list
> docker image list

## create docker network
> docker network create mongo-network

## start mongodb
> docker run -d \
-p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=admin
-e MONGO_INITDB_ROOT_PASSWORD=admin
--name mongodb
--net mongo-network 
mongo

## start mongo-express
> docker run -d \                                                        -p 8081:8081 \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=admin \
--net mongo-network \
--name mongo-express \
-e ME_CONFIG_MONGODB_SERVER=mongodb \
mongo-express

## check logs
> docker logs {container id}

# Docker-Compose
## Start
> docker-compose -f docker-compose.yml up -d

## Stop
> docker-compose -f docker-compose.yml down