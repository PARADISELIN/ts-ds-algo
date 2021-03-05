// https://leetcode-cn.com/problems/reverse-linked-list-ii

import ListNode from './ListNode'

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number,
): ListNode | null {
  const dummyHead = new ListNode(-1)
  dummyHead.next = head

  let prev = dummyHead
  for (let i = 0; i < left - 1; i++) {
    prev = prev.next
  }
  let cur = prev.next
  let next: ListNode | null

  for (let i = 0; i < right - left; i++) {
    next = cur.next
    cur.next = next.next
    next.next = prev.next
    prev.next = next
  }

  return dummyHead.next
}
