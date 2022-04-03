import * as React from 'react';
import Sample from './Sample';
import Card from 'react-bootstrap/Card';


const workSamples = [
    {
        id: 1,
        title: "HoliDAZE",
        imagePath: "'../../images/app-holidaze-plac.jpeg'",
        description: "An international holiday finder which searches results by country and date or by search query.  Group project with Juanita Samborski, Ethan Buchanan, and Kasai Preston. Technologies used: HTML, CSS, JS, APIs",
        page: "LIVE ON GITHUB",
        pageURL: "https://jsamborski310.github.io/Holidaze/",
        repo: "REPO",
        repoURL: "https://github.com/jsamborski310/Holidaze"
        
    },
    {
        id: 2,
        title: "Game Notes",
        imagePath: `"../images/app-gamenotes.jpg"`,
        description: "A platform for collecting thoughts, observations, questions, etc. on recent soccer games (rather than a tech blog) allowing a head to could coordinate and collaborate with their coaching staff, medical personnel, data analysts, and players.Technologies used: HTML, Handlebars, CSS, JS, APIs, MVC, Sequelize, Express, Heroku",
        page: "LIVE ON HEROKU",
        pageURL: "https://gamenotes-thenickedwards.herokuapp.com",
        repo: "REPO",
        repoURL: "https://github.com/thenickedwards/game-notes"
        
    },
    {
        id: 3,
        title: "Happy Habit Tracker",
        description: "An application to keep tabs on your physical, mental, and dietary health. Maintain your well-being by tracking good habits!",
        page: "LIVE ON HEROKU",
        pageURL: "https://happy-habit-tracker-app.herokuapp.com",
        repo: "REPO",
        repoURL: "https://github.com/chandrapanda/happy-habit-tracker"
        
    },
    {
        id: 4,
        title: "Sounders Quiz",
        description: "Demo of HTML created dynamically via JavaScript (so a player can’t use Dev Tools to peek at questions and answers ;). Local storage allows players to store their high scores to their browser. Technologies used: HTML, CSS, JS",
        page: "LIVE ON GITHUB",
        pageURL: "https://thenickedwards.github.io/sounders-quiz",
        repo: "REPO",
        repoURL: "https://github.com/thenickedwards/sounders-quiz"
        
    },
    {
        id: 5,
        title: "good-readme-generator",
        description: "A command-line application that accepts user input and generates a high-quality, professional README.md. Generated readme includes the title of project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions. Available licenses include badge. GitHub username, email, and table of contents clickable. Technologies used: JS, Inquirer, fs/file system",
        page: "DEMO VIDEO",
        pageURL: "https://drive.google.com/file/d/1jIMywy9jxhm8zK6Pv2GPztcIyaX4DLUx/view",
        repo: "REPO",
        repoURL: "https://github.com/thenickedwards/good-readme-generator"
        
    },
    {
        id: 6,
        title: "More coming soon!",
        description: "I'm just getting started :D",
        page: "",
        pageURL: "",
        repo: "",
        repoURL: ""
        
    },
    
]


export default function Projects() {
  return (
    <section>
        <h1>hello world</h1>
        {/*  */}
        {workSamples.map((item) => (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.imagePath} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href={item.pageURL}>{item.page}</Card.Link>
              <Card.Link href={item.repoURL}>{item.repo}</Card.Link>
            </Card.Body>
          </Card>
        
        ))}
        
    </section>
  )
}
