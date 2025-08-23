/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

//let words  = ['apple', 'banana', 'cat'];





function sortedByVowels(wordsArr) {
let words2 = []
let countOfvowels;

for(const word of wordsArr) {
  let words1 = []

for(const letter of word) {
  for (const symbol of ['a', 'e', 'i', 'o', 'u', 'y']) {
	  if (symbol === letter) {
		countOfvowels++;
	  }
  }

  }
  
    words1.push(countOfvowels);
    words1.push(word);
    words2.push( { name: word, age: countOfvowels });
}

    words2.sort(function(a, b) {
      return a.age - b.age; // Сортировка по возрасту по возрастанию
    });

    wordsArr = [...words2.map(elem => elem.name)]

  return wordsArr;
}
//console.log(words)
//console.log(sortedByVowels(words))


// function sortedByVowels(words) {
//   const vowels = "aeiou";

//   const countVowels = (word) => {
//     let count = 0;
//     const lowerCaseWord = word.toLowerCase();
//     for (let i = 0; i < lowerCaseWord.length; i++) {
//       if (vowels.includes(lowerCaseWord[i])) {
//         count++;
//       }
//     }
//     return count;
//   };

//   return words.sort((a, b) => {
//     return countVowels(a) - countVowels(b);
//   });
// }


console.log(sortedByVowels(['apple', 'banana', 'cat']))

export { sortedByVowels };
