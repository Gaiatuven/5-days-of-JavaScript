let word = "Elements";

function reverse(word) {
  const reversedArray = [];

  for (let i = word.length - 1; i >= 0; i--) {
    const valueIndex = word[i];

    reversedArray.push(valueIndex);
  }
  return reversedArray.join('');
}


const result = reverse(word);
console.log(result)