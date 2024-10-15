function findFirstMissingPositive(nums) {
    console.log("Original Array", nums)
    // Step 1: Convert all negatives to zero
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            nums[i] = 0;
        }
    }
     console.log("After converting negatives to zero", JSON.stringify(nums));
    // Step 2: Using coloring
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (index >= 0 && index < nums.length) {
            if (nums[index] > 0) {
                nums[index] = -nums[index];
            } else if (nums[index] === 0) {
                nums[index] = (-1) * (nums.length + 1);
            }
        }
    }
   console.log("After coloring", JSON.stringify(nums));



    // Step 3: Traverse the array, the first missing positive number's (index + 1th value) will be our first missing positive
    let flag = 0;
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            ans = i + 1;
            flag = 1;
            break;
        }
    }

    if (flag === 1) {
        console.log("first missing", ans);
    } else {
        console.log("first missing", nums.length + 1);
    }
}

// Example usage
const nums = [3, 4, -1, 1];
findFirstMissingPositive(nums);
