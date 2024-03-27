#!/bin/bash
docker build -t "postgresdb-node" . && docker run --rm -p 5432:5432 postgresdb-node:latest
