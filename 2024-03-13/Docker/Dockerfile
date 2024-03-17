# PULL BASE IMAGE
FROM mongo:latest

# MONGO ENVIROMENT
ENV \
  # DEFINE ROOT USERNAME
  MONGO_INITDB_ROOT_USERNAME=mongoadmin \
  # DEFINE ROOT PASSWORD
  MONGO_INITDB_ROOT_PASSWORD=Abacate123

# Copy script for initializing MongoDB
COPY init-mongo.js /docker-entrypoint-initdb.d/

# Expose ports.
#   - 27017: process
#   - 28017: http
EXPOSE 27017
EXPOSE 28017
