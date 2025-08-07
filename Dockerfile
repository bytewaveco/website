FROM node:24-bullseye-slim AS builder

WORKDIR /workspace

COPY . .

RUN npm install

RUN NODE_ENV=production npm run build

FROM node:24-bullseye-slim

ENV NODE_ENV=production

WORKDIR /workspace

COPY --from=builder /workspace/.output ./

CMD ["node", "./server/index.mjs"]
