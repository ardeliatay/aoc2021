const rawInput = require('./input');

const input = rawInput.split("\n")

const getColumns = (input) => {
  const columns = []
  for (column = 0; column < input[0].length; column++) {
    columns.push(input.map(n => n[column]))
  }
  return columns
}

const calculateO2 = () => {
  let output = [...input]

  input[0].split('').forEach((i, idx) => {
    const columns = getColumns(output)
    if (output.length === 1) {
      return;
    }
    const zeros = columns[idx].filter(n => n === '0')
    const ones = columns[idx].filter(n => n === '1')

    const bitCriteria = zeros.length > ones.length ? '0' : '1'
    output = output.filter(x => x.charAt(idx) === bitCriteria)
  })

  return output
}


const calculateCO2 = () => {
  let output = [...input]

  input[0].split('').map((i, idx) => {
    const columns = getColumns(output)
    if (output.length === 1) {
      return;
    }
    const zeros = columns[idx].filter(n => n === '0')
    const ones = columns[idx].filter(n => n === '1')

    const bitCriteria = zeros.length > ones.length ? '1' : '0'
    output = output.filter(x => x.charAt(idx) === bitCriteria)
  })

  return output
}

const CO2 = parseInt(calculateCO2(), 2)
const O2 = parseInt(calculateO2(), 2)
console.log(O2 * CO2)
