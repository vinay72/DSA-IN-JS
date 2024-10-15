const isAscending = (arr) => {
    for (let i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i+1]){
            // Inside the loop, this if statement checks if the current element arr[i] is greater than the next element arr[i + 1].

            // arr[i] represents the element at the current index i.
            // arr[i + 1] represents the element at the next index.
            // The condition arr[i] > arr[i + 1] checks if the current element is greater than the next element, which would mean the array is not in ascending order.
            return false
        }
    }
    return true
}
let arr = [1,2,3,4,5]
console.log(isAscending(arr))