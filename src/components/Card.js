import React from 'react';

const Card = ({item, href}) => {
  return (
    <div className='project__card' key={item.id}>
      <img src={item.image} alt="" className='project__image' />
      <h3 className='project__title'>{item.title}</h3>
      <a href={href} className='project__button'>
        Demo <i class="project__button-icon uil uil-arrow-right"></i>
      </a>
    </div>
  )
}

export default Card