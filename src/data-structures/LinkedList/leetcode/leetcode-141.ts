// https://leetcode-cn.com/problems/linked-list-cycle/

import ListNode from './ListNode'

function hasCycle(head: ListNode | null): boolean {
  if (head == null || head.next == null) {
    return false
  }

  let p = head
  let q = head

  while (p && q && q.next) {
    p = p.next as ListNode
    q = q.next.next as ListNode
    if (p === q) {
      return true
    }
  }
  return false
}
