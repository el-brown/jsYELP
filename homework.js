const App = () => {
  const [count, setCount] = useState(0)

  const subtract = () => {
    setCount(count - 1)
  }

  const add = () => {
    setCount(count + 1)
  }
    
  return (
    <>
      <button onClick={subtract}>-</button>
      <span>{count}</span>
      <button onClick={add}>+</button>
    </>
  )
}

export default App;


import React, {useState} from "react";


const App = () => {
  const [count, setCount] = useState(0)
  const [word, setWord] = useState("")


  const subtract = () => {
    setCount(count - 1)
  }

  const add = () => {
    setCount(count + 1)
  }

  const morning = () => {
    setWord("Good Morning!")
  }
 
  const evening = () => {
    setWord("Good Evening!")
  }

  return (
    <>
      <button onClick={subtract}>-</button>
      <span>{count}</span>
      <button onClick={add}>+</button>
      <br />
      <button onClick={morning}>Dawn</button>
      <span>{word}</span>
      <button onClick={evening}>Dusk</button>
    </>
  )
}

export default App;


































const taco = {id:1, name:'chicken', price:20, about:'Yummy'}

const taco1 = {id:2, name:'carne asada', price:18, about:'Tasty'}

const taco2 = {id:3, name:'fish', price:30, about:'So good'}



const tacos = [taco, taco1, taco2]



// write a function that takes an tacoOBJ and a id and returns a new object with name changed to "changed"

console.log("Task 1")

const changeName = (name, id) => {
  let newName = tacos.map((taco) => {
    if (taco.id === id)
      return { ...taco, name: name}
    else
      return taco
  })
  return newName
}

let changedName = changeName("changed", 1)
console.log(changedName)
console.log(tacos)

// write a function that takes an tacoOBJ and return some formatted html (will be a string technically)

console.log("Task 2")

const tacoToHTML = (id) => {
  let htmlTaco = tacos.map((taco) =>{
      return `<div><h1>${taco.name}</h1><p>${taco.price}</p><p>${taco.about}</p></div>`
  })
  return htmlTaco
}

let tacoHTML = tacoToHTML(1)
console.log(tacoHTML)
console.log(tacos)

// write a function that takes an tacoOBJ and return formatted price with ".00"

console.log("Task 3")

const tacoPrice = () => {
  let priceTaco = tacos.map((taco) =>{
      return `$${taco.price}.00`
  })
  return priceTaco
}

let taco00 = tacoPrice()
console.log(taco00)
console.log(tacos)

// write a function that takes an array and logs each item in the array hint forEach

console.log("Task 4")



console.log(tacos)

// use the find method to return the object with id:1

console.log("Task 5")

const findTaco = (arr, id) => {
  return arr.find((taco) => taco.id === id)
}

console.log (findTaco(tacos, 2))


// return a new array with all prices greater than 19

console.log("Task 6")



console.log(tacos)

// return a new array with a 'about' key where it is a combo of name price and about

console.log("Task 7")



console.log(tacos)


///CRUD - don't change tacos array or change objects

console.log("Task 8")



console.log(tacos)


// READ (array of obj to array of html) 

// Update (update a taco) 

// Remove (delete a taco) 

// Create (add a taco) 