FROM node:18-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
# RUN npm start
EXPOSE 3000
CMD [ "npm", "start" ]