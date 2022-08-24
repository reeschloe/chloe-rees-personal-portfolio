import React from 'react'
import "../styles/Home.css"
import portrait from "../images/me.jpg"
import {AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail} from "react-icons/ai";

function Home() {

  return (
    <div className="home">
        <div className="about">
            <img alt="chloe rees" src={portrait}/>
            <h2>Hello, World! My name is Chloe.</h2>
            <div className="prompt">
                <p>I'm a software developer with a passion for learning and creating.</p>
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/chloerees/'>
                    <AiOutlineLinkedin />
                </a>
                <a target="_blank" rel="noreferrer" href="mailto:reeschloe@yahoo.com">
                    <AiOutlineMail />
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/reeschloe/">
                    <AiOutlineGithub />
                </a>
            </div>
        </div>
        <div className="skills">
            <h1>Skills</h1>
            <ol className="list">
                <li className="item">
                    <h2>Frontend</h2>
                    <span>HTML, CSS, Bootstrap, JavaScript, React</span>
                </li>
                <li className="item">
                    <h2>Backend</h2>
                    <span>Express, RESTful APIs, PostgreSQL, Knex</span>
                </li>
                <li className="item">
                    <h2>Tools</h2>
                    <span>Mocha, Chai, Jest, Git, GitHub, Heroku, Visual Studio Code</span>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home