import { add } from "./add";
export function total(x: number, y: number): string {
  return "$" + add(x, y);
}

export function throwError() {
  throw new Error("Throw error testing");
}
