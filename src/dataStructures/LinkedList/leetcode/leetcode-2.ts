// https://leetcode-cn.com/problems/add-two-numbers/

import ListNode from './ListNode'

// 非递归写法
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let p1 = l1
  let p2 = l2

  // 新链表的虚拟头节点
  const dummyHead = new ListNode(-1)
  let cur = dummyHead

  // 进位 0 or 1
  let carry = 0

  while (p1 || p2) {
    const value1 = p1 ? p1.val : 0
    const value2 = p2 ? p2.val : 0
    const newValue = value1 + value2 + carry
    carry = Math.floor(newValue / 10)
    cur.next = new ListNode(newValue % 10)

    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
    cur = cur.next
  }
  if (carry) {
    cur.next = new ListNode(carry)
  }
  return dummyHead.next
}

// 递归写法
function addTwoNumbers2(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  return add(l1, l2, 0)
}

// 两数相加的递归算法
// p q 分别代表指向l1 l2的指针
// carry表示极为
function add(
  p: ListNode | null,
  q: ListNode | null,
  carry: number,
): ListNode | null {
  if (p == null && q == null && carry === 0) {
    return null
  }

  const n = p ? p.val : 0
  const m = q ? q.val : 0
  const v = m + n + carry
  const c = Math.floor(v / 10)
  const node = new ListNode(v % 10)
  node.next = add(p ? p.next : null, q ? q.next : null, c)
  return node
}
