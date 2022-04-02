import React from 'react'
import emailIconGray from '../images/icon-email-fast-gray.png'
import githubIconGray from '../images/icon-github-gray.png'
import linkedinIconGray from '../images/icon-linkedin-gray.png'
import resumeIconGray from '../images/icon-file-document-gray.png'

export default function Footer() {
  return (
    <section className='footer-container'>
        <div className='footer-icons'>
            <a><img src={emailIconGray}></img></a>
            <a><img src={githubIconGray}></img></a>
            <a><img src={linkedinIconGray}></img></a>
            <a><img src={resumeIconGray}></img></a>
        </div>
    </section>
  )
}
