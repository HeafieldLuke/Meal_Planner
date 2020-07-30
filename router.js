const pages = require('./controllers/pages');
const recipes = require('./controllers/recipes');
const auth = require('./controllers/auth');
const plan = require('./controllers/plan');
const passport = require('passport')

const router = (app) => {
    //  Views
    app.get('/', auth.checkAuthenticated, pages.index);
    app.get('/community', pages.community);

    //  Auth
    app.get('/login', auth.checkNotAuthenticated, auth.login);
    app.post('/login', auth.checkNotAuthenticated, passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    }));

    app.get('/register', auth.checkNotAuthenticated, auth.register);
    app.post('/register', auth.createUser)

    app.get('/recipes', recipes.find);
    app.post('/recipes', auth.checkAuthenticated, recipes.create);
    app.put('/recipes', recipes.update);
    app.delete('/recipes', recipes.remove);

    app.get('/plan', plan.index);
    app.post('/plan', plan.generate);
};

module.exports = router;