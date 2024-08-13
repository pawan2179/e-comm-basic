import React, {useState} from 'react'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [category, setCategory] = useState("shop");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setCategory("shop")}><Link style={{ textDecoration: 'none'}} to='/'>Shop {category == "shop" ? <hr/> : <></>}</Link></li>
        <li onClick={() => setCategory("men")}><Link style={{ textDecoration: 'none'}} to='/men'>Men {category == "men" ? <hr/> : <></>}</Link></li>
        <li onClick={() => setCategory("women")}><Link style={{ textDecoration: 'none'}} to='/women'>Women {category == "women" ? <hr/> : <></>}</Link></li>
        <li onClick={() => setCategory("kids")}><Link style={{ textDecoration: 'none'}} to='/kids'>Kids {category == "kids" ? <hr/> : <></>}</Link></li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{ textDecoration: 'none'}} to='/login'><button>Login</button></Link>
        <Link style={{ textDecoration: 'none'}} to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
