// Function to create the ansArr array and populate it
function generateFibonacci(n) {
    // Initialize the ansArr array with n+1 size
    let ansArr = new Array(n + 1);

    // the array needs to have 6 slots, corresponding to indices 0 through 5. This is why we create an array of size n + 1.

    // Set the initial values
    ansArr[0] = 0;
    ansArr[1] = 1;

    // Iterate from i = 2 to n
    for (let i = 2; i < ansArr.length; i++) {
        ansArr[i] = ansArr[i - 1] + ansArr[i - 2];
    }

    // This for loop starts from i = 2 and goes up to n. In each iteration, 
    // the current value ansArr[i] is calculated as the sum of the previous two values
    // (ansArr[i - 1] and ansArr[i - 2]). This is based on the Fibonacci rule: F(n) = F(n-1) + F(n-2).

    // Return the ansArr array
    return ansArr[n];
}

// Specify the value of n
let n = 4; // You can change the value of n as needed

// Generate the ansArr array
let ansArr = generateFibonacci(n);

// Print the ansArr array
console.log(ansArr);
