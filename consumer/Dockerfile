# STEP 1
# 1
FROM node:18 AS builder
# 2
WORKDIR /app
# 3

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 8000

FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app ./
CMD ["npm","run","start"]