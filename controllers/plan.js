const Recipes = require('../models/recipe')

const index = (req,res) => {
    Recipes.find({}).then(recipes => {
        res.render(`generate`, { recipes: recipes});
    })
}

const generate = (req, res) => {
    Recipes.find({}).then(recipes => {
        let days = req.body
        for (day in days) {
            days[day] = recipes.find(recipe => recipe.name === days[day])
        }
        const ingredients = Object.values(days).map(recipe => recipe.ingredients)
        res.render('mealplan', { plan: days});
    })
}

module.exports = {
    index: index,
    generate: generate
}