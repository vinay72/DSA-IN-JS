function pairSum(arr, target) {
    let i = 0
    let j = arr.length - 1
    while(i < j){
        if(arr[i] + arr[j] == target){
            console.log([i, j])
            i++
            j--
        }
        else if(arr[i] + arr[j] > target){
            j--
        }
        else {
            i++
            
        }
    }
}
let arr = [1,2,3,4,5,6]
let target = 6
console.log(pairSum(arr, target))