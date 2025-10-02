// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта

interface IUser {
    name: string;
    age: number;
}

type UserKeys = keyof IUser;

const arr =[
    {name: 'Nata', age:41},
    {name: 'Roman', age:53}
]

const result = getValuesByKey(arr, 'age');

console.log(result)

function getValuesByKey<T extends object>(arr: T[], key: keyof T ) {
    return arr.map((el) => el[key]);
} 