import React from 'react'
import nickPic from "../images/NEdwards-pic.png";

// Do we want to try this to organize the bio, pic, etc.
// import { Card, CardGroup, Row, Col, Container } from "react-bootstrap/";

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
    <section className='about-container mt-4 col-10'>
        <div>
          <p>Full stack web developer leveraging artistic and performance background to create thoughtful and inclusive experiences through code. Recent graduate of University of Washington’s Full Stack Flex Coding Boot Camp Program (partnership with Trilogy Education Services). My fellow students know me as a gregarious, sharp coder, who’s collaborative with code and debugging help. I helped lead teams to create an international holiday finder application and a healthy habits tracker. I am excited to employ my skillset in JavaScript, HTML, CSS, and more, to pivot my career and create better, healthier, more responsible, and honest spaces on the web.</p>
          
          <ColoredLine color="gray" />

          <h4 className='nav-main nav-menu'>toolkit</h4>
          <div className='tools-container col-10'>
            
            <h1><SiHtml5 title="HTML" alt="HTML"/></h1>
            <h1><SiCss3 title="CSS" alt="CSS"/></h1>
            <h1><SiJavascript title="Javascript" alt="JS/Javascript"/></h1>

            <h1><SiMongodb title="MongoDB" alt="MongoDB"/></h1>
            <h1><SiExpress title="Express" alt="Express"/></h1>
            <h1><SiReact title="React" alt="React"/></h1>
            <h1><SiNodedotjs title="Node.js" alt="Node.js"/></h1>


            {/* <h1><SiJquery title="jQuery" alt="jQuery"/></h1> */}
            <h1><SiMysql title="MySQL" alt="MySQL"/></h1>
            <h1><SiSequelize title="Sequelize" alt="Sequelize"/></h1>
            <h1><SiGraphql title="GraphQL" alt="GraphQL"/></h1>
            {/* <h1><SiHandlebarsdotjs title="Handlebars" alt="Handlebars"/></h1> */}
            
            {/* <h1><SiJest title="Jest" alt="Jest"/></h1> */}
            <h1><SiInsomnia title="Insomnia" alt="Insomnia"/></h1>
            {/* <h1><SiHeroku title="Heroku" alt="Heroku"/></h1> */}
            <h1><SiApollographql title="Apollo" alt="Apollo"/></h1>

          </div>
        </div>

        <div className='col-2 portfolio-picture'>
          <img alt="Nick Edwards - Full Stack Dev" src={nickPic} />
        </div>
    </section>
  )
}
