import React from 'react'
import emailIcon from '../images/icon-email-fast.png'
import githubIcon from '../images/icon-github.png'
import linkedinIcon from '../images/icon-linkedin.png'
import resumeIcon from '../images/icon-file-document.png'

export default function Footer() {
  return (
    <section className='footer-container'>
        <div className='footer-icons'>
            <a><img src={emailIcon}></img></a>
            <a><img src={githubIcon}></img></a>
            <a><img src={linkedinIcon}></img></a>
            <a><img src={resumeIcon}></img></a>
        </div>
    </section>
  )
}
