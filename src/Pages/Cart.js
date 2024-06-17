import { useCustomTitle } from "../hooks/useCustomTitle"
import { CartCard } from "../components";
import { useCart } from "../context/CartContext";
import './Cart.css';

export const Cart = ({title}) => {

  // setting custom title using useCustomTtitle hook
  useCustomTitle(title);
  
  const {total, cartList} = useCart();

  // const cartItems = [
  //   {id:1001,name:"Sony Wh-Ch510 Bluetooth Wireless",price:149,image:"/assets/images/1001.png"},
  //   {id:1002,name:"boAt Rockerz 450",price:49,image:"/assets/images/1002.png"},
  // ]

  return (
    <main>
      <section>
        <div className="title">
          <p>Cart Items: {cartList.length}/ ${total}</p>
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
