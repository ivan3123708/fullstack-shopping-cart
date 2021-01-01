FROM node:14-alpine as build

WORKDIR /usr/local/share/frontend

COPY package*.json ./
RUN apk --update add libtool automake autoconf nasm gcc make g++ zlib-dev
RUN npm install
COPY . .
RUN npm run build

FROM danjellz/http-server:1.2

ENV PORT=3000
EXPOSE 3000

COPY --from=build /usr/local/share/frontend/public .
