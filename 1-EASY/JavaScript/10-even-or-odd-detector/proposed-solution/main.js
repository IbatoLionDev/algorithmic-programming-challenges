// Challenge: Write a function that determines if a number is even or odd. Test with different types of inputs (positive numbers, negative numbers, and zero) to ensure robustness.

function isEven(n) {
    return n % 2 === 0;
}

// Example usage
const testValues = [0, 1, -1, 2, -2, 15, -15];
testValues.forEach(val => {
    const result = isEven(val) ? "even" : "odd";
    console.log(`${val} is ${result}`);
});
