FROM php:8.2.0alpha1 as php_apache

WORKDIR /var/www/html

RUN apt-get update
RUN apt install -y curl
RUN apt install -y libcurl4-openssl-dev
RUN docker-php-ext-install curl
RUN docker-php-ext-install mysqli pdo_mysql
#RUN apt-get install -y libpq-dev \
#    && docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
#    && docker-php-ext-install pdo pdo_pgsql pgsql
#RUN pecl install redis && docker-php-ext-enable redis
