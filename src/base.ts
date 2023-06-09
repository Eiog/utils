const toString = (v: any) => Object.prototype.toString.call(v)
const wait = async (milliseconds: number) => new Promise(resolve => setTimeout(resolve, milliseconds))
const throwdice = (): number => ~~(Math.random() * 6) + 1
export const base = {
  toString,
  wait,
  throwdice,
}
