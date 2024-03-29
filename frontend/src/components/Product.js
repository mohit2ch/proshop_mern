import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Ratings from './Ratings';
function Product({product}) {
    
  return (
    <Card style={{ width: '18rem' }} className='my-3'>
        <Link to={`/product/${product._id}`}>
      <Card.Img variant="top" src={`${product.image}`} />
      </Link>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
        <Ratings value={product.rating} text={product.numReviews}/>
        </Card.Text>
        <Card.Text><h2>${product.price}</h2></Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;