class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numsMap = new Map(
            nums.map((num, index) => {
                return [num, index];
            })
        );

        for (let i = 0; i < nums.length; i++) {
            let difference = target - nums[i];

            let j = numsMap.get(difference);
            if (j === undefined || i == j) continue;

            return [i, j];
        }
    }
}
