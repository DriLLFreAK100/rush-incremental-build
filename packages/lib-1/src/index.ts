import { sum } from 'lib-2';

export const enhancedSum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return sum(a, b);
};
