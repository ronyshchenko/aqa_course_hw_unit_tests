/*
Удалить дубликаты
  - Создайте массив из чисел [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
  - Напишите скрипт, который убирает из массива дубликаты
  - При удалении дубликата, длина массива должна уменьшаться

  Присвойте результат в переменную "unique"
*/
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];

let unique;

// for (let i = 0; i < array.length; ) {
//   if (array.indexOf(array[i], i + 1) !== -1) {
//     array.splice(array.indexOf(array[i], i + 1), 1);
//   } else i++;
// }

for (let i = 0; i < array.length; i++) {
  let duplicateNumberIndex = array.indexOf(array[i], i + 1);
  if (duplicateNumberIndex !== -1)  array.splice(duplicateNumberIndex, 1);
}

unique = [...array];
console.log(unique);
export { unique };
