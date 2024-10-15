// Function to print Fibonacci sequence up to n elements
function printFibonacci(n) {
    let firstElement = 0
    let secondElement = 1
    let c = 0
    
    for (let i=2; i <= n; i++){
        c = firstElement + secondElement
        firstElement = secondElement
        secondElement = c
    }
    return c;
}
let n = 4; // You can change the value of n as needed

// Print the Fibonacci sequence
console.log(printFibonacci(n));
