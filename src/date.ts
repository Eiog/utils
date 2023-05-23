/**
 * 检查日期是否有效
 * @param val string
 * @returns boolean
 */
export const isDateValid = (val: string): boolean => !Number.isNaN(new Date(val).valueOf())
/**
 * 计算两个日期之间的间隔
 * @param date1 Date
 * @param date2 Date
 * @returns number
 */
export const dayDif = (date1: Date, date2: Date): number => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)
/**
 * 查找日期位于一年中的第几天
 * @param date Date
 * @returns number
 */
export const dayOfYear = (date: Date): number => Math.floor((Number(date) - Number(new Date(date.getFullYear(), 0, 0))) / 1000 / 60 / 60 / 24)
/**
 * 时间格式化
 * @param date Date
 * @returns string
 */
export const timeFromDate = (date: Date): string => date.toTimeString().slice(0, 8)
