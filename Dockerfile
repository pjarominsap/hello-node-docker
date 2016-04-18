FROM node:0.12-onbuild
RUN groupadd -r app && useradd -r -g app app
EXPOSE 8080
