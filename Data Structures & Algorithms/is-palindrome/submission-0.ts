class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const cleanS = s.replace(/[^a-zA-Z0-9]/g, "");

        for (let i = 0; i < cleanS.length / 2; i++) {
            const character1 = cleanS[i].toLowerCase()
            const character2 = cleanS[cleanS.length - i - 1].toLowerCase()

            if (character1 != character2) {
                console.log(character1);
                console.log(character2);

                return false;
            }
        }

        return true;
    }
}
