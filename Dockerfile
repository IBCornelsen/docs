FROM oven/bun

EXPOSE 3000

WORKDIR /api
COPY ./package.json ./
COPY . .
RUN bun install --prod

CMD ["bun", "run", "build:production"]