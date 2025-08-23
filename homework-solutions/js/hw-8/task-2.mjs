/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

function sortedByVowels(wordsArr) {

  const vowels = "aeiou";

  const countVowels = (word) => {
    let count = 0;
    const lowerCaseWord = word.toLowerCase();
    for (let i = 0; i < lowerCaseWord.length; i++) {
      if (vowels.includes(lowerCaseWord[i])) {
        count++;
      }
    }
    return count;
  };
    wordsArr.sort(function(a, b) {
      return countVowels(a) - countVowels(b);
    });

  return wordsArr;
  }

export { sortedByVowels };
