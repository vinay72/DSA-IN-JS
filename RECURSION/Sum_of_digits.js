function A(num) {
    if (num === 0) {
        return 0;
    }
    let l = num % 10;
    let r = A(Math.floor(num / 10));
    let ans = l + r;
    return ans;
}

// Test the function with some example inputs
console.log(A(123)); // Output: 6 (1 + 2 + 3 = 6)
console.log(A(456)); // Output: 15 (4 + 5 + 6 = 15)
console.log(A(789)); // Output: 24 (7 + 8 + 9 = 24)
