function findMax(arr) {
   

    let max = -Infinity; // Initialize max with negative infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if a larger element is found
        }
    }

    return max;
}

// Example usage:
const numbers = [10, 5, 20, 8, 15];
console.log("Maximum value:", findMax(numbers));