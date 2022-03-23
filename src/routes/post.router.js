const PostController = require('../app/controller/PostController');

module.exports = (server, routes, prefix = '/api/v1/post') => {
  routes.post('/', PostController.create);
  routes.get('/', PostController.list);
  routes.get('/:id', PostController.getById);
  routes.patch('/:id', PostController.update);
  routes.delete('/:id', PostController.delete);
  server.use(prefix, routes);
};
