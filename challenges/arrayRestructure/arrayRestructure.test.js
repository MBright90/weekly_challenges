import { restructureArray, sortedRestructureArray } from './arrayRestructure'

describe('arrayRestructure - original', () => {
  it('Should return array as numbers, letter, misc', () => {
  // order numbers and letters
    const result = restructureArray([2, 'b', 4, 'd', 3, 'a', 'c', 'e', 5, 1])
    expect(result).toEqual([2, 4, 3, 5, 1, 'b', 'd', 'a', 'c', 'e'])

    // order numbers, letters, and misc
    const secondResult = restructureArray([2, 'b', '!', 4, 'd', '&', 3, 'a', 'c', '😃', 'e', 5, 1])
    expect(secondResult).toEqual([2, 4, 3, 5, 1, 'b', 'd', 'a', 'c', 'e', '!', '&', '😃'])
  })
})

describe('sortedArrayRestructure', () => {
  it('orders within types', () => {
    expect(
      sortedRestructureArray(
        [2, '3', 'b', '!', 4, 'd', '&', 3, 'a', 'c', '😃', 'e', 5, 1],
        true,
      ),
    ).toEqual([1, 2, 3, 3, 4, 5, 'a', 'b', 'c', 'd', 'e', '!', '&', '😃'])
  })
})
