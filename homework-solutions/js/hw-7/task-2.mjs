/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
return typeof word === 'string' && (word.split('').reverse().join('').toLowerCase() === word.toLowerCase()) 
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {

  if(typeof sentence !== 'string' || sentence.length == 0) {
    return []
  }
 
  let arrayOfWord = sentence.split(' ').sort((a, b) => b.length - a.length ) .filter((elem, i, arr) => {
      return i==0 || arr[i].length == arr[0].length  
    }
  )

  return arrayOfWord
}

export { isPalindrom, findLongestWords };
