//1
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

//2
function throwError(message: string): never {
  throw new Error(message);
}
