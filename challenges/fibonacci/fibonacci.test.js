import { fibonacci, printFibonacci } from './fibonacci'
import fibResult from './expectedResult'

describe('fibonacci', () => {
  it('returns an array of fibonacci sequenced numbers', () => {
    expect(fibonacci(1)[0]).toEqual('0')
    expect(fibonacci(2)[1]).toEqual('1')
    expect(fibonacci(3)[2]).toEqual('1')
    expect(fibonacci(5)[4]).toEqual('3')
    expect(fibonacci(6)[5]).toEqual('5')
    expect(fibonacci(100)[99]).toEqual('354224848179261915075')
  })
})

describe('printFibonacci', () => {
  it('prints the given amount of fibonacci sequenced numbers', () => {
    expect(printFibonacci(1)).toEqual('1')
    expect(printFibonacci(2)).toEqual('1,1')
    expect(printFibonacci(3)).toEqual('1,1,2')
    expect(printFibonacci(5)).toEqual('1,1,2,3,5')
    expect(printFibonacci(10)).toEqual('1,1,2,3,5,8,13,21,34,55')
    expect(printFibonacci(100)).toEqual(fibResult)
  })
})
