function printAscending(n) {
    if (n > 0) {
        printAscending(n - 1);
        console.log(n);
    }
}

// Call the function with n = 5
printAscending(5);
