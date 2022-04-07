import React from 'react'

export default function Nav({ view, setView }) {
  return (
    <section className='nav-main'>
        <h1>Nick Edwards</h1>
        <div className='nav-menu'>
          <a href='#about' onClick={() => setView('about')}>
            { view === "about" ? ( <h4 className='selected-view'>about</h4> ) : ( <h4>about</h4> ) }
          </a>
          <a href='#work' onClick={() => setView('work')}>
            { view === "work" ? ( <h4 className='selected-view'>work</h4> ) : ( <h4>work</h4> ) }
          </a>
          <a href="https://drive.google.com/file/d/1MEYN1a2HQp9i5H9hOEgbEBIaHD7J32v4/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <h4>resume</h4>
          </a>
          <a href='#contact' onClick={() => setView('contact')}>
            { view === "contact" ? ( <h4 className='selected-view'>contact</h4> ) : ( <h4>contact</h4> ) }
          </a>
        </div>
        
    </section>
  )
}
