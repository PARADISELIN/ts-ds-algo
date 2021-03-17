export interface IMap<K, V> {
  add(key: K, value: V): void
  remove(key: K): V | null
  contains(key: K): boolean
  get(key: K): V | null
  set(key: K, newValue: V): void
  getSize(): number
  isEmpty(): boolean
}
