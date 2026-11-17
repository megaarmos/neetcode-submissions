class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n: number): boolean {
        let count = 0;
        let numberToCycle = n;
        const cyclesSet = new Set<number>([numberToCycle]);

        while (numberToCycle !== 1) {
            let cycledNumber = 0;

            while (numberToCycle > 0) {
                let lastDigit = numberToCycle % 10;
                cycledNumber += lastDigit * lastDigit;
                numberToCycle = (numberToCycle - lastDigit) / 10;
            }

            numberToCycle = cycledNumber;
            if (cyclesSet.has(numberToCycle)){
                return false;
            }
            cyclesSet.add(numberToCycle);

            count++;
        }

        return true;
    }
}
