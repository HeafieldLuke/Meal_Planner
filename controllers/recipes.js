const Recipe = require('../models/recipe')

const findRecipes = (req, res) => {
    Recipe.find({}).then(recipes => {
        console.log(recipes)
        console.log(recipes[0].ingredients)
        res.render(`recipes`, { recipes: recipes});
    })
    
};

const createRecipe = (req, res) => {
    const newRecipe = new Recipe(req.body);
    newRecipe.save(err => {
        if (err) {
            return res.status(500).send(err);
        } else {
            return res.status(200).send(newRecipe)
        }
    })
};

const updateRecipe = (req, res) => {
    Todo.findByIdAndUpdate(
        req.body.id,
        req.body,
        {new: true},
        (err, todo) => {
            if (err) return res.status(500).send(err);
            return res.send(todo);
        }
    )
};

const removeRecipe = (req, res) => {
    Recipe.findByIdAndRemove(req.body.id, (err, recipe) => {
        if (err) {
            return res.status(500).send(err);
        }

        const response = {
            message: 'Recipe Succesfully Deleted',
            id: recipe.id
        };
        return res.status(200).send(response)
    })
};

module.exports = {
    find: findRecipes,
    create: createRecipe,
    update: updateRecipe,
    remove: removeRecipe,
}