// https://leetcode-cn.com/problems/delete-node-in-a-linked-list/

import ListNode from './ListNode'

function deleteNode(root: ListNode | null): void {
  if (root == null) {
    return
  } else {
    root.val = (root.next as ListNode).val
    root.next = (root.next as ListNode).next
  }
}
