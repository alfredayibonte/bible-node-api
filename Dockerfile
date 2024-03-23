FROM node:20-alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn
RUN yarn build


EXPOSE 3000
CMD [ "node", "./build/index.js" ]