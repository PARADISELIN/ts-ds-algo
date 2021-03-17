import { IMap } from './types'

class ListNode<K, V> {
  public key: K | null
  public value: V | null
  public next: ListNode<K, V> | null

  constructor(key: K, value: V, next: ListNode<K, V> | null) {
    this.key = key === undefined ? null : key
    this.value = value === undefined ? null : value
    this.next = next === undefined ? null : next
  }
}

export default class LinkedListMap<K, V> implements IMap<K, V> {
  private readonly dummyHead: ListNode<unknown, unknown>
  private size: number

  constructor() {
    this.dummyHead = new ListNode<null, null>(null, null, null)
    this.size = 0
  }

  private getNode(key: K): ListNode<K, V> | null {
    let cur = this.dummyHead.next

    while (cur != null) {
      if (cur.key === key) {
        return cur as ListNode<K, V>
      }
      cur = cur.next
    }
    return null
  }

  public getSize(): number {
    return this.size
  }

  public isEmpty(): boolean {
    return this.size === 0
  }

  public add(key: K, value: V): void {
    const node = this.getNode(key)

    if (node == null) {
      this.dummyHead.next = new ListNode(key, value, this.dummyHead.next)
    } else {
      node.value = value
    }
  }

  public contains(key: K): boolean {
    return this.getNode(key) != null
  }

  public get(key: K): V | null {
    const node = this.getNode(key)
    if (node == null) {
      return null
    }
    return node.value
  }

  public set(key: K, newValue: V): void {
    const node = this.getNode(key)
    if (node == null) {
      return
    }
    node.value = newValue
  }

  public remove(key: K): V | null {
    let prev = this.dummyHead

    while (prev.next != null) {
      if (prev.next.key === key) {
        break
      }
      prev = prev.next
    }

    if (prev.next != null) {
      const delNode = prev.next
      prev.next = delNode.next
      delNode.next = null
      this.size--
      return delNode.value as V
    }
    return null
  }
}
