import React from 'react';
import './style/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__container container">
        <h1 className='footer__title'>Cedraz</h1>

        <ul className='footer__list'>
          <li>
            <a href="#about" className='footer__link'>About</a>
          </li>
          <li>
            <a href="#portfolio" className='footer__link'>Projects</a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.instagram.com/cedraz_icaro/" className='social__icon'>
            <i className='uil uil-instagram'></i>
          </a>
          <a href="https://github.com/cedraz" className='social__icon'>
            <i class="uil uil-github-alt"></i>
          </a>
          <a href="https://www.facebook.com/icarocedraz12" className='social__icon'>
            <i class="uil uil-facebook-f"></i>
          </a>
          <a href="mailto:icarocedraz7@gmail.com" className='social__icon'>
            <i class="uil uil-envelope-alt"></i>
          </a>
        </div>

        <span className='footer__copy'>&#169; Icaro Cedraz. All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer