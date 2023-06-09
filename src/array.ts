/**
 * 1.toObject 将对象数组转换为单个对象
 * Convert an array of objects to a single object
 * @param arr T[]
 * @param key keyof T
 * @returns Record<string, T>
 */
const toObject = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): Record<string, T> => arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {})

/**
 * 2.isEqual 比较两个数组，不考虑顺序
 * Compare two arrays regardless of order
 * @param a T[]
 * @param b T[]
 * @returns boolean
 */
const isEqual = <T, _>(a: T[], b: T[]): boolean => JSON.stringify([...(new Set(a))].sort()) === JSON.stringify([...(new Set(b))].sort())

/**
 * 3.countOccurrences 计算数组中值的出现次数
 * Count the occurrences of a value in an array
 * @param arr T[]
 * @param val T
 * @returns number
 */
const countOccurrences = <T, _>(arr: T[], val: T): number => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)

/**
 * 4.range 在给定范围内创建数字数组
 * Create an array of numbers in the given range
 * @param min number
 * @param max number
 * @returns number[]
 */
const range = (min: number, max: number): number[] => [...Array(max - min + 1).keys()].map(i => i + min)

/**
 * 5.empty 清空数组
 * Empty an array
 * @param arr T[]
 * @returns
 */
const empty = <T, _>(arr: T[]) => (arr.length = 0)

/**
 * 6.accumulate 创建累积总和数组
 * Create an array of cumulative sum
 * @param arr number[]
 * @returns number
 */
const accumulate = (arr: number[]): number[] => arr.reduce((a, b, i) => (i === 0 ? [b] : [...a, b + a[i - 1]]), [0])

/**
 * 7.toNumbers 将字符串数组转换为数字
 * Convert an array of strings to numbers
 * @param arr string[]
 * @returns number[]
 */
const toNumbers = (arr: string[]): number[] => arr.map(Number)

/**
 * 8.cartesian 创建笛卡尔乘积
 * Create cartesian product
 * @param sets number[][]
 * @returns number[][]
 */
const cartesian = (...sets: number[][]) => sets.reduce((acc, set) => acc.flatMap(x => set.map(y => [...x, y])), [[]] as number[][])

/**
 * 9.countBy 按对象数组的属性计数
 * Count by the properties of an array of objects
 * @param arr T[]
 * @param prop T
 * @returns T
 */
// eslint-disable-next-line no-sequences
const countBy = <T extends Record<string, string>, K extends keyof T>(arr: T[], prop: K): Record<string, number> => arr.reduce((prev, curr) => ((prev[curr[prop]] = ++prev[curr[prop]] || 1), prev), {} as Record<string, number>)

/**
 * 10.lastIndex 查找数组中最后一个匹配项的索引
 * Find the index of the last matching item of an array
 * @param arr T[]
 * @param predicate (a: T) => boolean
 * @returns number
 */
const lastIndex = <T, _>(arr: T[], predicate: (a: T) => boolean): number => arr.reduce((prev, curr, index) => (predicate(curr) ? index : prev), -1)

/**
 * 11.indexOfMin 查找数组最小项的索引
 * Find the index of the minimum item of an array
 * @param arr number[]
 * @returns number
 */
const indexOfMin = (arr: number[]): number => arr.reduce((prev, curr, i, a) => (curr < a[prev] ? i : prev), 0)

/**
 * 12.findLongest 查找数组中最长字符串的长度
 * Find the length of the longest string in an array
 * @param words string[]
 * @returns number
 */
const findLongest = (words: string[]): number => Math.max(...words.map(el => el.length))

/**
 * 13.minBy 通过给定键查找数组的最小项
 * Find the minimum item of an array by given key
 * @param arr T[]
 * @param key any
 * @returns T
 */
const minBy = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): T => arr.reduce((a, b) => (a[key] < b[key] ? a : b), {} as T)

/**
 * 14.indexOfMax 查找数组中最大项的索引
 * Find the index of the maximum item of an array
 * @param arr number[]
 * @returns number
 */
const indexOfMax = (arr: number[]): number => arr.reduce((prev, curr, i, a) => (curr > a[prev] ? i : prev), 0)

