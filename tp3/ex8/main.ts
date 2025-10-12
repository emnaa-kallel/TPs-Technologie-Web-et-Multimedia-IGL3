import type { Calculator } from './types.js';
import { add, subtract } from './index.js';

const calc: Calculator = { a: 8, b: 2, op: 'subtract' };

const result =
  calc.op === 'add'
    ? add(calc.a, calc.b)
    : subtract(calc.a, calc.b);

console.log(result); // 6

//import type indique à TypeScript que je veux uniquement les types, et donc ces imports disparaîtront complètement du code JavaScript compilé (optimisation).