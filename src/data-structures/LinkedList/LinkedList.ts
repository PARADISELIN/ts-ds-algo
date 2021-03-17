import ListNode from './ListNode'

export default class LinkedList<E> {
  private readonly dummyHead: ListNode<E>
  private size: number

  constructor() {
    this.dummyHead = new ListNode<E>(null, null)
    this.size = 0
  }

  public getSize(): number {
    return this.size
  }

  public isEmpty(): boolean {
    return this.size === 0
  }

  public add(index: number, e: E): void {
    if (index < 0 || index > this.size) {
      return
    }

    let prev = this.dummyHead
    for (let i = 0; i < index; i++) {
      prev = prev.next as ListNode<E>
    }
    prev.next = new ListNode<E>(e, prev.next)
    this.size++
  }

  public addFirst(e: E) {
    this.add(0, e)
  }

  public addLast(e: E) {
    this.add(this.size, e)
  }

  public contains(e: E): boolean {
    let cur = this.dummyHead.next

    while (cur != null) {
      if (cur.e === e) {
        return true
      }
      cur = cur.next
    }
    return false
  }

  public get(index: number): E | null {
    if (index < 0 || index >= this.size) {
      return null
    }

    let cur = this.dummyHead.next
    for (let i = 0; i < index; i++) {
      cur = cur?.next as ListNode<E>
    }
    return cur?.e as E
  }

  public getFirst() {
    return this.get(0)
  }

  public getLast() {
    return this.get(this.size - 1)
  }

  public remove(index: number): E | null {
    if (index < 0 || index >= this.size) {
      return null
    }

    let prev = this.dummyHead
    for (let i = 0; i < index; i++) {
      prev = prev.next as ListNode<E>
    }

    const delNode = prev.next as ListNode<E>
    prev.next = delNode.next
    delNode.next = null
    this.size--
    return delNode?.e as E
  }

  public removeFirst() {
    return this.remove(0)
  }

  public removeLast() {
    return this.remove(this.size - 1)
  }

  public removeElement(e: E): void {
    let prev = this.dummyHead

    while (prev.next != null) {
      if (prev.next.e === e) {
        break
      }
      prev = prev.next
    }

    if (prev.next != null) {
      const delNode = prev.next
      prev.next = delNode.next
      delNode.next = null
      this.size--
    }
  }

  public toString(): string {
    let res = ''

    let cur = this.dummyHead.next
    while (cur != null) {
      res += `${String(cur.e)}->`
      cur = cur.next
    }
    res += 'NULL'
    return res
  }
}
