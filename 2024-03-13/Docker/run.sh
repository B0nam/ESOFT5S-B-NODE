#!/bin/bash
docker build -t "mongodb-node" . && docker run --rm -p 27017:27017 mongodb-node:latest
