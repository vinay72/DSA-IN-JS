function kadanealgo(arr){
    let currentSum = 0;
    let maxSum = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        currentSum = currentSum + arr[i]
        maxSum = Math.max(currentSum, maxSum)
        if (currentSum < 0) {
            currentSum = 0
        }
    }
    return maxSum

}
let arr = [1,2, -4, 5,6]
console.log(kadanealgo(arr))