const PeopleController = require('../app/controller/PeopleController');
const createValidation = require('../validation/people/create');

module.exports = (server, routes, prefix = '/api/v1/people') => {
  routes.post('/', createValidation, PeopleController.create);
  routes.get('/', PeopleController.list);
  routes.get('/:id', PeopleController.getById);
  routes.put('/:id', createValidation, PeopleController.update);
  server.use(prefix, routes);
};
