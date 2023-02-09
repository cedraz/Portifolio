import React, { useState } from 'react'
import './style/Navbar.css'
import ToggleSwitch from './ToggleSwitch';
import ChangeToDarkMode from './ChangeDarkMode';

function Navbar() {
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY >= 80) {
      header.classList.add("scroll-header")
    } else {
      header.classList.remove("scroll-header")
    }
  })

  const [click, setClick] = useState(false);
  const handleClickMobile = () => setClick(!click);
  
  const [toggle, setToggle] = useState(true);
  const [toggleText, setToggleText] = useState('Light Mode');

  const handleClickToggle = () => {
    setToggle(!toggle);
    ChangeToDarkMode(toggle);
    if (!toggle) {
      setToggleText('Light Mode')
    } else {
      setToggleText('Dark Mode')
    }
  }


  return (
    <>
      <header className='header'>
        <div className="navbar-container container">
          <div className="navbar__logo-wrapper">
            <a href="/" className='navbar-logo'>
              Cedraz
            </a>
          </div>

          <div className='navbar-menu'>
            <ul className={click ? 'navbar-list active' : 'navbar-list'} >
              <li>
                <a href="#home" className='navbar-item'>Home</a>
              </li>
              <li >
                <a href="#about" className='navbar-item'>About</a>
              </li>
              <li >
                <a href="#skills" className='navbar-item'>Skills</a>
              </li>
              <li >
                <a href="#portfolio" className='navbar-item'>Projects</a>
              </li>
              <li>
                <div className="dark-mode-toggle navbar-item">
                  <p className='dakr-mode-item'>{toggleText}</p>
                  <ToggleSwitch func={handleClickToggle} />
                </div>
              </li>
            </ul>
          </div>

          <div className='mobile' onClick={handleClickMobile}>
          <i className={click ? 'uil uil-times' : 'uil uil-apps'}></i>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar