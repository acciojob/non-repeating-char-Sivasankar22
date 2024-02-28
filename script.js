function firstNonRepeatedChar(str) {
    // Create an object to store the count of each character
    const charCount = {};

    // Iterate over the string to count the occurrences of each character
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Iterate over the string again to find the first non-repeated character
    for (const char of str) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeated character
        }
    }

    // If no non-repeated character is found, return null
    return null;
}

// Get user input for the string
const input = prompt("Enter a string");

// Display the result
alert(firstNonRepeatedChar(input));
