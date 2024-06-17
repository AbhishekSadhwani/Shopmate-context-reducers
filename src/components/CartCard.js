import './CartCard.css';
import { useCart } from '../context/CartContext';

export const CartCard = ({product}) => {
  const {removeFromCart} = useCart();
  return (
    <div className="cart-card">
        <img src={product.image} alt="" />
        <p className='name'>{product.name}</p>
        <p className='price'>${product.price}</p>
        <button className='remove-btn' onClick={() => removeFromCart(product)}>Remove</button>
    </div>
  )
}