/**
 * 15.maxBy 通过给定键查找数组的最大项
 * Find the maximum item of an array by given key
 * @param arr T[]
 * @param key any
 * @returns T
 */
const maxBy = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): T => arr.reduce((a, b) => (a[key] >= b[key] ? a : b), {} as T)

/**
 * 16.min 查找数组的最小项
 * Find the minimum item of an array
 * @param arr number[]
 * @returns number
 */
const min = (arr: number[]): number => Math.min(...arr)

/**
 * 17.flat 平展数组
 * Flatten an array
 * @param arr T[]
 * @returns T[]
 */
const flat = <T = string | string[]>(arr: T[]): T[] => arr.reduce((a, b) => (Array.isArray(b) ? [...a, ...flat(b)] : [...a, b]), [] as T[])

/**
 * 18.getConsecutiveArrays 获取连续元素的所有数组
 * Get all arrays of consecutive elements
 * @param arr T[]
 * @param size number
 * @returns T[][]
 */
const getConsecutiveArrays = <T, _>(arr: T[], size: number): T[][] => (size > arr.length ? [] : arr.slice(size - 1).map((_, i) => arr.slice(i, size + i)))

/**
 * 19.closest 从数组中查找最接近的数字
 * Find the closest number from an array
 * @param arr number[]
 * @param n number
 * @returns number
 */
const closest = (arr: number[], n: number): number => arr.reduce((prev, curr) => (Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev))

/**
 * 20.indices 获取数组中值的索引
 * Get indices of a value in an array
 * @param arr T[]
 * @param value T
 * @returns number[]
 */
const indices = <T>(arr: T[], value: T): number[] => arr.reduce((acc, v, i) => (v === value ? [...acc, i] : acc), [] as number[])

/**
 * 21.max 查找数组的最大项数
 * Find the maximum item of an array
 * @param arr number[]
 * @returns number
 */
const max = (arr: number[]): number => Math.max(...arr)

/**
 * 22.getNthItems 获取数组的所有第 n 项
 * Get all n-th items of an array
 * @param arr T[]
 * @param nth number
 * @returns T[]
 */
const getNthItems = <T, _>(arr: T[], nth: number): T[] => arr.filter((_, i) => i % nth === nth - 1)

/**
 * 23.alphabet 生成字母字符数组
 * Generate an array of alphabet characters
 * @returns string[]
 */
const alphabet = (): string[] => Array(26).fill(0).map((_, i) => String.fromCharCode(i + 97))

/**
 * 24.average 获取数组的平均值
 * Get the average of an array
 * @param arr number[]
 * @returns number
 */
const average = (arr: number[]): number => arr.reduce((a, b) => a + b, 0) / arr.length

/**
 * 25.getIntersection 获取数组的交集
 * Get the intersection of arrays
 * @param a T[]
 * @param arr T[][]
 * @returns T[]
 */
const getIntersection = <T, _>(a: T[], ...arr: T[][]): T[] => [...new Set(a)].filter(v => arr.every(b => b.includes(v)))

/**
 * 26.getSubsets 获取数组的所有子集
 * Get all subsets of an array
 * @param arr T[]
 * @returns t[][]
 */
const getSubsets = <T>(arr: T[]): T[][] => arr.reduce((prev, curr) => prev.concat(prev.map(k => k.concat(curr))), [[]] as T[][])

/**
 * 27.ranking 获取数字数组的排名
 * Get the rank of an array of numbers
 * @param arr number[]
 * @returns number
 */
const ranking = (arr: number[]): number[] => arr.map((x, y, z) => z.filter(w => w > x).length + 1)

/**
 * 28.unique 获取数组的唯一值
 * Get the unique values of an array
 * @param arr T[]
 * @returns T[]
 */
const unique = <T>(arr: T[]): T[] => arr.reduce((acc, el) => (acc.includes(el) ? acc : [...acc, el]), [] as T[])

/**
 * 29.sum 获取数字数组的总和
 * Get the sum of an array of numbers
 * @param arr T[]
 * @returns number
 */
const sum = (arr: number[]): number => arr.reduce((a, b) => a + b, 0)

/**
 * 30.union 获取数组的联合
 * Get union of arrays
 * @param arr T[]
 * @returns T[]
 */
const union = <T, _>(...arr: T[][]): T[] => [...new Set(arr.flat())]

