const rawInput = require('./input');

const input = rawInput.split("\n")

const calculatePosition = () => {
  let hor = 0;
  let depth = 0
  const arr = input.map(i => i.split(" "))

  arr.forEach(i => {
    num = Number(i[1]);
    if (i[0] === 'forward') {
      hor += num;
    } else if (i[0] === 'down') {
      depth += num;
    } else if (i[0] === 'up') {
      depth -= num;
    }
  })
  return hor * depth
}

console.log(calculatePosition())
