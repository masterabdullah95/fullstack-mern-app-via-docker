# Build stage
FROM oven/bun:1 AS build

WORKDIR /app

COPY package*.json bun.lock ./

RUN bun install 

COPY . .

RUN bun run build

# Production stage

FROM oven/bun:1

WORKDIR /app

COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["bunx", "serve", "-s", "dist", "-l", "3000"]