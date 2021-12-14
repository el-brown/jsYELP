const taco = {id:1, name:'chicken', price:20, about:'Yummy'}

const taco1 = {id:2, name:'carne asada', price:18, about:'Tasty'}

const taco2 = {id:3, name:'fish', price:30, about:'So good'}



const tacos = [taco, taco1, taco2]



// write a function that takes an tacoOBJ and a id
// and returns a new object with name changed to "changed"
const newName = (taco) => {
  return {...taco, name: "changed"}
}; 

console.log(newName(taco));
console.log("........")


// Map, reduce, and filter are all array methods in JavaScript. 
// Each one will iterate over an array and change it. 
// They return a new array based on the result of the function. 


//MAP creates a new array by transforming 
//every element in an array individually.

// arr = [1,2,3,4,5,6,7,8]

// const double = (popsicle) => {
//   return popsicle.map((p) => p * 2)
// }

// console.log(double(arr))

// //FILTER creates a new array by removing elements that don't belong.

// const words = ['great', 'cool', 'smart', 'exuberant', 'splendiferous', 'perspicacious'];

// const result = words.filter( word => word.length > 6 );

// arr = [1,2,3,4,5,6,7,8]

// const sort = (arr) => {
//   evens = arr.filter((n) => n % 2 === 0)
//   odds = arr.filter((n) => n % 2 !== 0)
//   return {evens, odds}
// };

// console.log(sort(arr))

// // reduce, on the other hand, takes all of the elements 
// // in an array and reduces them into a single value.
// const sumIt = (array) => {
//   return array.reduce((accum, num) => {
//     return accum + num
//   }, 0) 
// }

// console.log(sumIt(arr))

// console.log(sumIt(double(arr)))

// // //Using forEach
// // const evenOdds = (arr) => {
// //   let odds = []
// //   let evens = []
// //   Array.forEach(num=>{
// //     if num%2===)
// //   {
// //     evens.push(num)
// //   }else {
// //     odds.push(num)
// //   }

// //   return [odds, evens];
// //   return {odds, evens};
// //   }})\


// // //Use Reduce.  Everytime the function runs, it returns the accumulator.  
// // If the accumulator is an object its just accumulating stuff into the object, one at a time.
//   // const evenOddsReduce = (arr) => {
//   //   return arr.reduce(
//   //     (accum, num)=> {
//   //     if( num % 2 == 0 ){
//   //       accum.evens.push(num);
//   //   } else {
//   //       accum.odds.push(num);
//   //   }
//   //   return accum;
//   // },
//   //   {evens:[],odds: []}
//   //   );
//   // };


// //   //You have to return the accumulator because .reduce doesn't save anything. It'll change the array but not log anything.

// //   const evenOddsReduce1 = (arr) => {
// //     return arr.reduce(
// //       (accum, num) => {
// //         accum[num % 2].push(num);
// //         return accum
// //       },        
// //       [[],[]])
// //   };


// // // Do it all in implicit returns.  This doesn't actually work but play around and see if it works.  
// //   const evenOddsReduce2 = (arr) =>
// //     arr.reduce((accum, num) => (accum[num%2][accum[num%2].length] = num), [[],[]])




// // arr=[3,2,1,0]

// // const sortFirst=(array)=>{
// //   // set lowest and index to first by default
// //   let lowest = arr[0]
// //   let lowestIndex = 0
// //     arr.forEach((num,i) => {
// //       if(num < lowest) {
// //         lowest = num;
// //         lowestIndex = i;
// //       }
// // })
// // // need to swap 0 index with lowestIndex (need temp variable here)
// // let temp = arr[0];
// // arr[0] = lowest;
// // arr[lowestIndex] = temp;

// // //finally
// // return arr
// // }

// // change this to an array


// // const mySentence = {the: "pig", num: 3}

// // mySentence["the"] =  "banana"
// // mySentence["num"]++
// // console.log (mySentence)

// // function count(sentence) {
// //   let list = sentence.split(' ');
// //   let words = {};
// //   list.forEach((w) => {
// //     if(words[w]) {
// //       words[w]++;
// //     } else {
// //       words[w] = 1
// //     }
// //   })


// //   // for (let i = 0; i < list.length; i++) {
// //   //   if(words[list[i]]) {
// //   //     words[list[i]]++;
// //   //   } else {
// //   //     words[list[i]] = 1;
// //   //   }
// //   // }
// //   return words;
// // }

// // counted = count(mySentence)

// // console.log(counted)



// //loop over the array to get unique words
// // =>

// // //once it's an object
// // //use the IN opporator to determine if the string is in the object.

// // {
// //   the: 2,
// //   pig: 1,
// //   went: 1,
// //   to: 1,
// //   market: 1
// // }

// //take in a String, return a javascript object that returns unique words and how 
// //many of them there AreaChart.



// // take in an array of numbers 
// // separate the array into evens and odds 
// // add the evens together
// // add the odds together
// // output an object with keys - even, odd - and values - the sums.

// // array= [1,2,3,4,5]

// //DOESN'T WORK
// // function addemup (array) {
// //   evens = array.filter((num)=> num % 2 == 0)
// //   console.log(evens)
// //   odds = array.filter((num) => num % 2 != 0)
// //   console.log(odds)


// //   addedEvens = evens.reduce((accum, num) => {
// //     return accum + num
// //   }, {})
// //   addedOdds = odds.reduce((accum, num) => {
// //     return accum + num
// //     console.log(accum)
// //   }, {})
// //   return sumTotal = {addedEvens, addedOdds}
// // }

// // console.log(addemup(array))

// //JAMES ANSWER

