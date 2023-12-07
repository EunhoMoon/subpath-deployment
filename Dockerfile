# build stage
FROM node:latest AS base

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# dev
FROM base as dev
CMD ["npm", "run", "start"]

# prod build
FROM base AS build

RUN npm run build

# production stage
FROM nginx:latest AS prod

COPY --from=build /app/build /usr/share/nginx/html/app

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
