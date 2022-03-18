const Repository = require('./Repository');
const PeopleSchema = require('../schema/PeopleSchema');

class PeopleRepository extends Repository {
  constructor() {
    super(PeopleSchema);
  }
}

module.exports = new PeopleRepository();
