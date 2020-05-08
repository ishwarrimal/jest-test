import { add } from "../add";
export * from "./userClass";

export function total(x: number, y: number): string {
  return "$" + add(x, y);
}

export const callbackTesting = (
  callback: (value: string) => void,
  someOperation: string
) => {
  callback(someOperation);
};
