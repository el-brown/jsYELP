let user1 = {
  id: 1,
  name: "Tony",
}
let user2 = {
  id: 2,
  name: "Sally",
}
let res1 = {
  id: 1,
  name: "Spicy Thai",
  location: {
    city: "SLC",
    state: "UT",
  },
  delivery: true,
  daysOpen: "mon,tues,wed,thur,fri,sat,sun",
  likes: 1000,
  dishes: [
    { name: "Pad Thai", price: 10.25, ingredients: ["noddles", "peppers"] },
    { name: "Drunken Noodle", price: 9.25, ingredients: ["noddles", "chicken"] },
  ],
  reviews: [
    { userId: 1, rating: 5 },
    { userId: 2, rating: 3 },
  ],
}
let res2 = {
  id: 2,
  name: "Albertos",
  location: {
    city: "SLC",
    state: "UT",
  },
  delivery: false,
  daysOpen: "mon,tues,wed,thur,fri,sat",
  likes: 500,
  dishes: [
    { name: "Tacos", price: 8.25, ingredients: ["tortilla", "carne"] },
    { name: "Quesidalla", price: 9.25, ingredients: ["tortilla", "cheese"] },
  ],
  reviews: [
    { userId: 1, rating: 2 },
    { userId: 2, rating: 4 },
  ],
}

let res3 = {
  id: 3,
  name: "Viva Chicken",
  location: {
    city: "Saint George",
    state: "UT",
  },
  delivery: true,
  daysOpen:'tue,wed,thur,fri,sat,sun',
  likes: 3000,
  dishes: [
    { name: "Limena Salad", price: 8.95, ingredients: ["chickpeas", "kale"] },
    { name: "Naked Peruvian Wrap", price: 10.95, ingredients: ["tortilla", "chicken"] }
  ],
  reviews: [
    {userId: 1, rating: 5},
    {userId: 2, rating: 4}
  ]
}

// const allUsers = [user1, user2]; // Gives me users in one array and makes them Hashes
const allRestaurants = [res1, res2];  // Gives me restaurants in one array and makes them Hashes

// //#1 access user1 name through user1
user1["name"]; //or user1.name <- The second one is called the dot property accessor

// // A function to find a user based on their Id:

const userName = (id) => {
  allUsers.filter((user) => {
    if (user.id == id) {
      console.log(user.name);
    };
  });
};

// userName(1);

// //#2 access user1 name through res2 (user1 data is in reviews)
userName(res2.reviews[0].userId)  //res2.reviews[0].userId returns 1 so plug that into userName function and you get Tony
userName(res2["reviews"][0]["userId"])

// //#3 access res1 reviews
/
// // #4 what does this output res1[:dishes] -An Error!  But res1.dishes puts:

[
  {
    name: 'Pad Thai',
    price: 10.25,
    ingredients: [ 'noddles', 'peppers' ]
  },
  {
    name: 'Drunken Noodle',
    price: 9.25,
    ingredients: [ 'noddles', 'chicken' ]
  }
]

// #5 print out just the name for res1 dishes (each loop)


res1.dishes.forEach((dish) => {
  console.log(`${dish.name}`);
});


//#6 print out just the name for res1 dishes along with ingredients (nested each loop)

res1.dishes.forEach ((dish) => {
  console.log(`Dish name: ${dish.name}`); 
    dish.ingredients.forEach ((ingredients) => {
      console.log(`${ingredients} `);
    });
});

//#7 create a function that takes a user and return a string with the users name and id

const getNameAndId = (user) => {
  console.log(`${user.id}) ${user.name}`);
}

getNameAndId(user1)

//#8 create a method that takes a res and returns the menu of that res
const resMenu = (res) => {
  console.log(res.dishes);
}

resMenu(res1)

//#9 create a function that takes a res and returns average review
// NOT WORKING. LOGGING NAN.
const avgReview = (res) => {
  let reviewMap = res.reviews.map ((review) => {
    return review.rating;
  });
  let avgReview = reviewMap.reduce((num1, num2) => {
    return (num1+num2) / res.length;
  })
};

//OPTION 2:   let avgReview = reviewMap.sum / reviewMap.size  (logs undefined)
console.log(avgReview(res1))

//#10 create an array of restaurants and do CRUD actions
//allRestaurants = [res1, res2]  - Gives me restaurants in one array and makes them Hashes - READ

//Adds my new restaurant to the array as a Hash -CREATE
allRestaurants.push(res3)  

//Returns a current list of the restaurants - READ
listOfRestaurants = allRestaurants.map ((res) => {
console.log(res.name);
});   

//Updates the name of res2 (which is now in the 0 index) to restaurant 1 -UPDATE
allRestaurants[0] = "restaurant1" 

//Shifts everything to the left and res1 falls off - DELETE
allRestaurants.shift() 

//#11 loop through your restaurants and return those with likes > 500 (select/filter)

likesOver500 = allRestaurants.filter ((res) => {
  return res.likes > 500; 
});
bestRes = likesOver500.map ((res) => {
  return res.name 
});


