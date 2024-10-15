function moveallzeroesfromback(arr){
    
    let i = 0 
    let j = arr.length - 1
    
    while(i < j){
        if(arr[i] == 0){
            // swap arr[i], swap arr[j]
            
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            j--
            
        } else {
            i++
        }
    }
    return arr
}

let arr = [1, 0, 0,6,7,0]

console.log(moveallzeroesfromback(arr))