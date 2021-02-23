import { Queue } from './types'

export default class LoopQueue<E> implements Queue<E> {
  private data: E[]
  private front: number
  private tail: number
  private size: number

  constructor(capacity: number) {
    // 有意识地浪费一个存储空间
    this.data = Array(capacity + 1)
    this.front = 0
    this.tail = 0
    this.size = 0
  }

  private isFull(): boolean {
    return (this.tail + 1) % this.data.length === this.front
  }

  private resize(newCapacity: number): void {
    const newData = Array(newCapacity + 1)
    for (let i = 0; i < this.size; i++) {
      newData[i] = this.data[(i + this.front) % this.data.length]
    }
    this.data = newData
    this.front = 0
    this.tail = this.size
  }

  public getCapacity(): number {
    return this.data.length
  }

  public isEmpty(): boolean {
    return this.front === this.tail
  }

  public getSize(): number {
    return this.size
  }

  public getFront(): E | null {
    if (this.isEmpty()) {
      return null
    }
    return this.data[this.front]
  }

  public enqueue(e: E) {
    if (this.isFull()) {
      this.resize(this.getCapacity() * 2)
    }
    this.data[this.tail] = e
    this.tail = (this.tail + 1) % this.data.length
    this.size++
  }

  public dequeue(): E | null {
    if (this.isEmpty()) {
      return null
    }
    const ret = this.data[this.front]
    this.front = (this.front + 1) % this.data.length
    this.size--
    if (
      this.size === Math.floor(this.getCapacity() / 4) &&
      Math.floor(this.getCapacity() / 2) !== 0
    ) {
      this.resize(Math.floor(this.getCapacity() / 2))
    }

    return ret
  }

  public toString(): string {
    if (this.isEmpty()) {
      return 'Queue is empty.'
    }
    let res = `LoopQueue: size = ${this.getSize()}, capacity = ${this.getCapacity()}\n`
    res += 'front ['
    for (let i = this.front; i !== this.tail; i = (i + 1) % this.data.length) {
      res += String(this.data[i])
      if ((i + 1) % this.data.length !== this.tail) {
        res += ', '
      }
    }
    res += '] tail'
    return res
  }
}
