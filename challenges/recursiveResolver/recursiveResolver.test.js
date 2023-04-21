import recursiveResolver from './recursiveResolver'

describe('Weekly challenge - Recursive Function Value Resolver', () => {
  it('should return the input value if not a function', () => {
    const val = recursiveResolver(5)
    expect(val).toBe(5)
  })

  it('should call the function and return its value if the input is a function', () => {
    const fn = jest.fn(() => 42)
    const val = recursiveResolver(fn)
    expect(fn).toHaveBeenCalledTimes(1)
    expect(val).toBe(42)
  })

  it('should handle functions that return other functions', () => {
    const fn1 = jest.fn(() => () => 42)
    const fn2 = jest.fn(() => fn1)
    const val = recursiveResolver(fn2)
    expect(fn2).toHaveBeenCalledTimes(1)
    expect(fn1).toHaveBeenCalledTimes(1)
    expect(val).toBe(42)
  })

  it('should handle deeply nested functions', () => {
    const fn1 = jest.fn(() => () => () => 42)
    const fn2 = jest.fn(() => fn1)
    const val = recursiveResolver(fn2)
    expect(fn2).toHaveBeenCalledTimes(1)
    expect(fn1).toHaveBeenCalledTimes(1)
    expect(val).toBe(42)
  })
})
