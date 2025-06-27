// Challenge: Create a function that counts the frequency of each word in a given text.
// Consider normalization of case and removal of punctuation.

function wordFrequency(text) {
    const punctuationRegex = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g;
    text = text.toLowerCase().replace(punctuationRegex, '');
    const words = text.split(/\s+/);
    const freq = {};
    for (const word of words) {
        if (word.length === 0) continue;
        freq[word] = (freq[word] || 0) + 1;
    }
    return freq;
}

// Example usage
const sampleText = "Hello world! Hello everyone. Welcome to the world of Python.";
const frequencies = wordFrequency(sampleText);
for (const [word, count] of Object.entries(frequencies)) {
    console.log(`'${word}': ${count}`);
}
