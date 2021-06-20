FROM node:12.4.0-alpine as build

WORKDIR app/frontend

COPY package*.json ./
RUN npm install

COPY . .

ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=${REACT_APP_API_BASE_URL}

EXPOSE 3000

CMD [ "npm", "start" ]