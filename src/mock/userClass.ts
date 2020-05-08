export class Users {
  static all() {
    return fetch("/users.json", { method: "GET" }).then(
      (resp: any) => resp.data
    );
  }
}

export function APIRequest(who?: String) {
  if (who === "google") {
    return fetch("https://google.com").then((res: any) => res.json());
  } else {
    return "no argument provided";
  }
}
