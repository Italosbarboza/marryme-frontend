# Estágio de construção
FROM node:12 AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

# Estágio de produção
FROM node:12-alpine

WORKDIR /app

COPY --from=build /app .

EXPOSE 5001

CMD ["npm", "start"]