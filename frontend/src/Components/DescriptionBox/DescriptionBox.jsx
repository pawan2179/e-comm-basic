import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit suscipit molestiae et ipsum quis nesciunt porro laboriosam! Maxime facere sapiente saepe. Quia aliquid vero numquam ab eligendi dignissimos tempora.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ut ea cupiditate facere autem, architecto ipsam sequi dolorum quae nulla?</p>
      </div>
    </div>
  )
}

export default DescriptionBox
