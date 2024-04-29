FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npx browserslist@latest --update-db

COPY . .

EXPOSE 5001

CMD ["npm", "start"]