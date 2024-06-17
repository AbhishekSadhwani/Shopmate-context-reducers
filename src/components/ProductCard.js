import './ProductCard.css';


export const ProductCard = ({product}) => {
  return (
    <div className="card">
        <img src={product.image} alt="Product Image" />
        <p>{product.name}</p>
        <div className='info'>
            <span className='price'>${product.price}</span>
            <button>Add To Cart</button>
        </div>
    </div>
  )
}
