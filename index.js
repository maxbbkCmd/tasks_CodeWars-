// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Вам будет дан массив чисел. Вам нужно отсортировать нечетные числа в порядке возрастания, оставив четные числа на своих исходных позициях.
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// ✅
// // Фильтруем и сортируем нечетные числа
// const oddNumbers = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);

// // Вставляем отсортированные нечетные числа обратно в массив
// let oddIndex = 0;
// return array.map(num => {
//     if (num % 2 !== 0) {
//         return oddNumbers[oddIndex++];
//     }
//     return num; // Четные остаются на месте
// });

// -------------------------------------------------------------
// 💚 Review JavaScript Fundamentals by Building a Gradebook App 💚
// -------------------------------------------------------------

// Учитель закончил оценивать тесты своих учеников и нуждается в вашей помощи, чтобы вычислить средний балл по классу.

// Выполните функцию getAverage, которая принимает массив тестовых оценок и возвращает средний балл.

// Средний балл вычисляется путем сложения всех оценок и деления на общее количество оценок.

// Пример кода
// average = sum of all scores / total number of scores
// Для того чтобы вы могли протестировать свой код, мы предоставили несколько вызовов функций.

// Советы

// Вы можете использовать цикл для итерации по массиву оценок и суммирования всех оценок.
// Вы можете использовать свойство length, чтобы получить общее количество оценок.



// ✅
// function getAverage(scores) {
//   let sum = 0;
//   let sumItems = 0;
//   let result = 0;

//   for (let i = 0; i < scores.length; i++) {
//     sum = sum + scores[i];
//   }

//   for (let i = 0; i < scores.length; i++) {
//     sumItems++;
//   }
//     return result = sum / sumItems;
// }

// console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
// console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

// -------------------------------------------------------------
// 💚 Review JavaScript Fundamentals by Building a Gradebook App 💚
// -------------------------------------------------------------

// Теперь учителю нужна ваша помощь в преобразовании оценки ученика в буквенную оценку.

// Заполните функцию getGrade, которая принимает в качестве параметра числовой балл. Ваша функция должна возвращать строку, представляющую буквенную оценку, основанную на баллах.

// Вот баллы и соответствующие им буквенные оценки:


// Вспомните, что вы узнали об условных операторах (if, else if и else).
// Помните, что вы изучали операторы сравнения (>, <, >=, <=, ===).

// ✅function getGrade(score) {
//   if (score >= 0 && score <= 59) {
//     return 'F'
//   } else if (score >= 50 && score <= 69) {
//     return 'D'
//   } else if (score >= 70 && score <= 79) {
//     return 'C'
//   } else if (score >= 80 && score <= 89) {
//     return 'B'
//   } else if (score >= 90 && score <= 99) {
//     return 'A'
//   } else if (score == 100) {
//     return "A++"
//   } else return 'Inner number 0-100'

// }

// console.log(getGrade(100));
// console.log(getGrade(96));
// console.log(getGrade(82));