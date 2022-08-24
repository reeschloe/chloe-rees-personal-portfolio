import React from 'react'
import "../styles/Footer.css"
import {AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail} from "react-icons/ai"

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
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
        <p> &copy; 2022 Chloe Rees</p>
    </div>
  )
}

export default Footer