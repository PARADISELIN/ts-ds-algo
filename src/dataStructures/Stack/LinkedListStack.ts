import LinkedList from '../LinkedList/LinkedList'
import { Stack } from './types'

export default class LinkedListStack<E> implements Stack<E> {
  private linkedList: LinkedList<E>

  constructor() {
    this.linkedList = new LinkedList<E>()
  }

  public getSize(): number {
    return this.linkedList.getSize()
  }

  public isEmpty(): boolean {
    return this.linkedList.isEmpty()
  }

  public push(e: E): void {
    this.linkedList.addFirst(e)
  }

  public pop(): E | null {
    return this.linkedList.removeFirst()
  }

  public peek(): E | null {
    return this.linkedList.getFirst()
  }
}
