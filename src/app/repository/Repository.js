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

  async getById(payload) {
    return this.schema.findById(payload);
  }

  async updateById(id, body) {
    return this.schema.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true
    });
  }
}

module.exports = Repository;
