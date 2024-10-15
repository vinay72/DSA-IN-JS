function A(num) {
    if (num === 0) {
        return 1;
    }
    let l = num;
    let r = A(num - 1);
    let ans = l * r;
    return ans;
}
console.log(A(5))