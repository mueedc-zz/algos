/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
    const holder = new ListNode(0)
    holder.next = head
    let first = holder
    let runner = holder
    
    for (let i = 1; i <= n+1; i++) {
        first = first.next
    }
    
    while (first !== null) {
        first = first.next
        runner = runner.next
    }
    runner.next = runner.next.next
    return holder.next
}
