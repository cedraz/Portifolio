import React from 'react'
import './style/Home.css'

import homeImg from './img/home.jpg'

function Home() {
  return (
    <section className='home section section' id='home'>
        <div className="container">
          <div className="home__content">
            <div className="home__text-container">
              <h1 className='home__title title'>
                Ícaro Cedraz
                <i class="uil uil-smile-beam"></i>
              </h1>
              <h3 className='home__subtitle'>
                Web Developer
              </h3>
              <p className='home__description description'>
                I'm creative designer based in Salvador | BA, and I'm very dedicated to my work.
              </p>
            </div>
            <div className="home__image-container">
              <img src={homeImg} alt="home" className='home__image' />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Home