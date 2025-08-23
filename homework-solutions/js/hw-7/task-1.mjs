/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...args) {
  let resultArrays = [];
  for(let elem of args) {
    resultArrays.push(...elem)
  }

  return resultArrays;
}

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */

function devideBy(sentence) {

  let arrayWords = [];
  let arraySymbols = [];
  let stringFromArrayWords;
  let stringFromArraySymbols;
  let resultArr = [];

  if(sentence.length === '') {
    return sentence;
  }

  arrayWords = sentence.split(' ');
  
  for(let i=0; i<arrayWords.length; i++ ) {
    
    let arraySymbolsNew = [];
    
    if (arrayWords[i].length !== 0){ 
      
      arraySymbols = arrayWords[i].split('');
      
      for(let el of arraySymbols) {
         arraySymbolsNew.push(el.toLowerCase());
      }

    if(i==0) {
      arraySymbolsNew[0] = arraySymbols[0].toLowerCase();
    } else {
        arraySymbolsNew[0] = arraySymbols[0].toUpperCase();
    }

    stringFromArraySymbols = arraySymbolsNew.join('');
    resultArr.push(stringFromArraySymbols);
    }
    
  }
  stringFromArrayWords = resultArr.join('_');
  return stringFromArrayWords;
}

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {

  let firstFibonachi = 0;
  let secondFibonachi = 1;
  let nextFibonachi;

   if(n == 0) {
      return firstFibonachi;
    } else if (n == 1) {
      return secondFibonachi;
    } else {
        for(let i=2; i<=n;i++){
          nextFibonachi=firstFibonachi + secondFibonachi;
          firstFibonachi = secondFibonachi;
          secondFibonachi = nextFibonachi;
        }
      }
  return nextFibonachi;
}

export { mergeArrays, fibonacci, devideBy };
