const rawInput = require('./input');

const input = rawInput.split("\n").map(i => Number(i))

const array = []
input.map((i, idx) => {
  if (i > input[idx-1]) {
    array.push('inc');
  }
})

 console.log(array.length)
