const rawInput = require('./input');

const input = rawInput.split("\n").map(i => i.split(''))

const calculateGamma = () => {
  const gamma = [];
  const epsilon = [];
  const columns = []

  for (column = 0; column < input[0].length; column++) {
    columns.push(input.map(n => n[column]))
  }

  columns.map(i => {
    const zeros = i.filter(n => n === '0')
    const ones = i.filter(n => n === '1')

    const bitCriteria = zeros.length > ones.length ? 0 : 1
    gamma.push(bitCriteria)
    epsilon.push(+!bitCriteria)
  })
  return parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2)

}

console.log(calculateGamma())
