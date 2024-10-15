function A(n) {
    if (n > 0) {
        console.log(n);
        A(n - 1);
        A(n - 1);
        console.log(n);
    }
}

// Execute the function with n = 3
A(3);
// Explanation

// Start with A(3).
// Since n > 0, print 3.
// Call A(2).
// Print 2.
// Call A(1).
// Print 1.
// Call A(0).
// Do nothing since n is not greater than 0.
// Call A(0).
// Do nothing since n is not greater than 0.
// Print 1.
// Call A(1).
// Print 1.
// Call A(0).
// Do nothing since n is not greater than 0.
// Call A(0).
// Do nothing since n is not greater than 0.
// Print 1.
// Print 2.
// Call A(2).
// Print 2.
// Call A(1).
// Print 1.
// Call A(0).
// Do nothing since n is not greater than 0.
// Call A(0).
// Do nothing since n is not greater than 0.
// Print 1.
// Call A(1).
// Print 1.
// Call A(0).
// Do nothing since n is not greater than 0.
// Call A(0).
// Do nothing since n is not greater than 0.
// Print 1.
// Print 2.
// Print 3.