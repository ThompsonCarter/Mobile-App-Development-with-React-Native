interface User {
  id: number;
  name: string;
}

type Response<T> = {
  data: T;
  error?: string;
};

type Status = 'idle' | 'loading' | 'error' | 'success';
let current: Status = 'idle';

function wrapInArray<T>(x: T): T[] {
  return [x];
}

export function sum(a: number, b: number): number {
  return a + b;
}
