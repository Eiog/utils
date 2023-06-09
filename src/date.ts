/**
 * 检查日期是否有效
 * @param val string
 * @returns boolean
 */
const isDateValid = (val: string): boolean => !Number.isNaN(new Date(val).valueOf())
/**
 * 时间格式化
 * @param date Date
 * @returns string
 */
const timeFromDate = (date: Date): string => date.toTimeString().slice(0, 8)
/**
 * Add AM PM suffix to an hour
 * @param h number
 * @returns string
 */
const suffixAmPm = (h: number): string => `${h % 12 === 0 ? 12 : h % 12}${h < 12 ? 'am' : 'pm'}`
/**
 * Calculate the number of difference days between two dates
 * @param date Date
 * @param otherDate Date
 * @returns number
 */
const diffDays = (date: Date, otherDate: Date): number => Math.ceil(Math.abs(date.valueOf() - otherDate.valueOf()) / (1000 * 60 * 60 * 24))
/**
 * Calculate the number of months between two dates
 * @param startDate Date
 * @param endDate Date
 * @returns number
 */
const diffMonth = (startDate: Date, endDate: Date): number => Math.max(0, (endDate.getFullYear() - startDate.getFullYear()) * 12 - startDate.getMonth() + endDate.getMonth())
/**
 * Convert a date to YYYY-MM-DD format
 * @param date Date
 * @returns string
 */
const formatYmd = (date: Date): string => date.toISOString().slice(0, 10)

const plusOneYear: Date = (d => new Date(d.setFullYear(d.getFullYear() + 1)))(new Date())
/**
 * Extract year, month, day, hour, minute, second and millisecond from a date
 * @param date Date
 * @returns string[]
 */
const extract = (date: Date): string[] => date.toISOString().split(/[^0-9]/).slice(0, -1)
/**
 * Convert seconds to hh:mm:ss format
 * @param s number
 * @returns string
 */
const formatSeconds = (s: number): string => new Date(s * 1000).toISOString().substr(11, 8)
/**
 * Get the current quarter of a date
 * @param d Date
 * @returns number
 */
const getQuarter = (d = new Date()): number => Math.ceil((d.getMonth() + 1) / 3)
/**
 * Get the current timestamp in seconds
 * @returns number
 */
const ts = (): number => Math.floor(new Date().getTime() / 1000)
/**
 * Get the day of the year from a date
 * @param date Date
 * @returns number
 */
const dayOfYear = (date: Date): number => Math.floor((date.valueOf() - new Date(date.getFullYear(), 0, 0).valueOf()) / (1000 * 60 * 60 * 24))
/**
 * Get the first date in the month of a date
 * @param d Date
 * @returns Date
 */
const getFirstDate = (d = new Date()): Date => new Date(d.getFullYear(), d.getMonth(), 1)
/**
 * Format a date for the given locale
 * @param date Date
 * @param locale string
 * @returns string
 */
const format = (date: Date, locale: string): string => new Intl.DateTimeFormat(locale).format(date)
/**
 * Get the month name of a date
 * @param date Date
 * @returns string
 */
const getMonthName = (date: Date): string => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', ' November', 'December'][date.getMonth()]
/**
 * Get the last date in the month of a date
 * @param d Date
 * @returns Date
 */
const getLastDate = (d = new Date()): Date => new Date(d.getFullYear(), d.getMonth() + 1, 0)
/**
 * Get the number of days in given month
 * @param month number
 * @param year number
 * @returns number
 */
const daysInMonth = (month: number, year: number): number => new Date(year, month, 0).getDate()
/**
 * Get the timezone string
 * @returns string
 */
const getTimezone = (): string => Intl.DateTimeFormat().resolvedOptions().timeZone
/**
 * Get the tomorrow date
 */
const tomorrow: Date = (d => new Date(d.setDate(d.getDate() + 1)))(new Date())

/**
 * Get the hours and minutes from the decimal time
 * @param value number
 * @returns [number, number]]
 */
const getHoursAndMinutes = (value: number): [number, number] => [Math.floor(value), Math.floor((value * 60) % 60)]
/**
 * Get the total number of days in a year
 * @param year number
 * @returns number
 */
const numberOfDays = (year: number): number => (new Date(year, 1, 29).getDate() === 29 ? 366 : 365)
/**
 * Get the yesterday date
 */
const yesterday: Date = new Date(new Date().valueOf() - 1000 * 60 * 60 * 24)
/**
 * Get the weekday of a date
 * @param date Date
 * @returns string
 */
const getWeekday = (date: Date): string => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()]
/**
 * Sort an array of dates
 * @param arr Date[]
 * @returns Date[]
 */
const sortDescending = (arr: Date[]): Date[] => arr.sort((a, b) => a.getTime() - b.getTime())
/**
 * Initialize the current date but set time to midnight
 * @returns Date
 */
const midnightOfToday = (): Date => new Date(new Date().setHours(0, 0, 0, 0))
export const date = {
  diffDays,
  diffMonth,
  extract,
  format,
  formatSeconds,
  formatYmd,
  getFirstDate,
  getHoursAndMinutes,
  getLastDate,
  getMonthName,
  getQuarter,
  getTimezone,
  getWeekday,
  isDateValid,
  midnightOfToday,
  numberOfDays,
  plusOneYear,
  sortDescending,
  suffixAmPm,
  timeFromDate,
  tomorrow,
  ts,
  yesterday,
  dayOfYear,
  daysInMonth,
}
