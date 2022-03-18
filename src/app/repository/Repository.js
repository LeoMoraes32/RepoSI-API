class Repository {
  constructor(schema) {
    this.schema = schema;
  }

  async create(payload) {
    return this.schema.create(payload);
  }

  async list(payload) {
    return this.schema.find(payload);
  }
}

module.exports = Repository;
