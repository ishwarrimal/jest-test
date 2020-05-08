export const callbackTesting = (callback: (value: string) => void) => {
  var someOperation = "pikachu";
  setTimeout(() => {
    callback(someOperation);
  }, 1000);
};

var charmander: string = "";
export const setCharmander = () => (charmander = "charmander");
export const clearCharmander = () => (charmander = "");
export const setSquirtle = () => (charmander = "squirtle");
export const clearSquirtle = () => (charmander = "");

export const promiseTesting = () => {
  return new Promise<string>(function (resolve, reject) {
    setTimeout(() => {
      resolve(charmander);
    }, 1000);
  });
};

export const promiseTestingReject = () => {
  return new Promise<string>(function (resolve, reject) {
    setTimeout(() => {
      reject("error");
    }, 1000);
  });
};
