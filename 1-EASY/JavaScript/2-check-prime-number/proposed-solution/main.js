// Challenge: Implement a function that determines if a number is prime.
// Pay attention to edge cases such as negative values and the number 1.

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    if (n <= 3) {
        return true;
    }
    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

// Example usage
const testNumbers = [-1, 0, 1, 2, 3, 4, 5, 29, 35];
testNumbers.forEach(num => {
    console.log(`${num} is prime: ${isPrime(num)}`);
});
