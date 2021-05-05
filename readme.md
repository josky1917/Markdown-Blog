# Docker Commands

## docker container list
docekr ps

## docker image list
docker image list

## create docker network
docker network create mongo-network

## start mongodb
docker run -d \
-p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=admin
-e MONGO_INITDB_ROOT_PASSWORD=admin
--name mongodb
--net mongo-network 
mongo

## start mongo-express
docker run -d \                                                             
-p 8081:8081 \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=admin \
--net mongo-network \
--name mongo-express \
-e ME_CONFIG_MONGODB_SERVER=mongodb \
mongo-express

## check logs
docker logs {container id}

# Run Docker-Compose by yaml file
docker-compose -f mongo.yaml up -d

# Stop Docker-Compose
docker-compose -f mongo.yaml down
