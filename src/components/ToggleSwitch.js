import React from 'react';
import './style/ToggleSwitch.css'

const ToggleSwitch = ({divClass, func}) => {
  return (
      <label className='switch'>
        <input type="checkbox" onClick={func} />
        <span className='slider'></span>
      </label>
  )
}

export default ToggleSwitch