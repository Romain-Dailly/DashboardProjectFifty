FROM node:10.16.3 AS build-env
# Node 10 : NODE_MODULE_VERSION=64 (see https://nodejs.org/en/download/releases/)
# Required by SASS_BINARY_NAME=linux-x64-64
# Otherwise SaaS will be recompiled each time...

ARG APP_VERSION

# Envs
#ENV SASS_BINARY_NAME linux-x64-64
#ENV SASS_BINARY_SITE https://github.com/sass/node-sass/releases/download

# Create app directory
RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app
RUN mkdir -p /usr/src/app/www && chown -R node:node /usr/src/app/www
WORKDIR /usr/src/app

# Install sass & Swagger
#RUN npm install -g --unsafe-perm sass
#RUN npm install -g --unsafe-perm swagger-codegen

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm ci

# Bundle app source
COPY . .

# Use Arguments to feed environment variable
ENV APP_VERSION ${APP_VERSION}

# Build app
RUN npm run build


# Second stage: serving freshly builded static files through NginX

FROM nginx:alpine

ARG APP_VERSION
ENV APP_VERSION ${APP_VERSION}

WORKDIR /usr/share/nginx/html

# Custom configuration for rewrites
# COPY --from=build-env /usr/src/app/docker/nginx.conf /etc/nginx/conf.d/default.conf

# include only www files
COPY --from=build-env /usr/src/app/dist/lumen-dashboard ./

# Write version file
RUN echo ${APP_VERSION} >> /usr/share/nginx/html/version.txt
