FROM node:20-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm ci  --unsafe-perm

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
