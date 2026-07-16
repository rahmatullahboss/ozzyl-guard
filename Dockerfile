FROM node:20-bookworm-slim AS build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM node:20-bookworm-slim AS runtime
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /app /app
EXPOSE 3000
USER node
CMD ["node", "apps/api/dist/server.js"]
