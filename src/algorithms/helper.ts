export function swap(arr: number[], i: number, j: number): void {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min
}

export function generatorRandomArray(len: number, bound: number): number[] {
  const arr = Array<number>(len)

  for (let i = 0; i < len; i++) {
    arr[i] = randomInt(0, bound)
  }
  return arr
}

export function isSorted(arr: number[]): boolean {
  if (arr.length <= 1) {
    return true
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] < 0) {
      return false
    }
  }

  return true
}
