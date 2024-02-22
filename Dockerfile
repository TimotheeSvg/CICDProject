FROM node:19
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . .

VOLUME /upload

EXPOSE 3000

CMD ["node", "server/index.js"]