import { swap } from '../helper'

export default function selectionSort(arr: number[]): void {
  if (arr.length <= 1) {
    return
  }

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    swap(arr, i, minIndex)
  }
}
