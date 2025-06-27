// Challenge: Develop a recursive or iterative function to calculate the factorial of a non-negative integer.
// Consider handling special cases such as negative numbers.

// Recursive factorial function
function factorialRecursive(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}

// Iterative factorial function
function factorialIterative(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage
const testValues = [0, 1, 5, 7];
testValues.forEach(val => {
    console.log(`Factorial of ${val} (recursive): ${factorialRecursive(val)}`);
    console.log(`Factorial of ${val} (iterative): ${factorialIterative(val)}`);
});
