const mongoose = require('mongoose');
const { v4: v4 } = require('uuid');

const ingredientSchema = mongoose.Schema({
    name: String,
    amount: String
});

const directionSchema = mongoose.Schema({
    key: Number,
    step: String
});

const recipeSchema = mongoose.Schema({
    id: { type: String, default: v4},
    name: String,
    image_url: String,
    ingredients: [ingredientSchema],
    directions: [directionSchema]
});

module.exports = mongoose.model('Recipe', recipeSchema);