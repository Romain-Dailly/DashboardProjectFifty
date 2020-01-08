# Lumen Dashboard

## About

Backend application to compute data required by angular-dashboard

## Requirements

* PHP 7.2.
* Lumen 6.0.
* Composer.
* Docker.

## Installation / Getting started

* [Get composer](https://getcomposer.org/download/).
* [Get lumen](https://lumen.laravel.com/docs/6.x).
* [Get docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-using-the-repository).

* Clone this repository: `git clone https://github.com/fiftytruck/lumen-dashboard-proto.git`.

### Docker

* Build container: 
```
docker build -t ftklogistics/lumen-dashboard:dev .
```

* Run composer install:
```
docker-compose -f docker-compose-composer-install.yaml up
```

### Swagger

Needs java to be installed globally.
([Get Java](https://java.com/en/download/help/index_installing.xml)).

Calls to Api-inte-fiftytruck are handled by swagger, to update swagger, run `composer swagger:update`.

Swagger configuration is defined in `/app/Services/GetSeizedShippingOrdersService.php`.

## Environment

in .env file : 

  * Set host url for swagger.
  * Set number of faked orders per request.
  * Set steps for distances filters.
  * Set max product length and max product weight for data computing.

## Possible upgrades

A call to get all user's seized orders is made for each routes (via GetSeizedShippingOrdersService), it could be optimized with persistent data.

The faker in model factory (`/database/factories/LightSeizedOrdersFactory.php`) could be improved with much realistic data.
  