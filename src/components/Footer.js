import React from 'react'

import { MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IoDocumentTextSharp } from "react-icons/io5"

export default function Footer() {
  return (
    <section className='footer-container'>
      <a href="mailto:nickedwards.dev@gmail.com"> 
        <h3> <MdEmail /> </h3> 
      </a>
      <a href="https://github.com/thenickedwards" target="_blank" rel="noopener noreferrer">
        <h3> <BsGithub /> </h3>
      </a>
      <a href="https://www.linkedin.com/in/nick-edwards-dev/" target="_blank" rel="noopener noreferrer"> 
        <h3> <BsLinkedin /> </h3>
      </a>
      <a href="https://drive.google.com/file/d/1MEYN1a2HQp9i5H9hOEgbEBIaHD7J32v4/view?usp=sharing" target="_blank" rel="noopener noreferrer"> 
        <h3> <IoDocumentTextSharp /> </h3> 
      </a>
    </section>
  )
}
