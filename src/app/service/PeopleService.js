const moment = require('moment');
const PeopleRepository = require('../repository/PeopleRepository');

class PeopleService {
  async create(payload) {
    const result = await PeopleRepository.create(payload);
    return result;
  }

  async list(payload) {
    const result = await PeopleRepository.list(payload);
    const resultObject = [];
    for (let index = 0; index < result.length; index += 1) {
      if (result[index].year_entry) {
        const resultWithYear = result[index];
        resultWithYear.year_entry = moment(result[index].year_entry, 'YYYY-MM-DD').format('DD/MM/YYYY');
        resultObject[index] = resultWithYear;
      } else {
        resultObject[index] = result[index];
      }
    }
    if (!result) throw new Error();
    return resultObject;
  }

  async getById(payload) {
    const result = await PeopleRepository.getById(payload);
    if (!result) throw new Error();
    const resultObject = result;
    if (resultObject.year_entry) {
      resultObject.year_entry = moment(resultObject.year_entry, 'YYYY-MM-DD').format('DD/MM/YYYY');
    }
    return resultObject;
  }

  async updateById(id, body) {
    const bodyObject = body;
    if (bodyObject.year_entry) {
      bodyObject.year_entry = moment(body.year_entry, 'DD/MM/YYYY').format('YYYY-MM-DD');
    }
    const result = await PeopleRepository.updateById(id, bodyObject);
    if (!result) throw new Error();
    return result;
  }

  async deleteById(payload) {
    const result = await PeopleRepository.deleteById(payload);
    if (!result) throw new Error();
    return result;
  }
}

module.exports = new PeopleService();
