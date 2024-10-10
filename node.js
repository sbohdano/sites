const express = require('express');
const path = require('path');
const exhbs = require('express-handlebars');
const app = express();

const hbs = exhbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine' ,'hbs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.render('main');
})


let port = 3000;
app.listen(port, () => {
    console.log(`the server has just been started http://localhost:${port}`)
});