class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits: number[]): number[] {
        let keepExtraDigit = false;

        digits[digits.length - 1] = digits[digits.length - 1] + 1;

        for (let i = digits.length - 1; i >= 0; i--) {
            // let digit = digits[i];
            if (keepExtraDigit) {
                digits[i] = digits[i] + 1;
            }

            if (digits[i] >= 10) {
                digits[i] = digits[i] - 10;
                keepExtraDigit = true;
            } else {
                keepExtraDigit = false;
            }
        }

        if (keepExtraDigit) {
            digits.unshift(1);
        }

        return digits;
    }
}
