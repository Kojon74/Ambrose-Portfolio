import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap'
import './Skills.css'

export default class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <div className="page-title">Skills</div>
                <div className="skills-container">
                    <div className="column">
                        <div className="column-title">Software</div>
                        <div className="skill">SolidWorks<ProgressBar className="progressbar"><ProgressBar className="progressbar" now={90}/></ProgressBar></div>
                        <div className="skill">MATLAB<ProgressBar className="progressbar" now={90}/></div>
                        <div className="skill">Arduino<ProgressBar className="progressbar" now={90}/></div>
                        <div className="skill">Microsoft Office<ProgressBar className="progressbar" now={90}/></div>
                        <div className="skill">C Programming<ProgressBar className="progressbar" now={90}/></div>
                    </div>
                    <div className="column">
                        <div className="column-title">Machine Tools</div>
                        <div className="skill">Lathe<ProgressBar className="progressbar" now={90}/></div>
                        <div className="skill">Milling Machine<ProgressBar className="progressbar" now={90}/></div>
                        <div className="skill">Hand Tools<ProgressBar className="progressbar" now={90}/></div>
                        <div className="skill">Band Saw<ProgressBar className="progressbar" now={90}/></div>
                        <div className="skill">Waterjet Cutter<ProgressBar className="progressbar" now={90}/></div>
                    </div>
                    <div className="column">
                        <div className="column-title">Electrical</div>
                        <div className="skill">Soldering<ProgressBar className="progressbar" now={90}/></div>
                        <div className="skill">Breadboard<ProgressBar className="progressbar" now={90}/></div>
                        <div className="skill">Oscilloscope<ProgressBar className="progressbar" now={90}/></div>
                        <div className="skill">Function Generator<ProgressBar className="progressbar" now={90}/></div>
                        <div className="skill">Multimeter<ProgressBar className="progressbar" now={90}/></div>
                    </div>
                </div>
            </div>
        )
    }
}
