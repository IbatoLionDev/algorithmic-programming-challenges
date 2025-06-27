// Challenge: Given an array of numbers, write a function that finds and returns the maximum value without using predefined sorting functions.

function findMax(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    let maxVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    return maxVal;
}

// Example usage
const testArray = [3, 5, 1, 8, 2, 9, 4];
console.log("Array:", testArray);
console.log("Maximum value:", findMax(testArray));
