const { Router } = require('express');
const people = require('./people.router');
const post = require('./post.router');

module.exports = (server) => {
  server.use((req, res, next) => {
    people(server, new Router());
    post(server, new Router());
    next();
  });
};
