const toString = (v: any) => Object.prototype.toString.call(v)
const wait = async (milliseconds: number) => new Promise(resolve => setTimeout(resolve, milliseconds))
const runPromises = (promises: Promise<any>[]): Promise<any> => promises.reduce((p, c) => p.then(rp => c.then(rc => [...rp, rc])), Promise.resolve([]))
const throwdice = (): number => ~~(Math.random() * 6) + 1
const getTypeOf = (obj: any): string => (Object.prototype.toString.call(obj).match(/\[object (.*)\]/) as string[])[1]
export const base = {
  toString,
  runPromises,
  wait,
  throwdice,
  getTypeOf,
}
