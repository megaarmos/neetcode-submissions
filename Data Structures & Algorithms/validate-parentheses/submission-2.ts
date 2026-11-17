class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const openCharacterStack = [];

        if (s.length % 2 === 1) return false;

        for (let i = 0; i < s.length; i++) {
            let character = s[i];

            if (["[", "{", "("].includes(character)) openCharacterStack.push(character);
            if (["]", "}", ")"].includes(character)) {
                let lastOpenCharacter = openCharacterStack[openCharacterStack.length - 1];

                if (character == "]" && lastOpenCharacter != "[") return false;
                else if (character == "]" && lastOpenCharacter == "[") openCharacterStack.pop();

                if (character == "}" && lastOpenCharacter != "{") return false;
                else if (character == "}" && lastOpenCharacter == "{") openCharacterStack.pop();

                if (character == ")" && lastOpenCharacter != "(") return false;
                else if (character == ")" && lastOpenCharacter == "(") openCharacterStack.pop();
            }
        }

        if (openCharacterStack.length > 0) return false;

        return true;
    }
}
