// users.js
import axios from "axios";
import db from "./db";
const d = new db();

export class Users {
  static all() {
    return axios.get("/users/json").then((resp) => resp.data);
  }

  static getFetch() {
    var t = d
      .fetch()
      .fetchNext()
      .then((res) => res);
    console.log(t);
    return t;
  }
}
