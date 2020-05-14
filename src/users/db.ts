class db {
  fetch() {
    return this;
  }
  fetchNext() {
    return new Promise((res, rej) => setTimeout(() => res("100"), 1000));
  }
}

export default db;
