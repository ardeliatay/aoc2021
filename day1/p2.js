const rawInput = require('./input');

const input = rawInput.split("\n").map(i => Number(i))
const array1 = []
input.map((i, idx) => {
  array1.push(i+input[idx+1]+input[idx+2])
})

 const array2 = []
 array1.map((i, idx) => {
   if (i > array1[idx-1]) {
     array2.push('inc');
   }
 })

console.log(array2.length)
