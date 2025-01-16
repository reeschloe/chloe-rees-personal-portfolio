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
                    <AiOutlineLinkedin title="LinkedIn"/>
                </a>
                <a target="_blank" rel="noreferrer" href="mailto:reeschloe@yahoo.com">
                    <AiOutlineMail title="Email"/>
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/reeschloe/">
                    <AiOutlineGithub title="GitHub"/>
                </a>
            </div>
        </div>
        <div className="skills">
            <h1>Skills</h1>
            <ol className="list">
                <li className="item">
                    <h2>Web technologies</h2>
                    <span>Angular, AngularJS, Bootstrap, Jasmine, Git, rxjs</span>
                </li>
                <li className="item">
                    <h2>Programming languages</h2>
                    <span>TypeScript, JavaScript, HTML/CSS/LESS, SQL</span>
                </li>
                <li className="item">
                    <h2>Collaboration tools</h2>
                    <span>GitHub, Visual Studio Code, ClickUp, Figma</span>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home