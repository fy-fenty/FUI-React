FROM nginx
EXPOSE 80
COPY build /usr/share/nginx/html
RUN chmod -R 777 /usr/share/nginx/html
