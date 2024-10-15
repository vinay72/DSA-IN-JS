function printDescending(n) {
    if(n > 0) {
        console.log(n);
        printDescending(n - 1)
    }
}
printDescending(5)