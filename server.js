const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const router = require('./router');
const app = express();
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');


require('dotenv').config();

const initializePassport = require('./passport-config');
initializePassport(passport);

const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', () => {
    console.log('\n###### MONGO DB Connected ######\n')
})

app.set('views', __dirname + '/views')
app.set("view engine", 'ejs');
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session());

app.use(express.static(__dirname + '/public'));
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));

router(app, passport);

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));