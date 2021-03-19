export default class MinHeap<E> {
  private readonly data: E[]

  constructor(data?: E[]) {
    if (data && data.length !== 1) {
      this.data = data

      // heapify
      for (let i = MinHeap.parent(data.length - 1); i >= 0; i--) {
        this.siftDown(i)
      }
    }
    // normal initialize
    this.data = []
  }

  private swap(i: number, j: number): void {
    const temp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = temp
  }

  private static parent(index: number): number {
    if (index == 0) {
      throw new Error("index-0 doesn't have parent")
    }
    return Math.floor((index - 1) / 2)
  }

  private static leftChild(index: number): number {
    return 2 * index + 1
  }

  private static rightChild(index: number): number {
    return 2 * index + 2
  }

  private siftUp(index: number): void {
    while (index > 0 && this.data[index] < this.data[MinHeap.parent(index)]) {
      this.swap(index, MinHeap.parent(index))
      index = MinHeap.parent(index)
    }
  }

  private siftDown(index: number): void {
    while (MinHeap.leftChild(index) < this.data.length) {
      let j = MinHeap.leftChild(index)
      if (j + 1 < this.data.length && this.data[j + 1] < this.data[j]) {
        j = MinHeap.rightChild(index)
      }
      if (this.data[index] < this.data[j]) {
        break
      }
      this.swap(index, j)
      index = j
    }
  }

  public add(e: E): void {
    this.data.push(e)
    this.siftUp(this.data.length - 1)
  }

  public findMin(): E {
    if (this.isEmpty()) {
      throw new Error('Can not findMax when heap is empty')
    }
    return this.data[0]
  }

  public extractMin(): E {
    const ret = this.findMin()
    this.swap(0, this.data.length - 1)
    this.data.pop()
    this.siftDown(0)
    return ret
  }

  public replace(e: E): E {
    const ret = this.findMin()
    this.data[0] = e
    this.siftDown(0)
    return ret
  }

  public getSize(): number {
    return this.data.length
  }

  public isEmpty(): boolean {
    return this.data.length === 0
  }
}
