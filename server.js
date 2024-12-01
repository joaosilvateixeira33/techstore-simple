const express = require('express');
const exphbs = require('express-handlebars');
const ecommerce = require('./router/ecommerce'); 

const app = express();
const port = 5000;

const hbs = exphbs.create({
    partialsDir: ['views/partials']
});

app.use(express.static('public'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use('/', ecommerce);

app.use(function(req, res){
    res.status(404).render('404', { noHeader: true, noFooter: true });
})
app.listen(port, () =>{
    console.log(`Server on in http://localhost:${port}`);
})