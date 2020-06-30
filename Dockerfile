FROM node:10.1
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN cd client && npm install
RUN npm run build
RUN cd server && npm install

EXPOSE 3000
ENV GITHUB_CLIENT_ID eab6075bd50d72250cd6
ENV GITHUB_CLIENT_SECRET aa7c820887a5986be6f58a50666f40df5dac1cdb
ENV MONGODB_URI mongodb://heroku_wcgfs261:n1g8tpuc2nmb8bj8d8jt24hd8v@ds137263.mlab.com:37263/heroku_wcgfs261
ENTRYPOINT ["node", "./server/server.ts"]