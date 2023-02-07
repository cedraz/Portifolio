import React from 'react';
import './style/Button.css'

export const Button = ({child, buttonClass, iconClass}) => {
  return (
    <div className='button__container'>
      <button className={buttonClass}>
        {child}
        <i className={iconClass}></i>
      </button>
    </div>
  )
}
