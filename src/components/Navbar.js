import React, { useState } from 'react'
import './style/Navbar.css'

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