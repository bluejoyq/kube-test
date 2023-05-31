# STEP 1
# 1
FROM node:18 AS builder
# 2
WORKDIR /app
# 3
COPY . .
# 4
RUN npm install
# 5
RUN npm run build

EXPOSE 3000

FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app ./
CMD ["npm","run","start:prod"]