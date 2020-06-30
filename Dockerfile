FROM node:10.1
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN cd client && npm install
RUN npm run build
RUN cd server && npm install

EXPOSE 3000
ENTRYPOINT ["node", "./server/server.ts"]