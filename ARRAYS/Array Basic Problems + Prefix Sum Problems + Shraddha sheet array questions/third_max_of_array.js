const thirdMax = (arr) => {
    let max = -Infinity
    let secondMax = -Infinity
    let thirdMax = -Infinity
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max){
            thirdMax = secondMax
            secondMax = max // replace second max with already calculated max
            max = arr[i]
        }
        else if(arr[i] > secondMax && arr[i] < max){
            thirdMax = secondMax
            secondMax = arr[i]
        }
        else if(arr[i] > thirdMax && arr[i] < secondMax){
            thirdMax = arr[i]
        }
    }
    return secondMax
}
let arr = [1,4,2,5]
console.log(thirdMax(arr))