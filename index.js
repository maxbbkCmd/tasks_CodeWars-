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

// ✅
function getGrade(score) {
  if (score >= 0 && score <= 59) {
    return "F";
  } else if (score >= 50 && score <= 69) {
    return "D";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 90 && score <= 99) {
    return "A";
  } else if (score == 100) {
    return "A++";
  } else return "Inner number 0-100";
}

// -------------------------------------------------------------
// 💚 Review JavaScript Fundamentals by Building a Gradebook App 💚
// -------------------------------------------------------------

// Учителя очень довольны программой, которую вы создали до сих пор. Но теперь они хотят иметь простой способ проверить, есть ли у ученика проходная оценка. Проходная оценка - это любая оценка, которая не является «F».

// Напишите функцию hasPassingGrade, которая принимает в качестве параметра оценку студента. Ваша функция должна возвращать true, если у студента есть проходной балл, и false, если нет.

// Используйте функцию getGrade, чтобы получить оценку ученика. Затем проверьте, является ли эта оценка проходной или нет.

// ✅
function hasPassingGrade(score) {
  const result = getGrade(score);

  if (result === "F") {
    return false;
  } else if (result !== "F") {
    return true;
  }
}


console.log(hasPassingGrade(99));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

// -------------------------------------------------------------
// 💚 Review JavaScript Fundamentals by Building a Gradebook App 💚
// -------------------------------------------------------------

// Теперь, когда у учителя есть вся необходимая информация, он хочет иметь возможность отправить ученику сообщение с результатами. Дополните функцию studentMsg параметрами totalScores и studentScore. Функция должна возвращать строку, представляющую сообщение ученику. Если ученик прошел курс, строка должна иметь следующий формат:

// Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.

// Если студент провалил курс, строка должна иметь следующий формат:

// Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.
// Заменить average-goes-here на среднее значение всех баллов. 
// Заменить grade - goes - here на оценку студента.

// Советы:
// Используйте функцию getAverage, чтобы получить средний балл по классу.
// Используйте функцию getGrade, чтобы получить оценку ученика.
// Используйте конкатенацию строк(+) для построения сообщения.
// Будьте осторожны с пунктуацией и пробелами в сообщении.

function studentMsg(totalScores, studentScore) {
  // const 
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

// -------------------------------------------------------------
// 💚 Review JavaScript Fundamentals by Building a Gradebook App 💚
// -------------------------------------------------------------

// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
// Бобу нужен быстрый способ вычисления объема прямоугольного параллелепипеда с тремя значениями: длиной, шириной и высотой прямоугольного параллелепипеда. Напишите функцию, которая поможет Бобу с этим вычислением.

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height
  }
}

// -------------------------------------------------------------
// 💚 CodeWars  💚
// -------------------------------------------------------------

// Дано множество чисел, вернуть аддитивное обратное для каждого. Каждое положительное становится отрицательным, а отрицательное становится положительным.
// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []

const num = [1, 6, 100, 4, 5]

function invert(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] - array[i] - array[i])
  }
  return result
}

console.log(invert([1, 6, 100, 4, 5]));
  

// -------------------------------------------------------------
// 💚 Очень просто: дано число (целое / десятичное / и то, и другое в зависимости от языка), найти его противоположность (аддитивное обратное число).
// -------------------------------------------------------------

function opposite(number) {
  return number - number - number
}


// -------------------------------------------------------------
// 💚 Входная строка всегда будет в нижнем регистре, но может быть пустой. 2.  Если символ в строке — пробел, то пропустите его, как будто это пустое место
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// -------------------------------------------------------------

function wave(str) {
  let result = []
  result.push(str.split('').forEach(item => {
    item.toUpperCase()
  }))
  return result;
}
console.log(wave("hello"));

// -------------------------------------------------------------
// 💚 Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// -------------------------------------------------------------


function upperCase(text) {
  return text.split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
  .join(' ')
}

console.log(upperCase("How can mirrors be real if our eyes aren't real"));


// -------------------------------------------------------------
// 💚 Даны два целых числа a и b, которые могут быть положительными или отрицательными, найти сумму всех целых чисел между ними и включая их и вернуть ее. Если два числа равны, вернуть a или b.
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// -------------------------------------------------------------


function getSum(a, b) {
  let result = 0;

  let min = Math.min(a, b);
  let max = Math.max(a, b);

  for (let i = min; i <= max; i++) {
    result = i + result;
  }
  if (a === b) {
    return min;
  } return result;
}

console.log(getSum(-1, -1));


// -------------------------------------------------------------
// 💚 Завершите функцию, которая принимает два целых числа (a, b, где a < b) и возвращает массив всех целых чисел между входными параметрами, включая их самих.
// a = 1
// b = 4
// --> [1, 2, 3, 4]
// -------------------------------------------------------------


function between(a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  const result = [];

  for (let i = min; i <= max; i++) {
   result.push(i);
  }
  return result
}

console.log(between(1, 10));


