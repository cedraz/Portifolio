import React from 'react';
import './style/About.css';
import aboutImg from './img/about.jpg';
import { DownloadLink } from './DownloadLink'
import cv from './files/cv.pdf'

function About() {
  return (
    <section className="about section" id='about'>
        <h2 className='about__title title'>About me</h2>
        <span className='about__subtitle subtitle'>My introduction</span>

        <div className="about__container container">
          <img src={aboutImg} className='about__image' alt="about" />

          <div className="about__data">
            <div className="about__info">
              <div className="about__box">
                <i class="uil uil-brackets-curly"></i>
                <h3 className='about__title'>Experience</h3>
                <span className='about__subtitle'>2 + Years</span>
              </div>
              <div className="about__box">
                <i class="uil uil-check"></i>
                <h3 className='about__title'>Completed</h3>
                <span className='about__subtitle'>10 + Projects</span>
              </div>
              <div className="about__box">
                <i class="uil uil-assistive-listening-systems"></i>
                <h3 className='about__title'>Support</h3>
                <span className='about__subtitle'>Online 24/7</span>
              </div>
            </div>

            <p className='about__description'>
              Frontend developer, started with programing at 2020 with Javascript,
              I create landing pages and web sites, always looking for experience in
              this businees and I'm very happy to help you with your site.
            </p>

            <DownloadLink link={cv} child='Download CV' linkClass='about__link link' iconClass='link__icon uil uil-file-download-alt'>
              
            </DownloadLink>
          </div>
        </div>
    </section>
  )
}

export default About