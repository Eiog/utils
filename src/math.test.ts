import { describe, expect, it } from 'vitest'
import { math } from './math'

describe('Math', () => {
  const { lerp, midpoint, isInside, contains, degsToRads, normalizeRatio, roundNearest, distance, radsToDegs } = math
  it('lerp', () => {
    expect(lerp(5, 6, 0.1)).toBe(5.1)
  })
  it('midpoint', () => {
    expect(midpoint({ x: 1, y: 1 }, { x: 3, y: 3 })).toEqual([2, 2])
  })
  it('isInside', () => {
    expect(isInside({ x: 1, y: 1 }, { top: 0, left: 0, bottom: 2, right: 2 })).toBeTruthy()
  })
  it('contains', () => {
    expect(contains({ top: 1, left: 1, bottom: 2, right: 2 }, { top: 1, left: 1, bottom: 1, right: 1 })).toBeTruthy()
  })
  it('degsToRads', () => {
    expect(degsToRads(180)).toBe(Math.PI)
  })
  it('normalizeRatio', () => {
    expect(normalizeRatio(1, 0, 2)).toBe(0.5)
  })
  it('roundNearest', () => {
    expect(roundNearest(3.3, 2)).toBe(4)
  })
  it('distance', () => {
    expect(distance({ x: 1, y: 1 }, { x: 3, y: 3 })).toBe(Math.sqrt(8))
  })
  it('radsToDegs', () => {
    expect(radsToDegs(Math.PI)).toBe(180)
  })
})
