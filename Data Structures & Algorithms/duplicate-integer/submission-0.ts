class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        for (let x = 0; x < nums.length; x++) {
            for (let y = 0; y < nums.length; y++) {
                if(x == y) continue;
                
                if(nums[x] == nums[y]) {
                    return true;
                }
            }
        }

        return false;
    }
}
