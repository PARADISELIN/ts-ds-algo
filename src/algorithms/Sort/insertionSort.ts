import { swap } from '../helper'

function insertionSortNoOptimized(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j - 1 >= 0 && arr[j] < arr[j - 1]; j--) {
      swap(arr, j, j - 1)
    }
  }
}

export default function insertionSort(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    const currentObservedElement = arr[i]
    let j: number

    for (j = i; j - 1 >= 0 && currentObservedElement < arr[j - 1]; j--) {
      arr[j] = arr[j - 1]
    }

    arr[j] = currentObservedElement
  }
}
