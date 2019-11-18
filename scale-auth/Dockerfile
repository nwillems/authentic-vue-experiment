FROM node:13

COPY server.js package.json package-lock.json /app/

WORKDIR /app
RUN npm install && \
    openssl genrsa 4096 > rsa-private.pem && \
    openssl rsa -in rsa-private.pem -pubout > rsa-public.pem

CMD ["node", "server.js"]
