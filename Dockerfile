FROM nginx
COPY . /usr/share/nginx/html
RUN chmod -R 777 /usr/share/nginx/html
