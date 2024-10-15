// DUTCH NATIONAL FLAG
function dutchNationalFlagSort(arr) {
    let low = 0;
    let high = arr.length - 1;
    let i = 0;

    while (i <= high) {
        if (arr[i] === 0) {
            // swap with value present at low
            [arr[i], arr[low]] = [arr[low], arr[i]]; // Swap arr[i] and arr[low]
            low++;
            i++;
        } else if (arr[i] === 1) {
            i++;
        } else if (arr[i] === 2) {
            // swap with value present at high
            [arr[i], arr[high]] = [arr[high], arr[i]]; // Swap arr[i] and arr[high]
            high--;
        }
    }

    return arr;
}

// Example usage:
const arr = [2, 0, 2, 1, 1, 0];
console.log(dutchNationalFlagSort(arr)); // Output: [0, 0, 1, 1, 2, 2]
