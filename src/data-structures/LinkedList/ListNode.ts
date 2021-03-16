export default class ListNode<E> {
  public e: E | null
  public next: ListNode<E> | null

  constructor(e: E | null, next: ListNode<E> | null) {
    this.e = e
    this.next = next
  }
}
