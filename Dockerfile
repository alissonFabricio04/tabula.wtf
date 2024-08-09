FROM nginx:alpine3.19-slim

COPY nginx.conf /etc/nginx/nginx.conf

COPY / /usr/share/nginx/html

EXPOSE 443