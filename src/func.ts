/**
 * 1.Box handler
 * boxHandler(str)
 *  .next((str) => str.replace(/\%/, ''))
 *  .next((str) => parseFloat(str))
 *  .done((res) => res * 0.01);
 * @param x any
 * @returns any
 */
export const boxHandler = (x: any) => ({ next: (f: (arg0: any) => any) => boxHandler(f(x)), done: (f: (arg0: any) => any) => f(x) })
/**
 * 2.Compose functions from left to right
 * @param fns any[]
 * @returns any
 */
export const pipe = (...fns: any[]) => (x: any) => fns.reduce((y, f) => f(y), x)
/**
 * 3.Create a function that accepts a single argument
 * @param fn any
 * @returns any
 */
export const unary = (fn: (arg0: any) => any) => (arg: any) => fn(arg)
/**
 * 2.Compose functions from right to left
 * @param fns any[]
 * @returns any
 */
export const compose = (...fns: any[]) => (x: any) => fns.reduceRight((y, f) => f(y), x)
