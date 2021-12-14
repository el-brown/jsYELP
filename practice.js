// let arr = [6,4,2,7,8]

// // We need to look through the array and find the lowest number
// // Swap that number for the index[0]
// // Keep track of where it's sorted. Move start position up one.  
// // Repeat the steps moving up one index at a time.

// const sortArr = (arr) => {
//   let lowest = arr[0]
//   let currentI = 0
  
//   //Loop through this and keep updating until the array is sorted.
//   // if 6 < whatever is at arr[0] then assign that number (6) to the "lowest" variable.
//   // 

//   // for each number in the array, if the number is less than the num labeled "lowest" (which starts with num at index[0])
//   // then set that num as the lowest.  Then set the current index at that num's index.
//     arr.forEach((num,i) => {
//       if(num < lowest) {
//         lowest = num;
//         currentI = i;
//       }
//   })
//   //setting the number at arr[0] as the lowest
//     let temp = arr[0];
//     arr[0] = lowest;
//     //then setting that to the lowest index
//     arr[lowestIndex] = temp;

//     return arr

// }
// // i is starting at zero and as long as it's less than the array length, keep doing this progressing by 1 index. (i is the current index)

// for(let i=0; i < arr.length; i++) {

// }

// for(let currentI=0; currentI < arr.length; currentI++) {
//   let lowest = arr[current]
//   let lowestIndex = current
//   for (let innerIndex = currentI + 1; innerIndex<arr.length; innerIndex++)
//  {
//    if(arr[innerIndex] < lowest){
//      lowest = arr[innerIndex]
//      lowestIndex = innerIndex
//    }
//  }



//  let arr = [3, 0, 1];

// const sort = (arr) => {
//   for (let current = 0; current < arr.length; current++) {
//     console.log(arr);
//     // console.log(findLowestAndSwap(currentIndex));
//     // gothrough find lowest and swap
//     let lowest = arr[current];
//     let lowestIndex = current;
//     console.log("start at index ", current);
//     console.log("start in lowest ", lowest);
//     // find lowest element in the 'inner array'
//     for (let innerIndex = current; innerIndex < arr.length; innerIndex++) {
//       if (arr[innerIndex] < lowest) {
//         console.log("mew lowest found", arr[innerIndex]);
//         lowest = arr[innerIndex];
//         lowestIndex = innerIndex;
//       }
//     }
//     console.log("the actuall lowest", lowest);
//     // swap
//     let temp = arr[current];
//     arr[current] = lowest;
//     arr[lowestIndex] = temp;
//   }
// };

// sort(arr);



console.log([1,2,3,4,5].map((num) => num * 2))

fruits = ['apple', 'orange', 'banana'] 
plural = fruits.map((fruit) => fruit +"s")
console.log(plural)