class db {
  fetch() {
    return this;
  }
  fetchNext() {
    return Promise.resolve("200");
  }
}

export default db;