/**
 * 31.groupBy 按键对对象数组进行分组
 * Group an array of objects by a key
 * @param arr T[]
 * @param key string
 * @returns Record<string, T[]
 */
// eslint-disable-next-line no-sequences
const groupBy = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): Record<string, T[]> => arr.reduce((acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc), {} as Record<string, T[]>)

/**
 * 32.intersperse 元素之间穿插元素
 * Intersperse element between elements
 * @param a T[]
 * @param s T
 * @returns T[]
 */
const intersperse = <T>(a: T[], s: T): T[] => [...Array(2 * a.length - 1)].map((_, i) => (i % 2 ? s : a[i / 2]))

/**
 * 33.partition 根据条件对阵列进行分区
 * Partition an array based on a condition
 * @param arr T[]
 * @param criteria (a:T)=>boolean
 * @returns T[][]
 */
// eslint-disable-next-line no-sequences
const partition = <T, _>(arr: T[], criteria: (a: T) => boolean): T[][] => arr.reduce((acc, i) => (acc[criteria(i) ? 0 : 1].push(i), acc), [[], []] as T[][])

/**
 * 34.merge 合并两个数组
 * Merge two arrays
 * @param a T[]
 * @param b T[]
 * @param d boolean|undefined
 * @returns T[]
 */
const merge = <T, _>(a: T[], b: T[], d?: boolean): T[] => d ? [...new Set(a.concat(b))] : a.concat(b)

/**
 * 35.removeDuplicate 删除数组中的重复值
 * Remove duplicate values in an array
 * @param arr T[]
 * @returns T[]
 */
const removeDuplicate = <T, _>(arr: T[]): T[] => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i))

/**
 * 36.repeat 重复一个数组
 * Repeat an array
 * @param arr T[]
 * @param n number
 * @returns T[]
 */
const repeat = <T, _>(arr: T[], n: number): T[] => Array(n).fill(arr).flat()

/**
 * 37.shuffle 随机播放数组
 * Shuffle an array
 * @param arr T[]
 * @returns T[]
 */
const shuffle = <T, _>(arr: T[]): T[] => arr.map(a => ({ sort: Math.random(), value: a })).sort((a, b) => a.sort - b.sort).map(a => a.value)

/**
 * 38.removeFalsy 从数组中删除虚假值
 * Remove falsy values from array
 * @param arr T[]
 * @returns T[]
 */
const removeFalsy = <T, _>(arr: T[]): T[] => arr.filter(Boolean)

/**
 * 39.chunk 将数组拆分为块
 * Split an array into chunks
 * @param arr T[]
 * @param size number
 * @returns T[][]
 */
// eslint-disable-next-line no-sequences
const chunk = <T>(arr: T[], size: number): T[][] => arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), [] as T[][])

/**
 * 40.sortBy 按给定键对项目数组进行排序
 * Sort an array of items by given key
 * @param arr T[]
 * @param k keyof T
 * @returns T[]
 */
const sortBy = <T extends Record<string, any>, K extends keyof T>(arr: T[], k: K): T[] => arr.concat().sort((a, b) => (a[k] > b[k] ? 1 : a[k] < b[k] ? -1 : 0))

/**
 * 41.transpose 交换矩阵的行和列
 * Swap the rows and columns of a matrix
 * @param matrix T[][]
 * @returns T[][]
 */
const transpose = <T>(matrix: T[][]): T[][] => matrix.reduce((prev, next) => next.map((item, i) => (prev[i] || []).concat(next[i])), [] as T[][])
export const array = {
  toObject,
  isEqual,
  countOccurrences,
  range,
  empty,
  accumulate,
  toNumbers,
  cartesian,
  countBy,
  lastIndex,
  indexOfMin,
  findLongest,
  minBy,
  indexOfMax,
  maxBy,
  min,
  flat,
  getConsecutiveArrays,
  closest,
  indices,
  max,
  getNthItems,
  alphabet,
  average,
  getIntersection,
  getSubsets,
  ranking,
  unique,
  sum,
  union,
  groupBy,
  intersperse,
  partition,
  merge,
  removeDuplicate,
  repeat,
  shuffle,
  removeFalsy,
  chunk,
  sortBy,
  transpose,

}
