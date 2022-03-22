const PostSchema = require();
const Repository = require('./Repository');

class PostRepository extends Repository {
  constructor() {
    super(PostSchema);
  }
}

module.exports = new PostRepository();
