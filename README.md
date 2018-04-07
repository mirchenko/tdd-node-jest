# TDD Node, Postgres, Jest

## Pre requirements

* [Node.js](https://nodejs.org)
* [Postgres](https://www.postgresql.org/)

## Libraries docs

* [Koa](http://koajs.com/)
* [Knex](http://knexjs.org/)
* [Objection](https://vincit.github.io/objection.js)
* [Jest](https://facebook.github.io/jest/)
* [Chai](http://www.chaijs.com/)
* [Lodash](https://lodash.com/)


## Setting up db

```bash
$ psql

CREATE DATABASE blog;

CREATE DATABASE blog_test;

\q
```

Edit your connection string in `knexfile.js`, set up your postgres credentials.
`postgres://<PG_USERNAME>:<PG_PASSWORD>@localhost:5432/blog`

## Getting started


```bash
$ git clone https://github.com/mirchenko/tdd-node-jest.git <YOUR_FOLDER_NAME>
$ cd <YOUR_FOLDER_NAME>
$ yarn 
$ knex migrate:latest
$ knex seed:run
$ yarn start
```

Service available on `localhost:8080`