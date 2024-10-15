function A(arr, index) {
    if (index === arr.length) {
        return 0;
    }
    let l = arr[index];
    let r = A(arr, index + 1);
    let ans = l + r;
    return ans;
}

// Example usage:
let arr = [1, 2, 3, 4, 5];
let result = A(arr, 0);
console.log(result);
