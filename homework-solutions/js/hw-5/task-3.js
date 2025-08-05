/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';

vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

let countOfvowels = 0;
let countOfconsonants = 0;

function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

str = word;
str = str.toUpperCase();

consonants.forEach((element) => {
  countOfconsonants = countOfconsonants + countOccurrences(str, element);
});

vowels.forEach((element) => {
  countOfvowels = countOfvowels + countOccurrences(str, element);
});

vowelsAndConsonantsResult = `${word} contains ${countOfvowels} vowels and ${countOfconsonants} consonants`;

//console.log(vowelsAndConsonantsResult);

export { vowelsAndConsonantsResult };
