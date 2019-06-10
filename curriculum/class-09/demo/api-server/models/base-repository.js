'use strict';

class BaseRepository {
  constructor(Model) {
    this.Model = Model;
  }

  get(_id) {
    let queryObject = _id ? { _id } : {};
    return this.Model.find(queryObject);
  }

  post(record) {
    let newRecord = new this.Model(record);
    return newRecord.save();
  }

  put(id, entry) {
    return Promise.reject('not implemented');
  }

  delete(id) {
    return Promise.reject('not implemented');
  }
}

module.exports = BaseRepository;
