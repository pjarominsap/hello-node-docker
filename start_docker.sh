#!/usr/bin/env bash
docker run -p 8083:8080 -m 128M --memory-swap 128M -u app -d --name hello-node-docker hello-node-docker