/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/
function checkAge(item) {
  const minAge = 18;
  const maxAge = 60;
  let age;
  age = Number(item);
  
  if (!age && age !== 0) { // Проверка на фолси значения и ноль
    console.log(item, "Incorrect data type");
    return;
  } else if (age < minAge) {
      console.log("You don't have access cause your age is " + age + " It's less then ");
    } else if (age >= minAge && age < maxAge) {
        console.log("Welcome  !");
      } else if (age > maxAge) {
        console.log("Keep calm and look Culture channel");
        } else {
          console.log("Technical work");
          }
}

[0, 10, 17, 18, 19, 59, 60, 61].forEach(item => {
  checkAge(item)
});