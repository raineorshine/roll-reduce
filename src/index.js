const sum = (x, y) => (+x) + (+y)
const average = list => list.reduce(sum, 0)/list.length

export default (size = Infinity, reducer, start) => {

  const values = []
  let cursor = 0

  return {
    length: () => values.length,
    reduce: () => start !== undefined
      ? values.reduce(reducer, start)
      : values.reduce(reducer),
    push: value => {
      values[cursor] = value
      cursor = (cursor + 1) % size
    },
    sum: () => values.reduce(sum, 0),
    average: () => average(values),
  }
}
