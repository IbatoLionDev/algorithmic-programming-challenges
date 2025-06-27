// Challenge: Create a function that, given an integer, returns the sum of its digits.
// Make sure to handle negative numbers and the special case of zero.

function sumOfDigits(n) {
    n = Math.abs(n);
    if (n === 0) {
        return 0;
    }
    let total = 0;
    while (n > 0) {
        total += n % 10;
        n = Math.floor(n / 10);
    }
    return total;
}

// Example usage
const testValues = [0, 123, -456, 7890];
testValues.forEach(val => {
    console.log(`Sum of digits of ${val}: ${sumOfDigits(val)}`);
});
