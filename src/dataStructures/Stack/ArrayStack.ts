import { IStack } from './interface'

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
}
