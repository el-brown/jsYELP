

const double = (popsicle) => {
  return popsicle.map((num) => num * 2)
}

// console.log(double(arr))

// FILTER

const words = ['great', 'cool', 'smart', 'exuberant', 'splendiferous', 'perspicacious']

const result = words.filter((word) => word.length < 6)

// console.log(result)

const sort = (array) => {
  evens = array.filter((n) => n % 2 === 0)
  odds = array.filter((n) => n % 2 !== 0)
  return {evens, odds}
}

// console.log(sort(arr))

arr = [1,2,3,4,5,6,7,8,9,10]
// REDUCE

const sumIt = (array) => {
  return array.reduce((accum, num) => {
    return accum + num 
  }, 0)
}

console.log(sumIt(arr))


