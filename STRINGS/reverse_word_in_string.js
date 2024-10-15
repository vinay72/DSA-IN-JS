function reverseWords(str) {
    let result = "";
    let word = "";
    
    // Iterate through the string character by character
    for (let i = 0; i <= str.length; i++) {
        // If we encounter a space or reach the end of the string, add the word to the result
        if (str[i] === " " || i === str.length) {
            // Add the word at the beginning of the result to reverse the order
            if (result.length === 0) {
                result = word;
            } else {
                result = word + " " + result;
            }
            // Reset the word variable for the next word
            word = "";
        } else {
            // Build the current word character by character
            word += str[i];
        }
    }
    
    return result;
}

// Example usage:
const input = "the sky is blue";
const output = reverseWords(input);
console.log(output); // Output: "blue is sky the"
