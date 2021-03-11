FROM node:12
WORKDIR /opt/app
COPY package.json ./
RUN ["yarn", "install"]
COPY . .
EXPOSE 8080
CMD ["node", "index.js"]