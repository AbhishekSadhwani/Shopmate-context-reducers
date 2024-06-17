import './ProductCard.css';
import { useCart } from '../context/CartContext';

export const ProductCard = ({product}) => {

  const { addToCart } = useCart();

  return (
    <div className="card">
        <img src={product.image} alt={product.name} />
        <p>{product.name}</p>
        <div className='info'>
            <span className='price'>${product.price}</span>
            <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
    </div>
  )
}
