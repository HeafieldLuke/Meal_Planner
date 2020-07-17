const controllers = require('./controllers');

const router = (app) => {
    app.get('/', controllers.index);
    app.get('/community', controllers.community);
    app.get('/recipes', controllers.recipes);
};

module.exports = router;