export interface IStack<E> {
  push(e: E): void
  pop(): E | null
  peek(): E | null
  getSize(): number
  isEmpty(): boolean
}
