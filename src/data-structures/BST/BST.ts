import TreeNode from './TreeNode'

export default class BST {
  private root: TreeNode | null
  private size: number

  constructor() {
    this.root = null
    this.size = 0
  }

  public getSize(): number {
    return this.size
  }

  public isEmpty(): boolean {
    return this.size === 0
  }

  private __add(treeNode: TreeNode | null, val: number): TreeNode {
    if (treeNode == null) {
      this.size++
      return new TreeNode(val)
    }

    if (val < treeNode.val) {
      treeNode.left = this.__add(treeNode.left, val)
    } else if (val > treeNode.val) {
      treeNode.right = this.__add(treeNode.right, val)
    }
    return treeNode
  }

  public add(val: number): void {
    this.root = this.__add(this.root, val)
  }

  private __contains(treeNode: TreeNode | null, val: number): boolean {
    if (treeNode == null) {
      return false
    }

    if (val === treeNode.val) {
      return true
    } else if (val < treeNode.val) {
      return this.__contains(treeNode.left, val)
    } else {
      return this.__contains(treeNode.right, val)
    }
  }

  public contains(val: number): boolean {
    return this.__contains(this.root, val)
  }

  private __preOrder(treeNode: TreeNode | null): void {
    if (treeNode == null) {
      return
    }

    console.log(treeNode.val)
    this.__preOrder(treeNode.left)
    this.__preOrder(treeNode.right)
  }

  public preOrder(): void {
    this.__preOrder(this.root)
  }

  private __inOrder(treeNode: TreeNode | null): void {
    if (treeNode == null) {
      return
    }

    this.__inOrder(treeNode.left)
    console.log(treeNode.val)
    this.__inOrder(treeNode.right)
  }

  public inOrder(): void {
    this.__inOrder(this.root)
  }

  private __postOrder(treeNode: TreeNode | null): void {
    if (treeNode === null) {
      return
    }

    this.__postOrder(treeNode.left)
    this.__postOrder(treeNode.right)
    console.log(treeNode.val)
  }

  public postOrder(): void {
    this.__postOrder(this.root)
  }

  public levelOrder(): void {
    if (this.root == null) {
      return
    }

    const q: TreeNode[] = []
    q.push(this.root)

    while (q.length !== 0) {
      const treeNode = q.shift() as TreeNode
      console.log(treeNode.val)
      if (treeNode.left) {
        q.push(treeNode.left)
      }
      if (treeNode.right) {
        q.push(treeNode.right)
      }
    }
  }

  private __minimum(treeNode: TreeNode | null): TreeNode | null {
    if (treeNode?.left == null) {
      return treeNode
    }
    return this.__minimum(treeNode.left)
  }

  public minimum(): number | undefined {
    if (this.size == 0) {
      return undefined
    }
    return this.__minimum(this.root)?.val
  }

  private __maximum(treeNode: TreeNode | null): TreeNode | null {
    if (treeNode?.right == null) {
      return treeNode
    }
    return this.__maximum(treeNode.right)
  }

  public maximum(): number | undefined {
    if (this.size == 0) {
      return undefined
    }
    return this.__maximum(this.root)?.val
  }

  private __removeMin(treeNode: TreeNode | null): TreeNode | null {
    if (treeNode === null) {
      return null
    }

    if (treeNode.left == null) {
      const right = treeNode.right
      treeNode.right = null
      this.size--
      return right
    }
    treeNode.left = this.__removeMin(treeNode.left)
    return treeNode
  }

  public removeMin(): number | undefined {
    const ret = this.minimum()
    this.root = this.__removeMin(this.root)
    return ret
  }

  private __removeMax(treeNode: TreeNode | null): TreeNode | null {
    if (treeNode == null) {
      return null
    }

    if (treeNode.right == null) {
      const left = treeNode.left
      treeNode.left = null
      this.size--
      return left
    }
    treeNode.right = this.__removeMax(treeNode.right)
    return treeNode
  }

  public removeMax(): number | undefined {
    const ret = this.maximum()
    this.root = this.__removeMax(this.root)
    return ret
  }

  private __remove(treeNode: TreeNode | null, val: number): TreeNode | null {
    if (treeNode == null) {
      return null
    }

    if (val < treeNode.val) {
      treeNode.left = this.__remove(treeNode.left, val)
      return treeNode
    } else if (val > treeNode.val) {
      treeNode.right = this.__remove(treeNode.right, val)
      return treeNode
    } else {
      if (treeNode.left == null) {
        const right = treeNode.right
        treeNode.right = null
        this.size--
        return right
      }

      if (treeNode.right == null) {
        const left = treeNode.left
        treeNode.left = null
        this.size--
        return left
      }

      const successor = this.__minimum(treeNode.right) as TreeNode
      successor.right = this.__removeMin(treeNode.right)
      successor.left = treeNode.left
      treeNode.left = treeNode.right = null
      return successor
    }
  }

  public remove(val: number): void {
    this.root = this.__remove(this.root, val)
  }
}
