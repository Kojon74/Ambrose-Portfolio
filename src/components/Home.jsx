import React, { Component } from 'react'
import BackgroundSlider from 'react-background-slider'

import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <div className="home" id="home">
                <BackgroundSlider images={[
                    'images/projects/home/IMG_0193.jpeg', 
                    'images/projects/home/IMG_0194.jpeg', 
                    'images/projects/home/IMG_0195.jpeg',
                    'images/projects/home/IMG_0216.jpeg',
                    'images/projects/home/IMG_0684.jpeg',
                    'images/projects/home/IMG_0686.jpeg',
                    'images/projects/home/IMG_0687.jpeg',
                    'images/projects/home/IMG_8861.jpeg',]} duration={10} transition={2} />
                <div className="title">Mechanical Engineer</div>
                <a className="resume" href="Resume - Software.pdf" target="_blank">Resume</a>
            </div>
        )
    }
}
