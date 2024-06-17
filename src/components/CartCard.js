import './CartCard.css';

export const CartCard = ({item}) => {
  return (
    <div className="cart-card">
        <img src={item.image} alt="" />
        <p className='name'>{item.name}</p>
        <p className='price'>${item.price}</p>
        <button>Remove</button>
    </div>
  )
}
