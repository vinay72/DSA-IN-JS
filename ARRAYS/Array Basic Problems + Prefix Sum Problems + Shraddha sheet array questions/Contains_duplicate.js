function hasDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i], i + 1) !== -1) {
            return true; // Duplicate found
        }
    }
    return false; // No duplicates
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
console.log(hasDuplicates(arr)); // Output: false

const arrWithDupes = [1, 2, 3, 4, 5, 3];
console.log(hasDuplicates(arrWithDupes)); // Output: true

// Step-by-Step Execution:


// First Iteration (i = 0):

// Current element: arr[0] = 1
// Call: arr.indexOf(1, 1) (find the index of 1 starting from index 1)
// Result: -1 (no occurrence of 1 after index 0)
// Condition: if (-1 !== -1) → false
// No duplicate found, proceed to the next iteration.
// Second Iteration (i = 1):

// Current element: arr[1] = 2
// Call: arr.indexOf(2, 2) (find the index of 2 starting from index 2)
// Result: -1 (no occurrence of 2 after index 1)
// Condition: if (-1 !== -1) → false
// No duplicate found, proceed to the next iteration.
// Third Iteration (i = 2):

// Current element: arr[2] = 3
// Call: arr.indexOf(3, 3) (find the index of 3 starting from index 3)
// Result: 5 (there is another 3 at index 5)
// Condition: if (5 !== -1) → true
// Duplicate found (another 3 exists at index 5), so return true.
// Breakdown of Key Steps:
// First Iteration:

// The current element is 1, and the indexOf function looks for another 1 starting from index 1. Since it doesn't find another 1, it returns -1, and the loop proceeds to the next iteration.
// Second Iteration:

// The current element is 2, and indexOf checks for another 2 starting from index 2. No duplicates are found, so the loop proceeds.
// Third Iteration:

// The current element is 3, and indexOf checks for another 3 starting from index 3. It finds another 3 at index 5. This is a duplicate, so the function immediately returns true.
// Output:
// For the array [1, 2, 3, 4, 5, 3], the function returns true since there is a duplicate (3).

// Time Complexity:
// This approach uses a nested search (indexOf inside a loop), so it has a time complexity of O(n²) in the worst case, where n is the length of the array. This is because, for each element, indexOf scans through part of the array, and that scan takes linear time for each iteration of the loop.