// // const sums = (arrayOfNums)=> {
// //   return arrayOfNums.reduce((sums, num) =>{
// //     if (num %2 != 0){
// //     sums.odds += num
// //   } else {
// //     sums.evens += num
// //   }
// //   return sums
// //   },{odds:0, evens:0})
// // }

// // console.log(sums([1,2,3,4,5,6]))

// // //OR 
// // // reduce the sums of evens and place them in a hash, 
// // // reduce the sums of odds and place them in a hash

// // const sums1 = (arrayOfNums)=> {
// //   return arrayOfNums.reduce((sums, num) =>{
// //     const key = num % 2 == 0 ? "evens" : "odds"
// //     sums[key] += num 
// //     return sums
// //   },{odds:0, evens:0})
// // }

// // console.log(sums1([1,2,3,4,5,6]))

// // const getUniqueBasic = (arr) => {
// //   unique = [...new Set(arr)]
// //   string = unique.toString()
// //   return string
// // }

// // const getUniqueBasicForEach = (arr) => {
// //   newArr = []
// //   unique = arr.forEach((num)=> newArr.includes(num) ? num : newArr.push(num))
// //   return newArr.toString()
// // }

// // const getUniqueBasicReduce = (arr) => {
// //   let x = arr.reduce((acc, currentValue) => (
// //     acc.includes(currentValue) ? acc : [...acc, currentValue]
// //   ), [])
// //   return x.join(",")
// // }


// // let uniqueNums = getUniqueBasic([1, 2, 3, 4, 5, 6, 6, 3, 2, 2]);
// // // returns the string '1, 2, 3, 4, 5, 6'
// // let uniqueWords = getUniqueBasicForEach(["Hello", "Yo", "Hello", "me"]);
// // // returns the string 'Hello, Yo, me'

// // console.log(uniqueWords)


// //////////////
// // Using JavaScript, recreate the filter function. 




// // console.log(result);
// // // expected output: Array ["exuberant", "destruction", "present"]

// // //////////////
// // //Take a nums array and a target.  Find the indeces of the two nums that add up to the target
// // nums = [2, 7, 11, 15]

// // // Create a function that takes the nums array and the desired target
// // const twoSum = (nums, target) => {
// //   // create a map to hold the complementary numbers (the target minus the current number)
// //   const comp = new Map();
// //   // create a variable that gives the # of indeces in the array
// //   const len = nums.length

// //   //Use a for loop. Assign i(index) to 0 to start with.  As long as i is less than the length of the array, keep adding one to i
// //   for(let i = 0; i<len ; i++){

// //     //Use an if statement to check if that index in the num array is greater than zero 
// //     if(comp[nums[i]] >= 0) {
// //       return [comp[nums[i]]]
// //     }
     
// //     comp[target - nums[i]] = i;
// //   }
// //   return []
// // }

// // console.log(twoSum(nums,9))


// //CAPITALIZE
// //Objectives:

// // Create a method that takes in a string
// // Capitalize the first letter of every word
// // return the new string

// // .slice and .substring don't actually change the string.  They return new strings.

// // .replace("a", "A")  does just that

// // .charAt(index)  grabbing the character at 5

// // .charCodeAt(index)  


// // .split("-match-") -> output is an array
// // .join brings them back together

// //String.split(", ") creates an array.  

// // const str = "the quick brown fox"

// // const upperCase = (string) => {
// //   splitUp = string.split(" ")
// //   capitalized= splitUp.map((w) => {
// //     console.log(w[0])
    

// //   })
// //   return capitalized.join(" ")
// // }


// // console.log(upperCase(str))


// // const reverse = (str) => {
// //   let newString = ""

// //   for ( let x = str.length -1; x >= 0 ; x-- ) {
// //     newString += str[x]
// //   }
// //   console.log(newString)
// //   return newString
// // }

// // reverse("Hello There")
// // "backward is this"

// // array = [10, 10, 11, 11, 11, 12]

// // const chartData = (arr) => {
// //   const data = [
// //     {month: 1, cards: 0},
// //     {month: 2, cards: 0},
// //     {month: 3, cards: 0},
// //     {month: 4, cards: 0},
// //     {month: 5, cards: 0},
// //     {month: 6, cards: 0},
// //     {month: 7, cards: 0},
// //     {month: 8, cards: 0},
// //     {month: 9, cards: 0},
// //     {month: 10, cards: 0},
// //     {month: 11, cards: 0},
// //     {month: 12, cards: 0},
// //   ]
// //   console.log(Object.values(data))

// //   arr.forEach((num) => {

// //     data.forEach((pair, i) => {
// //       if (pair.month === num) pair.cards++  
// //     })
// //   })
// //   return data
// // }

// // console.log(chartData(array))

// // const cards = [
// //   {current_points: 12, age: "yes"},
// //   {current_points: 2, age: ""},
// //   {current_points: 1, age: "23"},
// //   {current_points: 3, age: ""},
// //   {current_points: 32, age: "3"},
// // ]

// // const sumPoints = () => {
// //   return cards.reduce((sum, current) => {
// //     return sum + current.current_points
// //   }, 0 )
// // }

// // console.log(sumPoints())



// //WhiteBoard: write a function that takes a sorted array of numbers and a number to find in that array. It should return true if the number is in the array and false otherwise.
// //Example
// //findNum([1,2,3,4,5,6,7,8], 9) => false
// //findNum([1,2,3,4,5,6,7,8], 4) => true

// // const findNum = (array, num) => {
// //   newArr = array.filter((n) => num === n)
// //   return newArr[0] ? true : false

// // }


// // console.log(findNum([1,2,3,4,5,6,7,8], 9))