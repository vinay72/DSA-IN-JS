function A(a, b) {
    if (b === 0) {
        return 1;
    }
    let l = a;
    let r = A(a, b - 1);
    let ans = l * r;
    return ans;
}
console.log(A(2,3))