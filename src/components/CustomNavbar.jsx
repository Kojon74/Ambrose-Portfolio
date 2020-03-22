import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-scroll'

import './CustomNavbar.css'

export default class CustomNavbar extends Component {
    constructor(props) {
        super(props);
        this.toggleClass = this.toggleClass.bind(this);
        this.state = {
          active: false,
        };
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        return (
            <div className="navbar">
                <Link className="name" onClick={this.toggleClass} activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>Ambrose Lee</Link>
                <div className={ this.state.active ? "link-contact-active" : "link-contact" }>
                    <div className="link-container">
                        <Link className="links" onClick={this.toggleClass} activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
                        <Link className="links" onClick={this.toggleClass} activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
                        <Link className="links" onClick={this.toggleClass} activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={500}>Skills</Link>
                        <Link className="links" onClick={this.toggleClass} activeClass="active" to="experience" spy={true} smooth={true} offset={-70} duration={500}>Experience</Link>
                    </div>
                    <div className="contact">
                        <a href="https://www.linkedin.com/in/ambrose-lee/" target="_blank">
                            <Image src="images/contact/linkedin.png" className="icons"/>
                        </a>
                        <a href="mailto:kenjohnson0704@gmail.com?" target="_blank">
                            <Image src="images/contact/email.png" className="icons"/>
                        </a>
                    </div>
                </div>
                <div className="burger" onClick={this.toggleClass}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>
        )
    }
}
