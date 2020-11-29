#
# Builder stage.
# This state compile our TypeScript to get the JavaScript code
#
FROM node:12.13.0 AS builder
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
COPY tsconfig*.json ./
COPY . ./
RUN npm install
EXPOSE 5050
CMD ["npm", "start"]