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
  days_open: "mon,tues,wed,thur,fri,sat,sun",
  likes: 1000,
  dishes: [
    { name: "Pad Thai", price: 10.25, ingredients: ["noddles", "peppers"] },
    { name: "Drunken Noodle", price: 9.25, ingredients: ["noddles", "chicken"] },
  ],
  reviews: [
    { user_id: 1, rating: 5 },
    { user_id: 2, rating: 3 },
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
  days_open: "mon,tues,wed,thur,fri,sat",
  likes: 500,
  dishes: [
    { name: "Tacos", price: 8.25, ingredients: ["tortilla", "carne"] },
    { name: "Quesidalla", price: 9.25, ingredients: ["tortilla", "cheese"] },
  ],
  reviews: [
    { user_id: 1, rating: 2 },
    { user_id: 2, rating: 4 },
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
  days_open:'tue,wed,thur,fri,sat,sun',
  likes: 3000,
  dishes: [
    { name: "Limena Salad", price: 8.95, ingredients: ["chickpeas", "kale"] },
    { name: "Naked Peruvian Wrap", price: 10.95, ingredients: ["tortilla", "chicken"] }
  ],
  reviews: [
    {user_id: 1, rating: 5},
    {user_id: 2, rating: 4}
  ]
}

const allUsers = [user1, user2]  // Gives me users in one array and makes them Hashes
const allRestaurants = [res1, res2]  // Gives me restaurants in one array and makes them Hashes

