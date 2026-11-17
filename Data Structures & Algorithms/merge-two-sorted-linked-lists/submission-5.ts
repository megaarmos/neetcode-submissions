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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let list1Next = list1;
        let list2Next = list2;

        let mergedListHead = new ListNode();
        let mergedListTail = mergedListHead;

        while (true) {
            if (list1Next === null && list2Next === null) {
                break;
            }

            if (list1Next === null) {
                mergedListTail.next = new ListNode(list2Next.val);
                mergedListTail = mergedListTail.next;

                list2Next = list2Next.next;
                continue;
            }

            if (list2Next === null) {
                mergedListTail.next = new ListNode(list1Next.val);
                mergedListTail = mergedListTail.next;

                list1Next = list1Next.next;
                continue;
            }

            if (list1Next.val < list2Next.val) {
                mergedListTail.next = new ListNode(list1Next.val);
                mergedListTail = mergedListTail.next;

                list1Next = list1Next.next;
            } else if (list1Next.val > list2Next.val) {
                mergedListTail.next = new ListNode(list2Next.val);
                mergedListTail = mergedListTail.next;

                list2Next = list2Next.next;
            } else {
                mergedListTail.next = new ListNode(list1Next.val);
                mergedListTail = mergedListTail.next;

                mergedListTail.next = new ListNode(list2Next.val);
                mergedListTail = mergedListTail.next;

                list1Next = list1Next.next;
                list2Next = list2Next.next;
            }
        }

        return mergedListHead.next;
    }
}
