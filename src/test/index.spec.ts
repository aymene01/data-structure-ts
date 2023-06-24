import { describe, expect, it } from 'vitest'

const sum = (a: number, b: number) => a + b

describe('succes case', () => {
  it('Should return 4', () => {
    const result = sum(1, 3)

    expect(result).toBe(4)
  })
})
