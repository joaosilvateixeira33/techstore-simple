const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = 5000;
const hbs = exphbs.create({
    partialsDir: ['views/partials'] 
});

app.use(express.static('public'));
app.engine('handlebars', hbs.engine);
app.use('views engine', 'handlebars');

app.listen(port, () =>{
    console.log(`Server on in http://localhost:${port}`);
})