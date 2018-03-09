/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
package leetcode

func removeNthFromEnd(head *ListNode, n int) *ListNode {
	if head == nil {
		return nil
	}

	list := &ListNode{0, head}
	ptr, run := list, head

	for i := 1; i <= n; i++ {
		run = run.Next
	}
	for run != nil {
		ptr = ptr.Next
		run = run.Next
	}
	ptr.Next = ptr.Next.Next
	return list.Next
}
