FROM nginx
EXPOSE 8090
COPY build /usr/share/nginx/html
RUN chmod -R 777 /usr/share/nginx/html
