const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/testdb', {
    useNewUrlParser: 'true'
})

mongoose.connection.on('error', err => {
    console.log('err', err);
})

mongoose.connection.on('connected', (err,res) => {
    console.log('mongoose is connected');
})

app.set('views', __dirname + '/public/views')
app.set("view engine", 'ejs');
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('pages/index');
});

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));