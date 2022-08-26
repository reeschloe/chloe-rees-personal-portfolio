import React from 'react'
import "../styles/Footer.css"
import {AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail} from "react-icons/ai"

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
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
        <p> &copy; 2022 Chloe Rees</p>
    </div>
  )
}

export default Footer