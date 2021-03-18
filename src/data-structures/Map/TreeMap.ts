import { IMap } from './types'

class TreeNode<K, V> {
  public key: K
  public value: V
  public left: TreeNode<K, V> | null
  public right: TreeNode<K, V> | null

  constructor(key: K, value: V) {
    this.key = key
    this.value = value
    this.left = null
    this.right = null
  }
}

export default class TreeMap<K, V> implements IMap<K, V> {
  private root: TreeNode<K, V> | null
  private size: number

  constructor() {
    this.root = null
    this.size = 0
  }

  private getNode(node: TreeNode<K, V> | null, key: K): TreeNode<K, V> | null {
    if (node == null) {
      return null
    }

    if (key < node.key) {
      return this.getNode(node.left, key)
    } else if (key > node.key) {
      return this.getNode(node.right, key)
    } else {
      return node
    }
  }

  public getSize(): number {
    return this.size
  }

  public isEmpty(): boolean {
    return this.size === 0
  }

  private __add(node: TreeNode<K, V> | null, key: K, value: V): TreeNode<K, V> {
    if (node == null) {
      this.size++
      return new TreeNode<K, V>(key, value)
    }

    if (key < node.key) {
      node.left = this.__add(node.left, key, value)
    } else if (key > node.key) {
      node.right = this.__add(node.right, key, value)
    } else {
      node.value = value
    }

    return node
  }

  public add(key: K, value: V): void {
    this.root = this.__add(this.root, key, value)
  }

  public contains(key: K): boolean {
    return this.getNode(this.root, key) != null
  }

  public get(key: K): V | null {
    const node = this.getNode(this.root, key)

    if (node == null) {
      return null
    }
    return node.value
  }

  public set(key: K, newValue: V): void {
    const node = this.getNode(this.root, key)
    if (node == null) {
      return
    }
    node.value = newValue
  }

  private minimum(node: TreeNode<K, V> | null): TreeNode<K, V> | null {
    if (node == null) {
      return null
    }

    if (node.left == null) {
      return node
    }
    return this.minimum(node.left)
  }

  private removeMin(node: TreeNode<K, V> | null): TreeNode<K, V> | null {
    if (node == null) {
      return null
    }

    if (node.left == null) {
      const delNode = node
      const rightNode = delNode.right
      delNode.right = null
      this.size--
      return rightNode
    }
    node.left = this.removeMin(node.left)
    return node
  }

  private __remove(node: TreeNode<K, V> | null, key: K): TreeNode<K, V> | null {
    if (node == null) {
      return null
    }

    if (key < node.key) {
      node.left = this.__remove(node.left, key)
      return node
    } else if (key > node.key) {
      node.right = this.__remove(node.right, key)
      return node
    } else {
      if (node.left == null) {
        const rightNode = node.right
        node.right = null
        this.size--
        return rightNode
      }

      if (node.right == null) {
        const leftNode = node.left
        node.left = null
        this.size--
        return leftNode
      }

      const successor = this.minimum(node) as TreeNode<K, V>
      successor.right = this.removeMin(node.right)
      successor.left = node.left
      node.left = node.right = null
      return successor
    }
  }

  public remove(key: K): V | null {
    const node = this.getNode(this.root, key)

    if (node != null) {
      this.root = this.__remove(this.root, key)
      return node.value
    }
    return null
  }
}
