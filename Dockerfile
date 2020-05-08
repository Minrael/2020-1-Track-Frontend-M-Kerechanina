#stage 0
FROM node:11-alpine as build-stage
WORKDIR /app
COPY . ./
RUN npm i
RUN npm run build

#stage 1
FROM nginx:1.15-alpine
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf