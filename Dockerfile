FROM node:alpine as build-deps
WORKDIR /usr/src/app
COPY package.json ./
COPY . .
RUN npx yarn install 
RUN npm run build
COPY . .

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-deps  /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
