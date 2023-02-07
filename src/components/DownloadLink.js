import React from 'react';
import './style/DownloadLink.css'

export const DownloadLink = ({child, link, linkClass, iconClass}) => {
  return (
    <div className='link__container'>
      <a href={link} className={linkClass} download>
        {child}
        <i className={iconClass}></i>
      </a>
    </div>
  )
}
