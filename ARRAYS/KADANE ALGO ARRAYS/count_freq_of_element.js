function countfreq(arr) {
    arr.sort()
    let count = 1
    for(let i=0; i <= arr.length -1;i++){
        if(arr[i] == arr[i+1]){
            count++
        }
        else {
            console.log(arr[i] + " > ", count)
        }
    }
    console.log(arr[arr.length - 1] + " > ", count);

}
let arr = [1,2,2,1,1,2,5,2]

console.log(countfreq(arr))