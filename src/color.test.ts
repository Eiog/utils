import { describe, expect, it } from 'vitest'
import { color } from './color'

describe('color', () => {
  const { randomHex, rgbToHex } = color
  it('should validate randomHex ', () => {
    expect(randomHex()).toString()
  })
  it('should validate rgbToHex ', () => {
    expect(rgbToHex(1, 2, 3)).toBe('#010203')
  })
})
