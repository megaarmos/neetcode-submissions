class Solution {
    /**
     * @param {number[]} sortedNumbers
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        // const sortedNumbers = [...nums];
        // let mid = Math.floor(sortedNumbers.length / 2);
        // let count = 0;

        // while (count < 20) {
        //     count++;

        // console.log(mid, sortedNumbers)
        //     if (sortedNumbers[mid] === target) {
        //         return mid;
        //     } else if (target > sortedNumbers[mid]) {
        //         sortedNumbers.splice(0, mid)
        //         mid = Math.floor(mid / 2);

        //         continue;
        //     } else if (target < sortedNumbers[mid]) {
        //         sortedNumbers.splice(-mid)
        //         mid = Math.floor((sortedNumbers.length + mid) / 2);

        //         continue;
        //     }
        // }

        let count = 0;
        let min = 0;
        let max = nums.length;
        let mid = Math.floor(nums.length / 2);

        while (min !== mid) {
            count++;

            if (nums[mid] === target) {
                return mid;
            } else if (target > nums[mid]) {
                min = mid;
                mid = Math.floor((max + mid) / 2);

                continue;
            } else if (target < nums[mid]) {
                max = mid;
                mid = Math.floor(max / 2);

                continue;
            }
        }

        if (nums[mid] === target) return mid;

        return -1;
    }
}
