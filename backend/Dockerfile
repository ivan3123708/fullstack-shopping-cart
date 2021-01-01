FROM node:14-alpine

WORKDIR /usr/local/share/backend

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 5000

CMD npm run start
