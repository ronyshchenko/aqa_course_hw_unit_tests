/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';

const vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z'];

let countOfvowels = 0;
let countOfconsonants = 0;

for(const letter of word.toUpperCase()) {
  for (const symbol of ['A', 'E', 'I', 'O', 'U', 'Y']) {
	  if (symbol === letter) {
		countOfvowels++;
	  }
  }

  for (const symbol of ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z']) {
    if (symbol === letter) {
		countOfconsonants++;
	  }
  }
}

vowelsAndConsonantsResult = `${word} contains ${countOfvowels} vowels and ${countOfconsonants} consonants`;
export { vowelsAndConsonantsResult };
