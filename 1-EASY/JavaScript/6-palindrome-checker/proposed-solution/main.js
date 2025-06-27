// Challenge: Create a function that determines if a string is a palindrome, meaning it reads the same forwards and backwards.

function isPalindrome(s) {
    const normalized = s.toLowerCase().replace(/\s+/g, '');
    return normalized === normalized.split('').reverse().join('');
}

// Example usage
const testStrings = ["radar", "hello", "level", "world"];
testStrings.forEach(str => {
    console.log(`'${str}' is palindrome: ${isPalindrome(str)}`);
});
