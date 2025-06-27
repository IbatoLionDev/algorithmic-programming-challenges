class WordLadder {
  static wordLadder(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) {
      return [];
    }

    const queue = [[beginWord, [beginWord]]];
    const visited = new Set([beginWord]);

    while (queue.length > 0) {
      const [currentWord, path] = queue.shift();
      if (currentWord === endWord) {
        return path;
      }

      for (let i = 0; i < currentWord.length; i++) {
        for (let c = 97; c <= 122; c++) { // 'a' to 'z'
          const char = String.fromCharCode(c);
          const nextWord = currentWord.slice(0, i) + char + currentWord.slice(i + 1);
          if (wordSet.has(nextWord) && !visited.has(nextWord)) {
            visited.add(nextWord);
            queue.push([nextWord, [...path, nextWord]]);
          }
        }
      }
    }

    return [];
  }
}

export default WordLadder;
