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