import express from 'express'
import dotenv from 'dotenv'
import  products  from './data/products.js';
dotenv.config();
import connectDB from './config/db.js';

connectDB();

const port = process.env.PORT || 5000;

const app = express();

app.get('/', function(req, res){
    res.send('API is running...')
});

app.get('/api/products', function(req, res){
    res.json(products)
})

app.get('/api/products/:id', function(req, res){
    const product = products.find((p) => {return p._id === req.params.id})
    res.json(product)
})

app.listen(port, function(){
    console.log(`Server is running on port ${port}`)
});

