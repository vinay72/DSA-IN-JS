function moveallzeroestoend(arr){
    
    let j = 0 
    // j is used to keep track of the position where the next non-zero element should be placed. Initially, it is set to 0.
    
    for(let i=0; i< arr.length; i++){
        if(arr[i] != 0){
            // For each element arr[i], it checks if the element is not zero.
            // swap arr[i], swap arr[j]
            // swap non zeroth element with the first zero
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            // If arr[i] is not zero, it performs the following operations:
            // Temporary Storage: The value of arr[i] is stored in a temporary variable temp.
            // Swap: The value of arr[i] is replaced with the value of arr[j]. This effectively moves the non-zero element to the position j.
            // Assign Temporary Value: The value of arr[j] is assigned to arr[i] using the temporary variable temp. This completes the swap.
            // Increment j: The j variable is incremented by 1 to point to the next position for the potential swap.
            j++
            
        } 
    }
    return arr
}

let arr = [1, 0, 0,6,7,0]

console.log(moveallzeroestoend(arr))

// DRY RUN EACH STEP



// Initial setup:
// arr = [1, 0, 0, 6, 7, 0]
// j = 0

// First iteration (i = 0):
// arr[0] = 1, which is not zero.
// Swap arr[0] and arr[j] (since j = 0, no actual swap is needed as i and j are the same).
// Increment j: j = 1

// Array state: [1, 0, 0, 6, 7, 0]
// Second iteration (i = 1):
// arr[1] = 0, which is zero.
// No swap, j remains unchanged.

// Array state: [1, 0, 0, 6, 7, 0]
// Third iteration (i = 2):
// arr[2] = 0, which is zero.
// No swap, j remains unchanged.

// Array state: [1, 0, 0, 6, 7, 0]
// Fourth iteration (i = 3):
// arr[3] = 6, which is not zero.
// Swap arr[3] and arr[j] (swap arr[3] with arr[1]).
// Increment j: j = 2

// Array state after swap: [1, 6, 0, 0, 7, 0]
// Fifth iteration (i = 4):
// arr[4] = 7, which is not zero.
// Swap arr[4] and arr[j] (swap arr[4] with arr[2]).
// Increment j: j = 3

// Array state after swap: [1, 6, 7, 0, 0, 0]
// Sixth iteration (i = 5):
// arr[5] = 0, which is zero.
// No swap, j remains unchanged.
// Array state: [1, 6, 7, 0, 0, 0]

// Final Output:
// After completing all iterations, the final array is: [1, 6, 7, 0, 0, 0].
// Conclusion:
// All non-zero elements have been moved to the front, and all zeroes are at the end. The function returns [1, 6, 7, 0, 0, 0].






