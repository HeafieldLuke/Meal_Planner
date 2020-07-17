const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', () => {
    console.log('\n###### MONGO DB Connected ######\n')
})

app.set('views', __dirname + '/views')
app.set("view engine", 'ejs');

app.use(express.static(__dirname + '/public'));

router(app);

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));