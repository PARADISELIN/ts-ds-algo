export default class TreeNode {
  public val: number
  public left: TreeNode | null
  public right: TreeNode | null

  constructor(val: number) {
    this.val = val
    this.left = null
    this.right = null
  }
}
