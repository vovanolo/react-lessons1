// repeat

// const people = [
//   "vlad",
//   "sviat",
//   "ivan",
//   "petronel",
//   "vasyl",
//   "yaroslav",
//   "volodymyr",
// ];

// за допомогою звичайного циклу for знайти довжини всіх слів масиву people
// і записати ці довжини в масив peopleLength

// const peopleLength = [];

// for (let i = 0; i < people.length; i += 1) {
//   peopleLength.push(people[i].length);
// }

// console.log(peopleLength);

// зробити те саме тільки за допомогою методу map

// const peopleLength = people.map(function (person) {
//   return person.length;
// });

// console.log(peopleLength);

// const arr = [1, 2, 3, 4, 5];

// Написати функцію яка переробить цей масив в масив окремих сум

// [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4, 1 + 2 + 3 + 4 + 5] = [1, 3, 6, 10, 15];

// function getSum(massive) {
//   let result = [];

//   let totalSum = massive.reduce(function (sum, item) {
//     result.push(sum);
//     return sum + item;
//   });
//   result.push(totalSum);

//   return result;
// }

// console.log(getSum(arr));

// класс Date або класс часу(дати)

// const date = new Date("March 3, 2017");

// console.log(date);

// new Date(year, month, date, hours, minutes, second, miliseconds)

// const date = new Date(2000, 5, 8, 18, 33, 23, 10);

// console.log(date);

// const date = Date.now();//скільки пройшло часу від створення unix

// console.log(date);

// const date = new Date();

// console.log("Date: " + date);

// console.log("getDate(): " + date.getDate());
// // день місяця

// console.log("getDay(): " + date.getDay());
// // день тижня від 0 до 6

// console.log("getMoth(): " + date.getMonth());
// // місяць від 0 до 11

// console.log("getFullYear(): " + date.getFullYear());
// // повний рік(2021)

// console.log("getHours(): " + date.getHours());
// // отримаємо годину

// console.log("getMinutes(): " + date.getMinutes());
// // отримаємо хвилину

// console.log("getSeconds(): " + date.getSeconds());
// // секунди

// console.log("getMilliseconds(): " + date.getMilliseconds());
// //мілісекунди

// console.log("getTime(): " + date.getTime());
// кількість мілісекунд які пройщли з старту епохи unix

// метод toLocaleString()

// const date = new Date();

// const options = {
//   weekday: "short",
//   era: "short",
//   year: "numeric",
//   month: "short",
//   day: "numeric",
//   hour: "2-digit",
//   minute: "2-digit",
// };

// const dateInUkraine = date.toLocaleString("Uk-uk", options);
// console.log(dateInUkraine);

// const dateInUSA = date.toLocaleString("en-US", options);
// console.log(dateInUSA);

// setTimeout(function name() {

// }, 5000);

// домашнє завдання !!!!!!!!!!!!!!!
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
// за допогою методу toLocale string і обєкту options настроїти час в німеччині та італії
