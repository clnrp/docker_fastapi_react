FROM php:7.2-apache as php-apache

WORKDIR /var/www/html
RUN apt-get update
RUN docker-php-ext-install mysqli pdo_mysql
RUN apt-get install -y libpq-dev \
    && docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-install pdo pdo_pgsql pgsql
RUN pecl install redis && docker-php-ext-enable redis
