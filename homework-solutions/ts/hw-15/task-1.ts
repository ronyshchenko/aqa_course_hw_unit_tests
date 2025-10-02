// Необходимо создать классовую структуру
// 1. Создайте интерфейс IVehicle:
//   Методы:
//     - getDetails(): string — возвращает информацию о транспортном средстве.
//     - start(): string — возвращает строку "The vehicle is starting".

interface IVehicle {
    getDetails(): string;
    start(): string;
}

// 2. Создайте абстрактный класс Vehicle, который имплементирует IVehicle:
//   Реализуйте конструктор с полями:
//     - make (строка)
//     - model (строка)
//   Добавьте методы:
//     - start, возвращающего строку: "The vehicle {make} {model} is starting.".
//     - Абстрактный метод getDetails, который нужно реализовать в классах-наследниках.

abstract class Vehicle implements IVehicle {
    make: string;
    model: string;
    abstract getDetails(): string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    start(): string  {
        return `The vehicle ${this.make} ${this.model} is starting.`   
    };
}

// 3. Создайте класс Car, который наследует Vehicle:
//     - Добавляет поле year (число).
//     - Реализует метода getDetails, возвращающего строку: "{make} {model}, {year}".

class Car extends Vehicle {
     year: number;

    constructor(make: string, model: string, year: number) {
        super(make, model);
        this.year = year;
    }
    getDetails(): string {
        return `${this.make} ${this.model}, ${this.year}`;
    }
}

// 4. Создайте объект класса Car и проверьте работоспособность

let toyota_rav_4: Car = new Car('Toyota', 'RAV 4', 2025)

console.log(toyota_rav_4.getDetails());
console.log(toyota_rav_4.start());

