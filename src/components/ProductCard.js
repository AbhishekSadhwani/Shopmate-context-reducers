import './ProductCard.css';
import { useCart } from '../context/CartContext';
import { useEffect, useState } from 'react';

export const ProductCard = ({product}) => {

  const { addToCart,cartList,removeFromCart } = useCart();
  const [ inCart, setInCart] = useState(false);


  useEffect(() => {
    const prodcutIncart = cartList.find(item => item.id === product.id );
    
    if(prodcutIncart){
      setInCart(true);
    }else{
      setInCart(false);
    }

  },[cartList])

  return (
    <div className="card">
        <img src={product.image} alt={product.name} />
        <p>{product.name}</p>
        <div className='info'>
            <span className='price'>${product.price}</span>
            {!inCart ? 
              (<button className='add-btn' onClick={() => addToCart(product)}>Add To Cart</button>) : 
              (<button className='remove-btn' onClick={() => removeFromCart(product)}>Remove</button>)}
            
        </div>
    </div>
  )
}
