// -------------------------------------------------------------
const sortBy = 'a';
let arr = [
  { a: 2, b: 2 },
  { a: 3, b: 40 },
  { a: 1, b: 12 }
];

function sortList (sortBy, list) {
  
  return list.sort((a, b) => b[sortBy] - a[sortBy])
}

console.log(sortList(sortBy, arr));