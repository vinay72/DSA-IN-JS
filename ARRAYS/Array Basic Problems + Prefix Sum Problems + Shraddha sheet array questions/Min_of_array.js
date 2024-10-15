function findMin(arr) {
   
    // Step 1: Initialize a variable `minValue` with the value `Infinity`.
    let minValue = Infinity; // Initialize minValue with  infinity

    // Purpose: minValue is initialized to Infinity to ensure that any number in the array will be smaller than this initial value. This is a safe starting point because any finite number will be smaller than Infinity.
    // Why Infinity?: By starting with the highest possible number (Infinity), you can easily replace it with any smaller number you find during the iteration through the array.

    // Step 2: Loop through the array to find the smallest value.
    for (let i = 0; i < arr.length; i++) {
        // Purpose: This loop iterates over the elements of the array arr from index 0 to the last index (arr.length - 1).
        // Explanation:
        // i = 0: Starts the loop from the first element.
        // i < arr.length: Ensures the loop runs until the last element of the array.
        // i++: Increments i by 1 after each iteration, moving to the next element in the array.


        // Step 3: Compare each element with `minValue`.
        if (arr[i] < minValue) {
            // Purpose: Inside the loop, the function compares the current element (arr[i]) with the current minValue.
            // Explanation: The condition arr[i] < minValue checks if the current element is smaller than the stored minValue. If true, the value of minValue is updated.


            minValue = arr[i]; // Update minValue if a smallest element is found
            // Purpose: If the condition arr[i] < minValue is true, this line updates minValue to the current element (arr[i]), because it is the smallest value encountered so far.
        }
    }

    return minValue;
}

// Example usage:
const arr = [10, 5, 20, 8, 15];
console.log("Minimum value:", findMin(arr));