//1
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }

  toString(): string {
    return `Stack [${this.items.join(', ')}]`;
  }
}

//2
type Type<T> = T extends string ? number : T extends number ? string : T extends boolean ? 'valid' | 'invalid' : never;

function dynamicFunction<T>(input: T): Type<T> {
  if (typeof input === 'string') {
    return input.length as Type<T>;
  } else if (typeof input === 'number') {
    return input.toString() as Type<T>;
  } else if (typeof input === 'boolean') {
    return (input ? 'valid' : 'invalid') as Type<T>;
  }
  throw new Error('ereror');
}

//3
function getValueType<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
