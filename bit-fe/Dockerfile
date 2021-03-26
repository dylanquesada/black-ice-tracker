FROM node:13.12.0-alpine
WORKDIR '/bit-fe'
COPY package.json .
RUN npm install 
COPY . .
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=0 /bit-fe/build /usr/share/nginx/html
