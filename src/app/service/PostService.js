const PostRepository = require();

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
}
module.exports = new PostService();
