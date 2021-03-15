// 递归实现
function __search(arr: number[], l: number, r: number, target: number): number {
  if (l > r) {
    return -1
  }

  const mid = l + Math.floor((r - l) / 2)
  if (target === arr[mid]) {
    return mid
  }

  if (target < arr[mid]) {
    return __search(arr, l, mid - 1, target)
  }

  return __search(arr, mid + 1, r, target)
}

function binarySearchR(arr: number[], target: number): number {
  return __search(arr, 0, arr.length - 1, target)
}

export default function binarySearch(arr: number[], target: number): number {
  let l = 0
  let r = arr.length - 1

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2)
    if (target === arr[mid]) {
      return mid
    }

    if (target < arr[mid]) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }

  return -1
}
