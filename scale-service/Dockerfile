FROM node:13

COPY server.js package.json package-lock.json /app/

WORKDIR /app
RUN npm install

CMD ["node", "server.js"]
