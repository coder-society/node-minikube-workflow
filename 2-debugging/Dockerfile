FROM node:8-alpine

WORKDIR /src

COPY package.json /src/
COPY package-lock.json /src/

RUN npm install

ADD . /src

EXPOSE 3000
EXPOSE 5858

CMD ["node", "--inspect=0.0.0.0:5858", "index.js"]