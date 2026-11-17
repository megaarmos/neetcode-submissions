class Solution {
    createCharacterFrequencyArray(str: string): number[] {
        const characterFrequency = new Array(26).fill(0);

        for (let i = 0; i < str.length; i++) {
            const index = str.charCodeAt(i) - 97;
            characterFrequency[index]++;
        }

        return characterFrequency;
    }

    groupAnagrams(strs: string[]): string[][] {
        const groupedAngramsMap = new Map<string, number>();
        const groupedAngramsArray: string[][] = [];

        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];
            const strFrequencyAsString = this.createCharacterFrequencyArray(str).join("|");

            if (groupedAngramsMap.has(strFrequencyAsString) === false) {
                groupedAngramsArray[groupedAngramsMap.size] = [str];
                groupedAngramsMap.set(strFrequencyAsString, groupedAngramsMap.size);
            } else {
                groupedAngramsArray[groupedAngramsMap.get(strFrequencyAsString)].push(str);
            }
        }

        return groupedAngramsArray;
    }
}
