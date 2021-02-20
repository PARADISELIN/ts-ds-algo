import { IStack } from './types'

export default class ArrayStack<E> implements IStack<E> {
  private array: E[] = []

  public getSize(): number {
    return this.array.length
  }

  public isEmpty(): boolean {
    return this.getSize() === 0
  }

  public push(e: E): void {
    this.array.push(e)
  }

  public pop(): E | null {
    if (this.isEmpty()) {
      return null
    }
    return this.array.pop() as E
  }

  public peek(): E | null {
    if (this.isEmpty()) {
      return null
    }
    return this.array[this.array.length - 1] as E
  }

  public print(): void {
    if (this.isEmpty()) {
      console.log('Stack is empty.')
      return
    }
    let res = 'Stack: ['
    for (let i = 0; i < this.getSize(); i++) {
      res += this.array[i]
      if (i !== this.getSize() - 1) {
        res += ', '
      }
    }
    res += '] top'
    console.log(res)
  }
}
