const PeopleRepository = require('../repository/PeopleRepository');

class PeopleService {
  async create(payload) {
    const result = await PeopleRepository.create(payload);
    return result;
  }

  async list(payload) {
    const result = await PeopleRepository.list(payload);
    if (!result) throw new Error();
    return result;
  }

  async getById(payload) {
    const result = await PeopleRepository.getById(payload);
    return result;
  }
}

module.exports = new PeopleService();
