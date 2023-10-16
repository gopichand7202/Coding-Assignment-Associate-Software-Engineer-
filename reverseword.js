function reverseWordsInSentence(sentence) {
  // Split the sentence into an array of words
  const words = sentence.split(' ');

  // Reverse each word in the array
  const reversedWords = words.map(word => {
    return word.split('').reverse().join('');
  });

  // Join the reversed words back into a sentence
  const result = reversedWords.join(' ');

  return result;
}

const inputSentence = prompt();
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence);
