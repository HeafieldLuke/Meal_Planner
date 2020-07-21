const pages = require('./controllers/pages');
const recipes = require('./controllers/recipes')

const router = (app) => {
    //  Views
    app.get('/', pages.index);
    app.get('/community', pages.community);

    app.get('/recipes', recipes.find);
    app.post('/recipes', recipes.create);
    app.put('/recipes', recipes.update);
    app.delete('/recipes', recipes.remove);
};

module.exports = router;