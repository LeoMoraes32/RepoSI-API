const PostRepository = require('../repository/PostRepository');

class PostService {
  async create(payload) {
    const result = await PostRepository.create(payload);
    return result;
  }

  async list(payload) {
    const result = await PostRepository.list(payload);
    if (!result) throw new Error();
    return result;
  }

  async getById(payload) {
    const result = await PostRepository.getById(payload);
    if (!result) throw new Error();
    return result;
  }

  async updateById(id, body) {
    const result = await PostRepository.updateById(id, body);
    if (!result) throw new Error();
    return result;
  }
}
module.exports = new PostService();
