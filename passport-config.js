const LocalStrategy = require('passport-local').Strategy;
const auth = require('./controllers/auth');
const bcrypt = require('bcrypt');
const User = require('./models/user');

function initialize(passport) {
    console.log('initialized')
    const authenticateUser = (req, email, password, done) => {
        User.findOne({ 'email' :  email }, function(err, user) {
            // if there are any errors, return the error before anything else
            if (err)
                return done(err);
    
            // if no user is found, return the message
            if (!user)
                return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
    
            // if the user is found but the password is wrong
            if (!user)
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
    
            // all is well, return successful user
            return done(null, user);
        });
    }

    passport.use(new LocalStrategy({ usernameField: 'username', passReqToCallback: 'password', passReqToCallback: true },
    authenticateUser));
    passport.serializeUser((user, done) => done(null, user._id))

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, docs) => {
            if (err) done(err)
            if (docs) {
                done(null, docs)
            }
        })
    })
}

module.exports = initialize
