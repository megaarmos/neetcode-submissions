class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const sCharacterFrequency = new Map();
        const tCharacterFrequency = new Map();
        for (let i = 0; i < s.length; i++) {
            if (sCharacterFrequency.has(s[i])) {
                sCharacterFrequency.set(s[i], sCharacterFrequency.get(s[i]) + 1);
            } else {
                sCharacterFrequency.set(s[i], 1);
            }
        }

        for (let i = 0; i < t.length; i++) {
            if (tCharacterFrequency.has(t[i])) {
                tCharacterFrequency.set(t[i], tCharacterFrequency.get(t[i]) + 1);
            } else {
                tCharacterFrequency.set(t[i], 1);
            }
        }

        for (const [key, value] of sCharacterFrequency) {
            if (tCharacterFrequency.get(key) !== value) {
                console.log(tCharacterFrequency.get(key) !== value);
                return false;
            }
        }

        return true;
    }
}
