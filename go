#!/bin/sh
#docker run --name noyo-ch-nginx -v /Users/maxm/Documents/Projects/noyo/client/build:/usr/share/nginx/html:ro -d  nginx
docker run --name noyo-ch-nginx -v ABSOLUTE_PATH_TO__build__FOLDER:/usr/share/nginx/html:ro -d -p 8080:80 nginx