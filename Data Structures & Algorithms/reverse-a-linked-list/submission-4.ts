/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let count = 0;
        if (!head) return head;

        let prev: ListNode = head;
        let current: ListNode = head.next;

        if (current === null) return prev;

        let next: ListNode = current.next;

        prev.next = null;
        current.next = prev;

        if (next === null) return current;

        while (true) {
            count++;

            prev = current;
            current = next;
            next = current.next;

            if (next === null) {
                current.next = prev;

                break;
            }

            current.next = prev;
            prev = current;
        }

        return current;
    }
}
