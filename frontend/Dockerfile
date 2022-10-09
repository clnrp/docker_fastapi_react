FROM node:16-alpine

WORKDIR /app

COPY ./frontend/package*.json ./
COPY ./frontend/public ./public
COPY ./frontend/src ./src

RUN npm install --save react react-dom react-router-dom react-scripts
RUN npm run build

EXPOSE 3000
CMD ["npm","start"]
