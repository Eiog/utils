/**
 * 字符串首字母大写
 * 该方法用于将英文字符串的首字母大写处理：
 * @param str string
 * @returns string
 * capitalize("hello world")  // Hello world
 */
const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1)
/**
 * 翻转字符串
 * 该方法用于将一个字符串进行翻转操作，返回翻转后的字符串：
 * @param str string
 * @returns string
 */
const reverse = (str: string): string => str.split('').reverse().join('')
/**
 * 随机字符串
 * 该方法用于生成一个随机的字符串：
 * @returns string
 */
const randomString = (): string => Math.random().toString(36).slice(2)
/**
 * 截断字符串
 * 该方法可以从指定长度处截断字符串:
 * @param string string
 * @param length number
 * @returns string
 */
const truncateString = (string: string, length: number): string => string.length < length ? string : `${string.slice(0, length - 3)}...`
/**
 * 去除字符串中的HTML
 * @param html string
 * @returns string
 */
const stripHtml = (html: string): string => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || ''
export const string = {
  capitalize,
  reverse,
  randomString,
  truncateString,
  stripHtml,

}
