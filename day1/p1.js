const rawInput = require('./input');

const input = rawInput.split("\n").map(i => Number(i))

const array = input.filter((i, idx) => i > input[idx-1])

 console.log(array.length)
