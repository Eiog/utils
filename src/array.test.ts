import { describe, expect, it } from 'vitest'
import {
  accumulate,
  cartesian,
  countBy,
  countOccurrences,
  empty,
  indexOfMin,
  isEqual,
  lastIndex,
  range,
  toNumbers,
  toObject,
} from './array'

describe('Array', () => {
  it('toObject', () => {
    expect(toObject(
      [
        { id: '1', name: 'Alpha', gender: 'Male' },
        { id: '2', name: 'Bravo', gender: 'Male' },
        { id: '3', name: 'Charlie', gender: 'Female' },
      ],
      'id',
    )).toEqual(
      {
        1: { id: '1', name: 'Alpha', gender: 'Male' },
        2: { id: '2', name: 'Bravo', gender: 'Male' },
        3: { id: '3', name: 'Charlie', gender: 'Female' },
      },
    )
  })
  it('isEqual', () => {
    expect(isEqual([1, 2, 3], [3, 2, 1])).toBe(true)
  })
  it('countOccurrences', () => {
    expect(countOccurrences([1, 2, 3, 4, 1, 1], 1)).toBe(3)
  })
  it('range', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5])
  })
  it('empty', () => {
    expect(empty([1, 2, 3])).toEqual(0)
  })
  it('accumulate', () => {
    expect (accumulate([1, 2, 3])).toEqual([1, 3, 6])
  })
  it('toNumbers', () => {
    expect(toNumbers(['1', '2', '3'])).toEqual([1, 2, 3])
  })
  it('cartesian', () => {
    expect (cartesian([1, 2, 3], [4, 5, 6])).toEqual([[1, 4], [1, 5], [1, 6], [2, 4], [2, 5], [2, 6], [3, 4], [3, 5], [3, 6]])
  })
  it('countBy', () => {
    expect (countBy(
      [
        { branch: 'audi', model: 'q8', year: '2019' },
        { branch: 'audi', model: 'rs7', year: '2020' },
        { branch: 'ford', model: 'mustang', year: '2019' },
        { branch: 'ford', model: 'explorer', year: '2020' },
        { branch: 'bmw', model: 'x7', year: '2020' },
      ],
      'branch',
    )).toEqual({ audi: 2, ford: 2, bmw: 1 })
  })
  it('lastIndex', () => {
    expect(lastIndex(
      [1, 3, 5, 7, 9, 2, 4, 6, 8], i => i % 2 === 1,
    )).toEqual(4)
  })
  it('indexOfMin', () => {
    expect (indexOfMin([1, 2, 3, 4, 5])).toEqual(0)
  })
})
