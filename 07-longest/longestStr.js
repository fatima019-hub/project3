function findLongestWord(str) {
  const words = str.split(" ");
  let longestWord = "";

  words.every((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
    return true;
  });

  return longestWord;
}

console.log(
  findLongestWord("lorem ipsum dolor sit amet consectetur adipisicing elit")
);
