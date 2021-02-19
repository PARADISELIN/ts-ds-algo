import { IQueue } from './interface'

export default class ArrayQueue<E> implements IQueue<E> {
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

  public print(): void {
    if (this.isEmpty()) {
      console.log('Queue is Empty.')
      return
    }

    let res = 'Queue: front ['

    for (let i = 0; i < this.getSize(); i++) {
      res += this.array[i]
      if (i !== this.getSize() - 1) {
        res += ', '
      }
    }
    res += '] tail'
    console.log(res)
  }
}
