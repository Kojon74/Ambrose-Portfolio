import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

import './Experience.css'

export default class Experience extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: [{
                title: "Vehicle Mechanics Division Project Lead",
                affiliation: "UBC Supermileage Student Design Team",
                image: "images/projects/cards/IMG_8862.jpeg",
                description: "Vacuum Infusion project lead - researched and conducted tests on the vacuum infusion manufacturing process to improve the hand layup method currently used to manufacture composites, which will reduce excess resin and weight in the composite components of the vehicle.",
                date: "September 2018 - Present"
            }, {
                title: "Rover Project",
                affiliation: "Class Project",
                image: "images/projects/cards/IMG_0216.jpeg",
                description: "Designed an electric-powered space exploration vehicle prototype to simulate the throttle control malfunctioning, with the motors always required to be fully on. The vehicle is radio-controlled and is required to maneuver, climb hills, traverse rough terrain, and accelerate and decelerate effectively.",
                date: "January 2020 - February 2020"
            }, {
                title: "Counsel Connect",
                affiliation: "UBC Local Hack Day",
                image: "images/projects/cards/IMG_9516.jpeg",
                description: "Many students actively seek guidance but mental health resources on campus are limited. Counsel Connect is a website we developed for a hackathon which connects students that want to share and are willing to listen with other students in similar positions. This creates a safe community where students can share problems and advice.",
                date: "October 2019"
            }, {
                title: "MagLev Project",
                affiliation: "Class Project",
                image: "images/projects/cards/IMG_8961.jpeg",
                description: "Machined and assembled an electronically-controlled magnetic levitation device.",
                date: "August 2019 - September 2019"
            }, {
                title: "Computer Department Intern",
                affiliation: "Crossroads Foundation",
                image: "images/projects/cards/IMG_9515.jpeg",
                description: "",
                date: "August 2019 - September 2019"
            }, {
                title: "Autonomous Claw Project",
                affiliation: "Class Project",
                image: "images/projects/cards/IMG_9514.jpeg",
                description: "Designed an autonomous claw using sheet metal and programmed it with Arduino sensors that could navigate and pick up objects of varying sizes and weights.",
                date: "January 2019 - February 2019"
            }]
        }
    }

    render() {
        const projectCards = this.state.cards.map(card => (
            <Card className="cards">
                <Card.Img variant="top" src={card.image} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Subtitle className="date">{card.date}</Card.Subtitle>
                    <Card.Text>{card.description}</Card.Text>
                </Card.Body>
            </Card>
          ));

        return (
            <div className="experience" id="experience">
                <div className="page-title">Experience</div>
                <div className="card-container">{projectCards}</div>
            </div>
        )
    }
}
