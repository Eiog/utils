import { describe, expect, it } from 'vitest'
import {
  isArray,
  isBlob,
  isBoolean,
  isBrowser,
  isDate,
  isDef,
  isDocument,
  isFile,
  isFormData,
  isFunction,
  isMap,
  isNativeError,
  isNull,
  isNumber,
  isObject,
  isRegExp,
  isSet,
  isString,
  isURLSearchParams,
  isUndefined,
  isWindow,
} from './is'

describe('is', () => {
  it('should validate isDef', () => {
    expect(isDef(String)).toBe(true)
  })
  it('should validate isBoolean', () => {
    expect(isBoolean(true)).toBe(true)
  })
  it('should validate isFunction', () => {
    expect(isFunction(() => {})).toBe(true)
  })
  it('should validate isNumber', () => {
    expect(isNumber(1)).toBe(true)
  })
  it('should validate isString', () => {
    expect(isString('1')).toBe(true)
  })
  it('should validate isObject', () => {
    expect(isObject({})).toBe(true)
  })
  it('should validate isUndefined', () => {
    expect(isUndefined(undefined)).toBe(true)
  })
  it('should validate isNull', () => {
    expect(isNull(null)).toBe(true)
  })
  it('should validate isRegExp', () => {
    expect(isRegExp(/123/)).toBe(true)
  })
  it('should validate isDate', () => {
    expect(isDate(new Date())).toBe(true)
  })
  it('should validate isFile', () => {
    expect(isFile(new File([], 'a'))).toBe(true)
  })
  it('should validate isMap', () => {
    expect(isMap(new Map())).toBe(true)
  })
  it('should validate isSet', () => {
    expect(isSet(new Set())).toBe(true)
  })
  it('should validate isBlob', () => {
    expect(isBlob(new Blob())).toBe(true)
  })
  it('should validate isFormData', () => {
    expect(isFormData(new FormData())).toBe(true)
  })
  it('should validate isURLSearchParams', () => {
    expect(isURLSearchParams(new URLSearchParams())).toBe(true)
  })
  it('should validate isNativeError', () => {
    expect(isNativeError(new Error('error'))).toBe(true)
  })
  it('should validate isDocument', () => {
    expect(isDocument(document ?? undefined)).toBe(true)
  })
  it('should validate isWindow', () => {
    expect(isWindow(window ?? undefined)).toBe(false)
  })
  it('should validate isBrowser', () => {
    expect(isBrowser).toBe(false)
  })
  it('should validate Array', () => {
    expect(isArray([])).toBe(true)
    expect(isArray([1, 2, 3])).toBe(true)
    expect(isArray(new Array(2))).toBe(true)
    expect(isArray([1, 2, 3])).toBe(true)
  })
})
