/**
 * 判断一个数是奇数还是偶数
 * @param num number
 * @returns boolean
 */
export const isEven = (num: number): boolean => num % 2 === 0
/**
 * 获得一组数的平均值
 * @param args number[]
 * @returns number
 */
export const average = (...args: number[]): number => args.reduce((a, b) => a + b) / args.length
/**
 * 获取两个整数之间的随机整数
 * @param min number
 * @param max number
 * @returns number
 */
export const random = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min)
/**
 * 指定位数四舍五入
 * @param n number
 * @param d number
 * @returns number
 */
export const round = (n: number, d: number): number => Number(`${Math.round(Number(`${n}e${d}`))}e-${d}`)
