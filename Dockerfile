FROM node:20-bullseye-slim AS builder

WORKDIR /opt/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN NODE_ENV=production npm run build

FROM node:20-bullseye-slim

WORKDIR /opt/app

COPY --from=builder /opt/app/.output /opt/app/.output

CMD ["node", ".output/server/index.mjs"]
