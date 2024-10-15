function mergeSortedArray(arr1, arr2) {

    let globalArray = [arr1.length + arr2.length]
    let i = 0
    let j = 0
    let k = 0

    // These are index variables. i is for traversing arr1, j is for traversing arr2, and k is for traversing globalArray.

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            globalArray[k] = arr1[i]
            k++
            i++
        } else {
            globalArray[k] = arr2[j]
            k++
            j++
        }
    }
    // if(arr1[i] < arr2[j]): This checks if the current element in arr1 is less than the current element in arr2.
    // globalArray[k] = arr1[i]: If arr1[i] is less, it is placed in globalArray at index k.
    // k++ and i++: Increment both k (to move to the next position in globalArray) and i (to move to the next element in arr1).
    // else: If arr1[i] is not less than arr2[j], then:
    // globalArray[k] = arr2[j]: The current element in arr2 is placed in globalArray at index k.
    // k++ and j++: Increment both k (to move to the next position in globalArray) and j (to move to the next element in arr2).




    // if j has reached the end
    while (i < arr1.length) {
        globalArray[k] = arr1[i]
        k++
        i++
    }

    // while (i < arr1.length): This loop runs if there are any remaining elements in arr1 after the main loop.
    // globalArray[k] = arr1[i]: The remaining elements from arr1 are placed in globalArray.
    // k++ and i++: Increment both k and i.


    // if i has reached the end
    while (j < arr2.length) {
        globalArray[k] = arr2[j]
        k++
        j++
    }

    // while (j < arr2.length): This loop runs if there are any remaining elements in arr2 after the main loop.
    // globalArray[k] = arr2[j]: The remaining elements from arr2 are placed in globalArray.
    // k++ and j++: Increment both k and j.

    
    return globalArray

}

let arr1 = [1, 3, 5, 7]
let arr2 = [2, 4, 6, 8]
console.log(mergeSortedArray(arr1, arr2))