import { useEffect, useState } from 'react'
import {Row,Col} from 'react-bootstrap'
// import products from '../products'
import Product from '../components/Product'
import axios from 'axios'

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  // async function printOut(){
  //   const data = await axios.get('/api/products')
  //   return data
  // }
  
  // console.log(printOut())
  useEffect(function(){
    const fetchProducts = async function(){
      const {data} = await axios.get('/api/products');
      // console.log('here')
      setProducts(data)
    };
    fetchProducts();
  }, [])
  return (
    <>
    <h1>Latest Products</h1>
    <Row>
        {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3}>
                
                <Product product={product}/>
            </Col>
        ))}
    </Row>
    </>
  )
}