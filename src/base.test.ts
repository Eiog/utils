import { describe, expect, it } from 'vitest'
import { base } from './base'

describe('base', () => {
  const { toString } = base
  it('should validate toString', () => {
    expect(toString(123)).toBe('[object Number]')
  })
})
