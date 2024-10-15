function countAnagrams(s, p) {
    function isAnagram(sArr, pArr) {
        for (let i = 0; i < pArr.length; i++) {
            if (pArr[i] !== sArr[i]) {
                return false;
            }
        }
        return true;
    }

    let k = p.length;
    let j = 0;
    let i = 0;
    const sArr = new Array(26).fill(0);
    const pArr = new Array(26).fill(0);
    let count = 0;
    // creating frequency distribution for string p
    for (let l = 0; l < p.length; l++) {
        pArr[p.charCodeAt(l) - 'a'.charCodeAt(0)] += 1;
    }

    while (j < s.length) {
        // doing initial calculation
        sArr[s.charCodeAt(j) - 'a'.charCodeAt(0)] += 1;

        if (j - i + 1 === k) {
            // do main calculation on reaching the window size
            if (isAnagram(sArr, pArr)) {
                count++;
            }
            // Slide the window
            sArr[s.charCodeAt(i) - 'a'.charCodeAt(0)] -= 1;
            i++;
        }
        j++;
    }
    return count;
}

// Example usage
const s = "cbaebabacd";
const p = "abc";
console.log(countAnagrams(s, p)); // Output: 2
