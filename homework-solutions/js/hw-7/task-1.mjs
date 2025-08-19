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

//console.log(mergeArrays([1,2], [3,4], [5,6]));



/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
let arrayWords = [];
let arrayWords1 = [];
let arraySymbols = [];
//let arraySymbols1 = [];
let stringFromArrayWords;
let stringFromArraySymbols;
let resultArr = [];

let x;
function devideBy(sentence) {
  if(sentence.length === '') {
    return sentence;
  }
  arrayWords = sentence.split(' ');
  //console.log(arrayWords)
  for(let i=0; i<arrayWords.length; i++ ) {
    let arraySymbols1 = [];
    if (arrayWords[i].length !== 0){ 
      
      arraySymbols = arrayWords[i].split('');
      //console.log(arraySymbols);
      
      for(let el of arraySymbols) {
        //console.log(el);
        x= el.toLowerCase();
         arraySymbols1.push(x);
         //console.log(x);
      }
      //console.log(arraySymbols1);

    if(i==0) {
      arraySymbols1[0] = arraySymbols[0].toLowerCase();
    } else {
        arraySymbols1[0] = arraySymbols[0].toUpperCase();
    }

    stringFromArraySymbols = arraySymbols1.join('');
    resultArr.push(stringFromArraySymbols);
    }
    
  }
  stringFromArrayWords = resultArr.join('_');
  return stringFromArrayWords;
}

let res = devideBy('I    am    an     engineer')
console.log(res);



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

let fibonachiFromN = fibonacci(8)

//console.log(fibonachiFromN)

export { mergeArrays, fibonacci, devideBy };
