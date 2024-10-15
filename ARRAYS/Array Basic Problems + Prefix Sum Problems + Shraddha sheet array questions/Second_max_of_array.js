const secondMax = (arr) => {
    let max = -Infinity
    let secondMax = -Infinity
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max){
            secondMax = max // replace second max with already calculated max
            max = arr[i]
        }
        else if(arr[i] > secondMax && arr[i] < max){
            secondMax = arr[i]
        }
    }
    return secondMax
}
let arr = [1,4,2,5]
console.log(secondMax(arr))