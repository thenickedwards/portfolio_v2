import React from 'react'
import nickPic from "../images/NEdwards-pic.png";

export default function Bio() {
  return (
    <section className='about-container'>
        <p>Full stack web developer leveraging artistic and performance background to create thoughtful and inclusive experiences through code. Recent graduate of University of Washington’s Full Stack Flex Coding Boot Camp Program (partnership with Trilogy Education Services). My fellow students know me as a gregarious, sharp coder, who’s collaborative with code and debugging help. I helped lead teams to create an international holiday finder application and a healthy habits tracker. I am excited to employ my skillset in JavaScript, HTML, CSS, and more, to pivot my career and create better, healthier, more responsible, and honest spaces on the web.</p>
        <img src={nickPic} />
    </section>
  )
}
