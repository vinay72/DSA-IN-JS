var findMaxConsecutiveOnes = function (nums) {

    let onesCount = 0
    let maxCount = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            onesCount++
            maxCount = Math.max(maxCount, onesCount);
        }
        else if(nums[i] == 0){
            onesCount = 0
        }


    }
    return maxCount
};
const nums = [1,0,1,1,0,1]
console.log(findMaxConsecutiveOnes(nums));