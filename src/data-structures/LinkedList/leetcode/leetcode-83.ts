// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/

import ListNode from './ListNode'

// 迭代写法
function deleteDuplicates(head: ListNode | null): ListNode | null {
  let cur = head

  while (cur && cur.next) {
    if (cur.val == cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }

  return head
}

// 递归写法
function deleteDuplicates2(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) {
    return head
  }
  head.next = deleteDuplicates2(head.next)
  return head.val == (head.next as ListNode).val ? head.next : head
}
