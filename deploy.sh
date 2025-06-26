#!/bin/bash

git pull
docker-compose build vueapp
docker-compose up -d
