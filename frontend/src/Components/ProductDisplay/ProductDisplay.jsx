import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = ({product}) => {
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='product-display'>
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-display-img">
          <img className='product-display-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="product-display-right-prices">
          <div className="product-display-right-price-old">
            ${product.old_price}
          </div>
          <div className="product-display-right-new-price">${product.new_price}</div>
        </div>
        <div className='product-display-right-description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste earum nisi voluptas ad unde quos illo similique hic autem accusantium itaque velit consequuntur voluptate nemo doloremque, mollitia aperiam non fugit ab quae eos? Aut, eveniet tempora iusto aperiam ducimus cum aliquid aspernatur quod et laudantium fugit quis quaerat soluta sequi sapiente itaque, expedita molestias quas eligendi sit possimus inventore officia saepe id? Inventore molestiae porro, quam velit neque deleniti ab explicabo esse nisi eveniet quod magni nihil tempora doloremque tempore, suscipit recusandae expedita tenetur sed voluptatibus! Error nisi iure, doloremque, architecto, similique itaque debitis tenetur inventore quisquam nam quis.
        </div>
        <div className="product-display-right-size">
          <h1>Select size</h1>
          <div className="product-display-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
        <p className="product-display-right-category"><span>Category:</span>Women, T-shirt, Crop Top</p>
        <p className="product-display-right-category"><span>Tags:</span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay

