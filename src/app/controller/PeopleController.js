const PeopleService = require('../service/PeopleService');

class PeopleController {
  async create(req, res) {
    try {
      const result = await PeopleService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.json(error);
    }
  }

  async list(req, res) {
    try {
      const result = await PeopleService.list(req.query);
      return res.status(200).json(result);
    } catch (error) {
      return res.json(error);
    }
  }

  async getById(req, res) {
    try {
      const result = await PeopleService.getById(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      return res.json(error);
    }
  }
}

module.exports = new PeopleController();
