const PostService = require('../service/PostService');

class PostController {
  async create(req, res) {
    try {
      const result = await PostService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async list(req, res) {
    try {
      const result = await PostService.list(req.query);
      return result.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = new PostController();
