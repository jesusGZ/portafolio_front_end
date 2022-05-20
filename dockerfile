FROM node:16.15.0

WORKDIR /app

RUN --open none

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ADD . .

COPY package.json ./

RUN npm install

RUN yarn

ENTRYPOINT ["/entrypoint.sh"]

CMD ["npm", "run", "dev"]