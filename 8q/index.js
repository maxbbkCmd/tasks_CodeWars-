// -------------------------------------------------------------
// Сможете ли вы найти иголку в стоге сена?
// Напишите функцию findNeedle(), которая принимает arrayполный мусор, но содержит один"needle"
// После того, как ваша функция найдет иглу, она должна вернуть сообщение (в виде строки), которое гласит:
// "found the needle at position "плюс indexон нашел иголку, так что:
// -------------------------------------------------------------

const arr = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];

const findNeedle = (array) => {
  let result = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "needle") {
      result = `found the needle at position ${i}`;
    } 
  }
  return result;
};

console.log(findNeedle(arr));
