function prefixSum(arr) {
    let ansArr = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]; // Add the current element to the sum
        ansArr[i] = sum;     // Store the result in the ansArr
    }
    return ansArr;
}

const arr = [1, 2, 3, 4, 5];
console.log(prefixSum(arr));  // Output: [1, 3, 6, 10, 15]
