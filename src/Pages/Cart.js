import { useCustomTitle } from "../hooks/useCustomTitle"
import { CartCard } from "../components";
import { useCart } from "../context/CartContext";
import './Cart.css';

export const Cart = ({title}) => {

  // setting custom title using useCustomTtitle hook
  useCustomTitle(title);
  
  const {total, cartList} = useCart();
  
  return (
    <main>
      <section>
        <div className="title">
          <p>Cart Items: {cartList.length}/ Cart Total: ${total}</p>
        </div>
        <div className="cart-cards">
          {cartList && cartList.map(product => (
            <CartCard key={product.id} product = {product}/>
          ))}
        </div>
      </section>
    </main>
  )
}
