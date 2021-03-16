import ListNode from '../LinkedList/ListNode'
import { Queue } from './types'

export default class LinkedListQueue<E> implements Queue<E> {
  private head: ListNode<E> | null
  private tail: ListNode<E> | null
  private size: number

  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  public getSize(): number {
    return this.size
  }

  public isEmpty(): boolean {
    return this.size === 0
  }

  public enqueue(e: E): void {
    // 但凡tail为空 说明这个链表为空
    if (this.tail == null) {
      this.tail = new ListNode<E>(e, null)
      this.head = this.tail
    } else {
      this.tail.next = new ListNode<E>(e, null)
      this.tail = this.tail.next
    }
    this.size++
  }

  public dequeue(): E | null {
    if (this.isEmpty()) {
      return null
    }

    const ret = this.head as ListNode<E>
    this.head = ret.next
    ret.next = null

    // 如果head为空，说明在删除之前链表中只有一个元素
    // 需要将tail指向retNode情况改为tail指向null
    // 此时整个链表为空
    if (this.head == null) {
      this.tail = null
    }

    this.size--
    return ret.e
  }

  public getFront(): E | null {
    if (this.isEmpty()) {
      return null
    }
    return (this.head as ListNode<E>).e
  }

  public toString(): string {
    if (this.isEmpty()) {
      return 'Queue is empty.'
    }

    let res = `Queue: size = ${this.getSize()}\n`
    res += 'front '

    let cur = this.head
    while (cur != null) {
      res += `${cur.e}->`
      cur = cur.next
    }
    res += 'NULL tail'
    return res
  }
}
