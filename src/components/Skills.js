import React from 'react';
import './style/Skills.css'

function Skills() {
  return (
    <section className="skills section" id='skills'>
      <h2 className='title'>Skills</h2>
      <span className='subtitle'>My technicall level</span>

      <div className="skills__container container">
        <div className="skills__content">
          <h3 className='skills__title'>Frontend developer</h3>
          
          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i class="uil uil-check-circle"></i>

                <div>
                  <h3 className='skills_name'>Javascript</h3>
                </div>
              </div>
              <div className="skills__data">
                <i class="uil uil-check-circle"></i>

                <div>
                  <h3 className='skills_name'>CSS</h3>
                </div>
              </div>
              <div className="skills__data">
                <i class="uil uil-check-circle"></i>

                <div>
                  <h3 className='skills_name'>HTML</h3>
                </div>
              </div>
            </div>
            <div className="skills__group">
              <div className="skills__data">
                <i class="uil uil-check-circle"></i>

                <div>
                  <h3 className='skills_name'>Git</h3>
                </div>
              </div>
              <div className="skills__data">
                <i class="uil uil-check-circle"></i>

                <div>
                  <h3 className='skills_name'>React</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skills__content">
          <h3 className='skills__title'>Backend developer</h3>
          
          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i class="uil uil-check-circle"></i>

                <div>
                  <h3 className='skills_name'>Python</h3>
                </div>
              </div>
              
              <div className="skills__data">
                <i class="uil uil-check-circle"></i>

                <div>
                  <h3 className='skills_name'>Node JS</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills