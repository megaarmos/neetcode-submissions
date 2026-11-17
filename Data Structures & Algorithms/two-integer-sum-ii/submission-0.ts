class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        const numsMap = new Map(
            numbers.map((num, index) => {
                return [num, index];
            })
        );

        for (let i = 0; i < numbers.length; i++) {
            let difference = target - numbers[i];

            let j = numsMap.get(difference);
            if (j === undefined || i == j) continue;

            return [i+1, j+1];
        }
    }
}
