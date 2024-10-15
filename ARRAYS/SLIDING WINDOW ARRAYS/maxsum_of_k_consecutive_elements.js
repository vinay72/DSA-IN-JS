function maxSumofallsubarrays(arr, k) {
    let i = 0; // windowstart
    let j = 0; // window end
    let cws = 0; // Current window sum
    let maxSum = -Infinity;

    while (j < arr.length) {
        cws = cws + arr[j]
        // Reach till the window size specified
        if(j - i + 1 == k){
            maxSum = Math.max( maxSum, cws)
            
            // we need to slide our window
            // Once you have reached the window size, Slide the window and do your calculations
            cws = cws - arr[i]
            i++ // windowstart++
        } 
        j++ // windowend++
        
    }
    return maxSum
}
const arr = [2,3,5,2,9,7,1];
const k = 3;
console.log(maxSumofallsubarrays(arr, k));