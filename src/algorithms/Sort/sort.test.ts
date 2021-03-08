import selectionSort from './selectionSort'
import insertionSort from './insertionSort'
import { generatorRandomArray, isSorted } from '../helper'
import mergeSort from './mergeSort'

describe('test various sorting algorithms', () => {
  let len: number
  let bound: number
  let arr: number[]

  beforeEach(() => {
    len = 100000
    bound = 100000
    arr = generatorRandomArray(len, bound)
  })

  it('test selection sort algorithm', () => {
    expect(isSorted(arr)).toBeFalsy()
    selectionSort(arr)
    expect(isSorted(arr)).toBeTruthy()
  })

  it('test insertion sort algorithm', () => {
    expect(isSorted(arr)).toBeFalsy()
    insertionSort(arr)
    expect(isSorted(arr)).toBeTruthy()
  })

  it('test merge sort algorithm', () => {
    expect(isSorted(arr)).toBeFalsy()
    mergeSort(arr)
    expect(isSorted(arr)).toBeTruthy()
  })
})
