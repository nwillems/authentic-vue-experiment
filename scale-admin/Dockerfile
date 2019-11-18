FROM node:13

COPY index.js package.json package-lock.json /app/

WORKDIR /app
RUN npm install

CMD ["npm", "start"]
