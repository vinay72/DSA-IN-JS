function mergeSortedArray(arr1, arr2){
    
    let i = arr1.length - 1
    let j = 0
    
    while(i > 0 && j < arr2.length){
        if(arr1[i] > arr2[j]){
            // swap
            let temp = arr1[i]
            arr1[i] = arr2[j]
            arr2[j] = temp
            j++
            i--
        } else {
            break
        }
    }
    arr1.sort()
    arr2.sort()
    console.log(arr1)
    console.log(arr2)

}

let arr1 = [1,3,5,7]
let arr2 = [2,4,6,8]
console.log(mergeSortedArray(arr1, arr2))