export type Operation = 'add' | 'subtract';
export interface Calculator {
  a: number;
  b: number;
  op: Operation;
}
