FROM node:10-alpine

#create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#install app dependency
COPY package.json /usr/src/app
RUN npm install

WORKDIR /usr/src/app

#Bundle app source
COPY . /usr/src/app

EXPOSE 5000

CMD ["node","server.js"]
