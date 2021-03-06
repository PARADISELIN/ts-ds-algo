// https://leetcode-cn.com/problems/remove-linked-list-elements/

import ListNode from './ListNode'

// 最早在leetcode中提交的是这一份代码，相比递归来说略显麻烦
function removeElements(head: ListNode | null, val: number): ListNode | null {
  while (head != null && head.val === val) {
    const delNode = head
    head = head.next
    delNode.next = null
  }

  if (head == null) {
    return head
  }

  let prev = head

  while (prev.next != null) {
    if (prev.next.val === val) {
      const delNode = prev.next
      prev.next = delNode.next
      delNode.next = null
    } else {
      prev = prev.next
    }
  }

  return head
}

// 使用虚拟头节点解决head需要特殊处理的情况
// 减少代码复杂度
function removeElements2(head: ListNode | null, val: number): ListNode | null {
  const dummyHead = new ListNode()
  dummyHead.next = head

  let prev = dummyHead
  while (prev.next != null) {
    if (prev.next.val === val) {
      const delNode = prev.next
      prev.next = prev.next.next
      delNode.next = null
    } else {
      prev = prev.next
    }
  }
  return dummyHead.next
}

// 使用递归
function removeElements3(head: ListNode | null, val: number): ListNode | null {
  if (head == null) {
    return null
  }
  head.next = removeElements3(head.next, val)
  return head.val === val ? head.next : head
}
