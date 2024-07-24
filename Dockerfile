FROM node:22-alpine as base
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .

FROM base AS dev
EXPOSE  3000
CMD ["npm", "run", "dev"]

FROM base AS prod
RUN npm run build
CMD ["npm", "run", "start"]
