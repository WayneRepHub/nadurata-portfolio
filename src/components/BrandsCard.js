import React from 'react'

const BrandsCard = ({ image, alt }) => {
  return (
    <div className='brand-card'>
        <img src={image} alt={alt} className='brand-image' />
    </div>
  )
}

export default BrandsCard