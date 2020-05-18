#stage 0
FROM node:11-alpine as build-stage
WORKDIR /app
COPY . ./
RUN npm i
RUN npm run build

#stage 1
FROM nginx:1.15-alpine
COPY --from=build-stage /app/build /usr/share/nginx/html/2020-1-Track-Frontend-M-Kerechanina
COPY ./nginx.conf /etc/nginx/conf.d/default.conf 
EXPOSE 80
CMD ["nginx","-g","daemon off;"]