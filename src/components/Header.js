import React, { useState, useEffect } from 'react';
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import menuIcon from '../images/menu.svg'

function Header(props) {
    const [ menu, setMenu ] = useState(false)
    const [ removed, setRemoved ] = useState(false)

    var transform;
    var transition;
    var boxShadow;

    function toggleMenu() {
        setRemoved(false)
        setMenu(prevState => !prevState)
    }

    function removeMenu() {
        setRemoved(true)
        setMenu(prevState => !prevState)
    }

    if (removed) {
        transform = "translateY(-159px)"
        transition = "none"
        boxShadow = "none"
    }
    else if (!menu) {
        transform = "translateY(-159px)"
        transition = "400ms ease-out"
        boxShadow = "none"
    } else {
        transform = "translateY(0px)"
        transition = "400ms ease-out"
        boxShadow = "0px 10px 30px rgb(0,0,0,0.14)"
    }

    const styleObj = {
        transform: `${transform}`,
        transition: `${transition}`,
        boxShadow: `${boxShadow}`,
    }

    return (
        <header>

            <div id="logo-and-burger-container">
                <Link to="/">paulevans</Link>
                <img onClick={toggleMenu} id="burger" src={menuIcon} alt="menu" />
            </div>


            <nav id="nav-large-devices">
                <div className="nav__link">
                    {props.loc === "cv" ? 
                        <Link to="/cv" className="active">CV</Link>
                        :
                        <Link to="/cv">CV</Link>
                    }
                </div>
                <div className="nav__link">
                    {props.loc === "home" ? 
                        <LinkScroll 
                            to="portfolio"
                            activeClass="active"
                            className="linkscroll"
                            spy={true}
                            smooth={true}
                            duration= {700}
                        >
                            PORTFOLIO
                        </LinkScroll>
                        :
                        <HashLink to="/#portfolio">PORTFOLIO</HashLink>
                    }
                </div>
                <div className="nav__link">
                    {props.loc === "about" ? 
                        <Link to="/about" className="active">ABOUT</Link>
                        :
                        <Link to="/about">ABOUT</Link>
                    }
                </div>
            </nav>


            <nav id="nav-small-devices" style={styleObj}>
                <div className="nav__link" onClick={removeMenu}>
                    {props.loc === "cv" ? 
                        <Link to="/cv" className="active">CV</Link>
                        :
                        <Link to="/cv">CV</Link>
                    }
                </div>
                <div className="nav__link" onClick={removeMenu}>
                    {props.loc === "home" ? 
                        <LinkScroll 
                            to="portfolio"
                            activeClass="active"
                            className="linkscroll"
                            spy={true}
                            smooth={true}
                            duration= {700}
                            onSetActive={removeMenu}
                        >
                            PORTFOLIO
                        </LinkScroll>
                        :
                        <div onClick={removeMenu}><HashLink to="/#portfolio">PORTFOLIO</HashLink></div>
                    }
                </div>
                <div className="nav__link" onClick={removeMenu}>
                    {props.loc === "about" ? 
                        <Link to="/about" className="active">ABOUT</Link>
                        :
                        <Link to="/about">ABOUT</Link>
                    }
                </div>
            </nav>


        </header>
    )
}

export default Header;