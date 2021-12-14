arr = [1,2,3,4,5,6,7,8]

const sumIt = (array) => {
  return array.reduce((accum, num) => {
    return accum + num
  }, 0) 
}

console.log(sumIt(arr))