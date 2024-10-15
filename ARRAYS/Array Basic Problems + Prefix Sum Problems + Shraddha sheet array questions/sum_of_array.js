const sumOfArray = (nums) => {
    let sum = 0
    for (let i=0; i < nums.length; i++){
        sum = sum + nums[i]
    }
    return sum

}
const nums = [3,5,6,7,8]
console.log(sumOfArray(nums))