function __merge(arr: number[], l: number, mid: number, r: number): void {
  const temp = arr.slice(l, r + 1)

  let i = l
  let j = mid + 1

  for (let k = l; k <= r; k++) {
    if (i > mid) {
      arr[k] = temp[j - l]
      j++
    } else if (j > r) {
      arr[k] = temp[i - l]
      i++
    } else {
      if (temp[i - l] <= temp[j - l]) {
        arr[k] = temp[i - l]
        i++
      } else {
        arr[k] = temp[j - l]
        j++
      }
    }
  }
}

function __sort(arr: number[], l: number, r: number): void {
  if (l >= r) {
    return
  }

  const mid = l + Math.floor((r - l) / 2)
  __sort(arr, l, mid)
  __sort(arr, mid + 1, r)
  __merge(arr, l, mid, r)
}

export default function sort(arr: number[]): void {
  __sort(arr, 0, arr.length - 1)
}
