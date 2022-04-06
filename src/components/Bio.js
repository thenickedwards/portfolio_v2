import React from 'react'
import nickPic from "../images/NEdwards-pic.png";

import { SiHtml5, SiCss3, SiJavascript, SiJquery, SiMysql, SiSequelize, SiGraphql, SiHandlebarsdotjs, SiMongodb, SiExpress, SiReact, SiNodedotjs, SiJest, SiInsomnia, SiHeroku, SiApollographql } from "react-icons/si"

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          margin: 'auto',
          width: '70%',
          height: 5
      }}
  />
);

export default function Bio() {
  return (
    <section className='about-container mt-4 col-11'>
        <div>
          <p>Full stack web developer leveraging artistic and performance background to create thoughtful and inclusive experiences through code. Recent graduate of University of Washington’s Full Stack Flex Coding Boot Camp Program (partnership with Trilogy Education Services). My fellow students know me as a gregarious, sharp coder, who’s collaborative with code and debugging help. I helped lead teams to create an international holiday finder application and a healthy habits tracker. I am excited to employ my skillset in JavaScript, HTML, CSS, and more, to pivot my career and create better, healthier, more responsible, and honest spaces on the web.</p>
          <ColoredLine color="gray" />
          <h4 className='nav-main nav-menu'>toolkit</h4>
          <div className='tools-container'>
            
            <h1><SiHtml5 alt="HTML"/></h1>
            <h1><SiCss3 alt="CSS"/></h1>
            <h1><SiJavascript alt="JS/Javascript"/></h1>

            <h1><SiMongodb alt="MongoDB"/></h1>
            <h1><SiExpress alt="Express"/></h1>
            <h1><SiReact alt="React"/></h1>
            <h1><SiNodedotjs alt="Node.js"/></h1>


            <h1><SiJquery alt="jQuery"/></h1>
            <h1><SiMysql alt="MySQL"/></h1>
            <h1><SiSequelize alt="Sequelize"/></h1>
            <h1><SiGraphql alt="GraphQL"/></h1>
            <h1><SiHandlebarsdotjs alt="Handlebars"/></h1>
            
            <h1><SiJest alt="Jest"/></h1>
            <h1><SiInsomnia alt="Insomnia"/></h1>
            <h1><SiHeroku alt="Heroku"/></h1>
            <h1><SiApollographql alt="Apollo"/></h1>

          </div>
        </div>
        <img src={nickPic} />
    </section>
  )
}
