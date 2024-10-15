// Recursive function to calculate the sum of the first n natural numbers
function sumOfNaturalNumbers(n) {
    // Base case: if n is 1, return 1 (since the sum of the first 1 natural number is 1)
    if (n === 1) {
        return 1;
    }

    // Recursive case: sum of first n natural numbers is n + sum of first (n-1) natural numbers
    return n + sumOfNaturalNumbers(n - 1);
}

// Example usage:
const n = 10; // You can change this value to any positive integer
console.log(`The sum of the first ${n} natural numbers is: ${sumOfNaturalNumbers(n)}`);
