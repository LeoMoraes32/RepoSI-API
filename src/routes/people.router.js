const PeopleController = require('../app/controller/PeopleController');

module.exports = (server, routes, prefix = '/api/v1/people') => {
  routes.post('/', PeopleController.create);
  routes.get('/', PeopleController.list);
  routes.get('/:id', PeopleController.getById);
  server.use(prefix, routes);
};
