export interface IQueue<E> {
  enqueue(e: E): void
  dequeue(): E | null
  getFront(): E | null
  getSize(): number
  isEmpty(): boolean
}
