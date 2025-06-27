// Challenge: Create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase letters.

function countVowels(s) {
    const vowels = "aeiou";
    s = s.toLowerCase();
    let count = 0;
    for (const char of s) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Example usage
const testStrings = ["Hello", "World", "Python", "OpenAI"];
testStrings.forEach(str => {
    console.log(`Number of vowels in '${str}': ${countVowels(str)}`);
});
