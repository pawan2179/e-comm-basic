import React, { useContext } from 'react'
import './styles/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = ({category, banner}) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if(category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image= {item.image} newPrice={item.new_price} oldPrice={item.old_price} />
          }
          else {
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory
