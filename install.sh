#!/bin/bash

docker build -t fastapi -f ./backend/Dockerfile ./
docker build -t reactjs -f ./frontend/Dockerfile ./
docker build -t postgresql -f ./postgresql/Dockerfile ./
#docker build -t apache -f ./apache/Dockerfile ./