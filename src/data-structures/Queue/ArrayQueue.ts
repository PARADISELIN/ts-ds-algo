import { Queue } from './types'

export default class ArrayQueue<E> implements Queue<E> {
  private array: E[] = []

  public getSize(): number {
    return this.array.length
  }

  public isEmpty(): boolean {
    return this.getSize() === 0
  }

  public getFront(): E | null {
    if (this.isEmpty()) {
      return null
    }
    return this.array[0]
  }

  public enqueue(e: E) {
    this.array.push(e)
  }

  public dequeue(): E | null {
    if (this.isEmpty()) {
      return null
    }
    return this.array.shift() as E
  }

  public toString(): string {
    if (this.isEmpty()) {
      return 'Queue is empty.'
    }

    let res = 'Queue: front ['

    for (let i = 0; i < this.getSize(); i++) {
      res += this.array[i]
      if (i !== this.getSize() - 1) {
        res += ', '
      }
    }
    res += '] tail'
    return res
  }
}
