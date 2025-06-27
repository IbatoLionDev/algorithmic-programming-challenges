// Challenge: Given a string, create a function that reverses it without using built-in reverse methods.
// This will help you practice loops and index handling.

function reverseString(s) {
    let reversedStr = "";
    for (let i = s.length - 1; i >= 0; i--) {
        reversedStr += s[i];
    }
    return reversedStr;
}

// Example usage
const testString = "hello";
console.log("Original string:", testString);
console.log("Reversed string:", reverseString(testString));
