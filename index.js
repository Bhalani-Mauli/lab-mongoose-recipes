const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://127.0.0.1:27017/recipe-app";

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then((x) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
    Recipe.create({
      title: "Dhokla",
      level: "UltraPro Chef",
      ingredients: [
        "gram-flour",
        "water",
        "ginger-paste",
        "chilly-paste",
        "eno",
      ],
      cuisine: "Gujarati",
      dishType: "breakfast",
      image: "https://images.media-allrecipes.com/images/75131.jpg",
      duration: "30",
      creator: "Mauli",
      created: 10 / 11 / 20323,
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
