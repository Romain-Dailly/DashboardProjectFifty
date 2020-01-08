# #########################################
# Install Composer dependencies
# #########################################

FROM composer:1.7 as vendor

# Lumen composer.json has dependency on database folder only for autoload
RUN mkdir -p /database

COPY composer.json composer.json
COPY composer.lock composer.lock

RUN composer install \
    --ignore-platform-reqs \
    --no-interaction \
    --no-plugins \
    --no-scripts \
    --prefer-dist


# #########################################
# Build PHP Image
# #########################################

FROM php:7.3-apache

ARG APP_VERSION

# Required packages & php extensions
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        git \
        cron \
        libfreetype6-dev \
        libgmp-dev \
        libjpeg-dev \
        libmagickwand-dev \
        libmemcached-dev \
        libpng-dev \
        libpq-dev \
        libssl-dev \
        libxml2-dev \
        libz-dev \
        libzip-dev \
        nano \
        openssh-server \
        unzip \
        zlib1g-dev \
    # && docker-php-ext-install bcmath \
    # && docker-php-ext-install exif \
    # && docker-php-ext-install gmp \
    # && docker-php-ext-install intl \
    # && docker-php-ext-install pcntl \
    # && docker-php-ext-install pdo \
    # && docker-php-ext-install pdo_pgsql \
    # && docker-php-ext-install pgsql \
    # && docker-php-ext-install soap \
    # && docker-php-ext-install sockets \
    && docker-php-ext-install zip

# Free space
RUN rm -r /var/lib/apt/lists/*

#  Enable mod_rewrite
RUN a2enmod rewrite

# Override Apache document root
ENV APACHE_DOCUMENT_ROOT /var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# Fetch previously installed composer deps
COPY --from=vendor --chown=www-data:www-data /app/vendor/ /var/www/html/vendor/

# Fetch project files
COPY --chown=www-data:www-data . /var/www/html

# Write version file
RUN echo ${APP_VERSION} >> /var/www/html/public/version.txt
RUN chown www-data:www-data /var/www/html/public/version.txt

# Use the default production configuration
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

# Override memory limit
RUN echo "memory_limit = 1024M" >> $PHP_INI_DIR/php.ini

# Launch server
# RUN apache2-foreground
