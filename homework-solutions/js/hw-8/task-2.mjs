/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];


let words1 = []

function sortedByVowels(wordsArr) {

  //const word = wordsArr[0];


let countOfvowels;
let countOfvowelsArr = [];

for(const word of words) {
  countOfvowels = 0
for(const letter of word.toUpperCase()) {
  for (const symbol of ['A', 'E', 'I', 'O', 'U', 'Y']) {
	  if (symbol === letter) {
		countOfvowels++;
	  }
  }

  }
  
   words1[countOfvowels] = word
  //countOfvowelsArr.push(countOfvowels);
}
  return words1
  //countOfvowelsArr.sort((a,b) => (a-b));
}


console.log(sortedByVowels(words))




export { sortedByVowels };
