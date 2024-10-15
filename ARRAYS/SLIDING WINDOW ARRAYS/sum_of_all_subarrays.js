function sumOfSubarrays(arr, k) {
    let i = 0; // windowstart
    let j = 0; // windowend
    let cws = 0; // Current window sum

    while (j < arr.length) {
        cws = cws + arr[j]
        // Reach till the window size specified
        if(j - i + 1 == k){
            console.log('current window sum', cws);
            // we need to slide our window
            // Once you have reached the window size, Slide the window and do your calculations
            cws = cws - arr[i]
            i++ // windowstart++
        } 
        j++ // windowend++
    }
}
const arr = [1, 2, 3, 4, 5];
const k = 3;
sumOfSubarrays(arr, k);