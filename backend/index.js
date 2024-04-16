import express from 'express'
import dotenv from 'dotenv'

dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

connectDB();

const port = process.env.PORT || 5000;

const app = express();

app.get('/', function(req, res){
    res.send('API is running...')
});

app.use('/api/products',productRoutes);

app.use(notFound);

app.use(errorHandler);

app.listen(port, function(){
    console.log(`Server is running on port ${port}`)
});

