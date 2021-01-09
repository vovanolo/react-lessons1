// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }

// for (const number of numbers) {
//   console.log(number);
// }

// for of - те саме що зверху

// вивести за допомогою циклу for(звичайного) в консоль всі елементи масиву

// const people = [
//   {
//     id: 1,
//     name: "ivan",
//   },
//   {
//     id: 2,
//     name: "petro",
//   },
//   {
//     id: 3,
//     name: "vasyl",
//   },
//   {
//     id: 4,
//     name: "vlad",
//   },
// ];

// for (let i = 0; i < people.length; i += 1) {
//   console.log(people[i]);
// }

// за допомою циклу for of вивести імена всіх обєктів масиву

// for (const person of people) {
//   console.log(person.name);
// }
// for (const person of people) {
//   if (person.id > 2) {
//     console.log(person.name);
//   }
// }

// за допомогою методу map записати всі імена обєктів в масив

// const names = people.map(function (person) {
//   return person.name;
// });

// const names = people.map((person) => person.name);

// console.log(names);

// домашнє завдання!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// за допомогою методу reduce знайти сумарну кількість грошей всіх обєктів
// за допомогою методу filter залишити тільки ті обєкти в яких більше 100 money

// const people = [
//   {
//     id: 1,
//     name: "ivan",
//     money: 22,
//   },
//   {
//     id: 2,
//     name: "petro",
//     money: 200,
//   },
//   {
//     id: 3,
//     name: "vasyl",
//     money: 800,
//   },
//   {
//     id: 4,
//     name: "vlad",
//     money: 4000,
//   },
//   {
//     id: 5,
//     name: "sviat",
//     money: 10,
//   },
// ];
