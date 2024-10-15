// very important problem

function trap(height) {
    const n = height.length;
    

    // Precompute leftMax and rightMax arrays
    const leftMax = new Array(n).fill(0);
    const rightMax = new Array(n).fill(0);

   // Function Definition: The function trap takes an array height representing the elevation map where the width of each bar is 1.
   // Length Check: If the length of the height array n is 0, the function returns 0 because no water can be trapped.
   // Arrays Initialization: Two arrays, leftMax and rightMax, both of length n, are initialized to store the maximum height from the left and right for each index. They are initially filled with zeros.
   
   // Compute leftMax Array
   
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }
    // First Element: The first element of leftMax is set to the first element of the height array since there's no element to the left.
    // Loop Through height: For each element from index 1 to n-1, leftMax[i] is set to the maximum value between leftMax[i-1] (the maximum height to the left of i) and height[i] (the current height). This builds an array where each leftMax[i] contains the highest bar from the start up to index i.

    // Compute rightMax Array
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }
    // Last Element: The last element of rightMax is set to the last element of the height array since there's no element to the right.
    // Loop Through height Backwards: For each element from index n-2 to 0, rightMax[i] is set to the maximum value between rightMax[i+1] (the maximum height to the right of i) and height[i] (the current height). This builds an array where each rightMax[i] contains the highest bar from the end up to index i.

    // Calculate the trapped water
    let trappedWater = 0;
    for (let i = 0; i < n; i++) {
        trappedWater += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return trappedWater;

    // Initialize trappedWater: A variable trappedWater is initialized to 0 to accumulate the total amount of trapped water.
    // Loop Through height: For each element from index 0 to n-1, the amount of water trapped at index i is calculated as the difference between the minimum of leftMax[i] and rightMax[i] and the height at index i. This is because the water level at index i is limited by the shorter of the tallest bars to the left and right.
    // Accumulate Water: The calculated water for each index is added to trappedWater.
    // Return the Result: The function returns the total amount of trapped water.
}

// Example usage:
const height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(height)); // Output: 6
