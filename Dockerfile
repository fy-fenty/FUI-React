FROM nginx
COPY build /usr/share/nginx/html
RUN chmod -R 777 /usr/share/nginx/html
