// https://leetcode-cn.com/problems/reverse-linked-list/

import ListNode from './ListNode'

// 非递归实现
// 双指针
function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null
  let cur = head

  while (cur != null) {
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}

// 递归实现
function reverseList2(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) {
    return head
  }

  const node = reverseList2(head.next)
  head.next.next = head
  head.next = null
  return node
}
