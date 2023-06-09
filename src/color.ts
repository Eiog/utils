/**
 * 将RGB转化为十六机制
 * @param r number
 * @param g number
 * @param b number
 * @returns string
 */
const rgbToHex = (r: number, g: number, b: number): string => `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`

/**
 * 获取随机十六进制颜色
 * @returns string
 */
const randomHex = (): string => `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padEnd(6, '0')}`

export const color = {
  rgbToHex,
  randomHex,
}
