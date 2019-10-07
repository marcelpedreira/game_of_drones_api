FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

CMD [ "npm", "start" ]

EXPOSE 5000
