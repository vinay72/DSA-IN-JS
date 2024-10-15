// VARIABLE WINDOW SIZE PROBLEM, SIZE OF THE WINDOW IS NOT GIVEN
function lengthoflongestsubarray(arr, k) {
    let i = 0
    let j = 0
    let currentwindowsum = 0
    let longestWindow = 0



    while (j < arr.length) {
        currentwindowsum = currentwindowsum + arr[j]
        // Reach till the window size specified
        if(currentwindowsum == k){
            console.log('current window sum', currentwindowsum);
            // we need to slide our window
            // Once you have reached the window size, Slide the window and do your calculations
            longestWindow = Math.max(longestWindow, j- i + 1)
            i++ // windowstart++
        } 
        else if(currentwindowsum > k) {
            currentwindowsum -= arr[i]
            i++
            if(currentwindowsum == k){
                
                longestWindow = Math.max(longestWindow, j- i + 1)
                
            } 
        }
        j++ // windowend++
    }

    return longestWindow
}

const arr = [4,1,1,1,2,3,5];
const k = 8;
console.log(lengthoflongestsubarray(arr, k));