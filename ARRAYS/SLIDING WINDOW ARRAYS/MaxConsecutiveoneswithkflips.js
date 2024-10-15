function maxConsecutiveOnes(arr, k) {
    let zeroCount = 0
    let windowstart = 0
    let maxConsecutiveOne = 0

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == 0){
            zeroCount++
        }
        while (zeroCount > k){
            // do zeroCount-- only if windowstart is zero
            if(arr[windowstart] == 0){
                zeroCount--
            }
            windowstart++
        }

        maxConsecutiveOne = Math.max(maxConsecutiveOne, i - windowstart + 1)
    }
    console.log('max consecutiveone',maxConsecutiveOne);

}
const arr = [1,1,0,0,0,1,1,1,1,1]
let k = 3
maxConsecutiveOnes(arr, k)

// ALGORITHM

// Traverse the array using j
// maintain a variable zeroCount to track the occurences of no of zeroes.
// if zeroCount > k
//     shrink the window till the point zeroCount < k