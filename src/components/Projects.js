import * as React from "react";
import { Card, CardGroup, Row, Col } from "react-bootstrap/";

// Sample app images
import picHolidaze from "../images/app-holidaze-plac.jpeg";
import picGameNotes from "../images/app-gamenotes.jpg";
import picHabiTracker from "../images/app-habitracker.jpg";
import picSoundersQuiz from "../images/app-sounders-quiz-gif-thumbnail.gif";
import picReadMeGenerator from "../images/app-good-readme-generator.gif";
import picComingSoon from "../images/app-comingsoon.jpg";

const workSamples = [
  {
    id: 1,
    title: "HoliDAZE",
    imagePath: picHolidaze,
    description:
      "An international holiday finder which searches results by country and date or by search query.  Group project with Juanita Samborski, Ethan Buchanan, and Kasai Preston. Technologies used: HTML, CSS, JS, APIs,",
    page: "LIVE",
    pageURL: "https://jsamborski310.github.io/Holidaze/",
    repo: "REPO",
    repoURL: "https://github.com/jsamborski310/Holidaze",
  },
  {
    id: 2,
    title: "Game Notes",
    imagePath: picGameNotes,
    description:
      "A platform for coaches, staff, medical personnel, data analysts, and players to collect thoughts, observations, questions, etc. on recent soccer games. Teams can coordinate and collaborate on Game Notes. Technologies used: HTML, Handlebars, CSS, JS, MVC, Sequelize, Express",
    page: "LIVE",
    pageURL: "https://gamenotes-thenickedwards.herokuapp.com",
    repo: "REPO",
    repoURL: "https://github.com/thenickedwards/game-notes",
  },
  {
    id: 3,
    title: "Happy Habit Tracker",
    imagePath: picHabiTracker,
    description:
      "An application to keep tabs on your physical, mental, and dietary health. Maintain your well-being by tracking good habits! Technologies used: HTML, Handlebars, CSS, JS, Chart.js, APIs, MVC, Sequelize, Express, Heroku",
    page: "LIVE",
    pageURL: "https://happy-habit-tracker-app.herokuapp.com",
    repo: "REPO",
    repoURL: "https://github.com/chandrapanda/happy-habit-tracker",
  },
  {
    id: 4,
    title: "Sounders Quiz",
    imagePath: picSoundersQuiz,
    description:
      "Demo of HTML created dynamically via JavaScript (so a player can’t use Dev Tools to peek at questions and answers ;). Local storage allows players to store their high scores to their browser. Technologies used: HTML, CSS, JS",
    page: "LIVE",
    pageURL: "https://thenickedwards.github.io/sounders-quiz",
    repo: "REPO",
    repoURL: "https://github.com/thenickedwards/sounders-quiz",
  },
  {
    id: 5,
    title: "good-readme-generator",
    imagePath: picReadMeGenerator,
    description:
      "A command-line application that accepts user input and generates a high-quality, professional README.md. From clickable table of contentns to license badges! Technologies used: JS, Inquirer, fs/file system",
    page: "DEMO",
    pageURL:
      "https://drive.google.com/file/d/1jIMywy9jxhm8zK6Pv2GPztcIyaX4DLUx/view",
    repo: "REPO",
    repoURL: "https://github.com/thenickedwards/good-readme-generator",
  },
  {
    id: 6,
    title: "More coming soon!",
    imagePath: picComingSoon,
    description: "I'm just getting started :D",
    page: "",
    pageURL: "",
    repo: "",
    repoURL: "",
  },
];

export default function Projects() {
  return (
    <section className="samples-container vw-100">
        {workSamples.map((item) => (
            <Card key={item.id} 
            // style={{ width: "18rem" }}
            className="col-md-3 m-4 sample-card"
            >
              <Card.Img variant="top" src={item.imagePath} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link href={item.pageURL}>{item.page}</Card.Link>
                <Card.Link href={item.repoURL}>{item.repo}</Card.Link>
              </Card.Footer>
            </Card>
        ))}
    </section>
  );
}
