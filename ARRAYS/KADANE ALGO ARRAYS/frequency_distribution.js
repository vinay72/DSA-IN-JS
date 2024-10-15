// frequency distribution - we create a new freq array in which we try 
// we are mapping the given array values with indexes of new freq array. initially all values are zero.

// STEP 1 - TRAVERSE THROUGH THE ENTIRE ARRAY AND FIND THE MAXIMUM VALUE
// STEP 2 - CREATE FREQ ARRAY WITH SIZE AS SAME AS MAX VALUE.

// important concept

function freqDistribution(arr) {
    let max = -Infinity;
    for(let i = 0; i < arr.length; i++){
        max = Math.max(arr[i], max);
    }

    let freqArray = new Array(max + 1).fill(0); 
    // Initialize the frequency array with zeros
    for(let i = 0; i < arr.length; i++){
        let index = arr[i];
        freqArray[index]+=1;
    }
    // we will traverse this freq array, if freq array[i] > 0, log in the console i + " > " + freqArray[i]
    for(let i = 0; i < freqArray.length; i++){
        if(freqArray[i] > 0){
            console.log(i + " > " + freqArray[i]);
        }
    }
}

let arr = [1, 2, 2, 1, 1, 2, 5, 2];
freqDistribution(arr);
