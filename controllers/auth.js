const User = require('../models/user')
const bcrypt = require('bcrypt')

const login = (req, res) => {
    res.render('login');
}

const register = (req, res) => {
    res.render('register')
}

const createUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            phoneNumber: req.body.phone,
        });
        newUser.save(err => {
            if (err) {
                return res.redirect('/register')
            } else {
                return res.redirect('/login')
            }
        })
    }
    catch (err) {
        return res.status(500).send(err)
    }
} 

const getUserByEmail = (email) => {
    User.findOne({ email: email }, (err,docs) => {
        if (docs) {
            console.log(docs)
            return docs;
        } else {
            console.log(err)
        }
    })
}

const getUserById = (id) => {
    User.findById(id, (err,docs) => {
        if (docs) {
            return docs
        } else {
            console.log(err);
        }
    })
}

const checkAuthenticated = (req, res, next) => {
    console.log('here')
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/login')
}

const checkNotAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    next();
}
module.exports = {
    login: login,
    register: register,
    createUser: createUser,
    checkAuthenticated: checkAuthenticated,
    checkNotAuthenticated: checkNotAuthenticated,
    getUserByEmail: getUserByEmail,
    getUserById: getUserById
}