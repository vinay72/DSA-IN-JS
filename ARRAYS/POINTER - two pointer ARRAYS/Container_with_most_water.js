function maxArea(height) {
    let l = 0; // Initialize the left pointer to the start of the array
    let r = height.length - 1; // Initialize the right pointer to the end of the array
    let maxArea = Number.MIN_SAFE_INTEGER; // Initialize maxArea to the smallest possible safe integer value

    while (l < r) {

        let currentContainerArea = (r - l) * Math.min(height[l], height[r]);
        maxArea = Math.max(maxArea, currentContainerArea);

        // The loop runs as long as l is less than r, meaning there is at least one container to consider.
        // currentContainerArea is calculated as the product of:
        // (r - l): the width of the container, which is the distance between the left and right pointers.
        // Math.min(height[l], height[r]): the height of the container, which is the shorter of the two heights at l and r. This ensures that the container's height is limited by the shorter line, as water cannot go above it.
        // maxArea is updated to the larger value between the current maxArea and the currentContainerArea.

        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
        // If the height at the left pointer (height[l]) is less than the height at the right pointer (height[r]), we move the left pointer l to the right. This is because moving the shorter height inward gives a chance to find a taller line that might increase the area.
        // Otherwise, we move the right pointer r to the left. This is done for the same reason: to find a potentially taller line that might increase the area.
    }

    return maxArea;
    // After the loop ends, maxArea holds the largest area found, which is then returned as the result.
}

// Example usage:
const height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height)); // Output: 49
