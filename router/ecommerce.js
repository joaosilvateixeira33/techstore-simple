const express = require('express');
const products = require('../data/db');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('home', {products});
})

router.get('/product/:id', (req, res)=>{
    const id = req.params.id;
    const product = products.find(p => p.id === Number(id));
    if(product){
        res.render('product', {product});
    }else{
        res.status(404).render('404', { noHeader: true, noFooter: true });
    }
})

module.exports = router;