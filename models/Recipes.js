const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  recipeName: {
    type: String,
    required: true
  },
  ingredients: [{
    type: String,
    required: true
  }],
  directions: {
    type: String,
    required: true
  },
  recipeTodo: {
    type: Boolean,
    default: false
  },
  recipeIveDone: {
    type: Boolean,
    default: false
  },
  userId: {
    type: String,
    required: true
  }
});

const Recipe = mongoose.model("Recipes", RecipeSchema);

module.exports = Recipe;