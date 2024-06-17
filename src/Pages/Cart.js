import { useCustomTitle } from "../hooks/useCustomTitle"
import { CartCard } from "../components";
import './Cart.css';

export const Cart = ({title}) => {

  // setting custom title using useCustomTtitle hook
  useCustomTitle(title);
  
  const cartItems = [
    {id:1001,name:"Sony Wh-Ch510 Bluetooth Wireless",price:149,image:"/assets/images/1001.png"},
    {id:1002,name:"boAt Rockerz 450",price:49,image:"/assets/images/1002.png"},
  ]

  return (
    <main>
      <section>
        <div className="title">
          <p>Cart Items: 2</p>
        </div>
        <div className="cart-cards">
          {cartItems && cartItems.map(item => (
            <CartCard key={item.id} item = {item}/>
          ))}
        </div>
      </section>
    </main>
  )
}
