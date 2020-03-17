import React from 'react';
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import codewars from '../images/codewars.svg';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';

function Footer() {
    return (
        <footer>
            <a target="_blank" rel="noopener" href="https://www.codewars.com/users/paule89123">
                <img alt="link to my codewars profile" className="codewars" src={codewars} />
            </a>
            <a target="_blank" rel="noopener" href="https://github.com/paule89123">
                <img alt="link to my github profile" className="github" src={github} />
            </a>
            <a target="_blank" rel="noopener" href="https://uk.linkedin.com/in/paul-evans-69b0a356">
                <img alt="link to my linkedin profile" className="linkedin" src={linkedin} />
            </a>
        </footer>
    )
}

export default Footer;

            // <a href="https://www.codewars.com/users/paule89123">


            // <a href="https://www.freecodecamp.org/paule89">
// width="24" height="24" 

            


            