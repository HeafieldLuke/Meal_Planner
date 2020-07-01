const express = require('express');
const app = express();
const PORT = 3000;

app.set('views', __dirname + '/public/views')
app.set("view engine", 'ejs');
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('pages/index');
});

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));