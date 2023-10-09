import { test, expect, } from '@jest/globals'

import authorize from '../../src/code-basics/modules'

test('function', () => {
  expect(authorize({ email: 'test@hexlet.io', })).toBe(true)
  expect(authorize({ email: 'hexlet.io@example.com', })).toBe(false)
  expect(authorize({ email: 'test@example.com', })).toBe(false)
  expect(authorize(null)).toBe(false)
})
