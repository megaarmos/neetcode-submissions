class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        for (let i = 0; i < nums.length; i++) {
            let difference = target - nums[i];

            let j = nums.indexOf(difference, i + 1);
            if(j == -1) continue;

            return [i,j];
        }
    }
}
