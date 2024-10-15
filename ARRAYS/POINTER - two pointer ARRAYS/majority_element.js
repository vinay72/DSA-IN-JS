// element occuring more than n/2 times in an array that would be our output

// moores voting algo
// if one element  occurs n/2 Time, all other elements occurs less than n/2 times


function findMajorityElement(nums) {
    // Phase 1: Finding the element
    let ansIndex = 0;
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[ansIndex]) {
            count++;
        } else {
            // cancel out the values if it is different
            count--;
        }

        if (count === 0) {
            ansIndex = i; // pointing ansIndex to the ith value
            count = 1; // resetting the value of count
        }
    }
    // whatever ansIndex is holding, that would be your potential majority element candidate, check whether this is actually the majority element or not
    // check the count of element holding ansIndex and see if its greater than arr.length / 2
    let ansCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[ansIndex]) {
            ansCount++;
        }
    }

    console.log(nums[ansIndex] + "count" + ansCount);

    // check If potential candidate is majority element
    if (ansCount > Math.floor(nums.length / 2)) {
        return nums[ansIndex];
    } else {
        return -1;
    }
}

// Example usage
const nums = [2, 2, 1, 1, 1, 2, 2];
const majorityElement = findMajorityElement(nums);
console.log(majorityElement); // Output: 2
