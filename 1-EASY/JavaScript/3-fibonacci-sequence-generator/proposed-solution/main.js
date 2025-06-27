// Challenge: Create a generator that returns the Fibonacci sequence up to n terms.
// You can explore iterative and recursive approaches to solve the problem.

// Iterative generator function
function* fibonacciIterative(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        yield a;
        [a, b] = [b, a + b];
    }
}

// Recursive generator function
function* fibonacciRecursive(n, a = 0, b = 1) {
    if (n === 0) return;
    yield a;
    yield* fibonacciRecursive(n - 1, b, a + b);
}

// Example usage
const n = 10;
console.log("Iterative Fibonacci sequence:");
for (const num of fibonacciIterative(n)) {
    process.stdout.write(num + " ");
}
console.log("\nRecursive Fibonacci sequence:");
for (const num of fibonacciRecursive(n)) {
    process.stdout.write(num + " ");
}
console.log();
