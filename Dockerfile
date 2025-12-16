FROM oven/bun:1.3.4-slim AS builder

WORKDIR /workspace

COPY . .

RUN bun install

RUN NODE_ENV=production bun run build

FROM oven/bun:1.3.4-slim

ENV NODE_ENV=production

WORKDIR /workspace

COPY --from=builder /workspace/.output ./

CMD ["bun", "./server/index.mjs"]
