import React, { Component } from 'react'

import Carousel from './Carousel.js'

//import styling
import './Header.css';
import ContactModal from './ContactModal.js';


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {   
            about: {
                name: 'Glenn Piludu',
                email: 'gpiludu@gmail.com',
                phone: '(574) 344-9307',
                school: 'BSc Mathematics, Indiana University',
                tech: ['React', 'JavaScript', 'Python', 'MongoDB', 'SQL'],
                picture: null
            },
        }
    }

    render() {
        return (
            <div className='wrapper'>
                <div className="hero">
                    <div className="hero__block">
                        <div className="hero__block-title">
                            Hi! I'm Glenn Piludu.
                            <hr className="break"/>
                        </div>
                        <div className="hero__block-body">
                            <p>{bodyParagraph1}</p>
                            <p>{bodyParagraph2}</p>
                            {callToAction}
                        </div>
                        <div className="hero__block-btn">
                            <ContactModal about={this.state.about}/>
                        </div>
                    </div>
                </div>
                <div className="projects">
                    <div className="projects-title">Projects</div>
                    <div className="projects-carousel">
                        <Carousel/>
                    </div>
                </div>
                <div className="footer">
                    <p className='footer-credits'>Photos: Clement H, Ben Kolde, Markus Spiske @ <a href='https.unsplash.com'>unsplash.com</a>.</p>
                    <p className='footer-credits'>Svg arrows, + button: Darius Dan, SRIP @ <a href='https.flaticon.com'>flaticon.com.</a></p>
                </div>
            </div>
        )
    }
}

const bodyParagraph1 = 'I am a software engineer who loves all things tech. Since I was very young, I have been taking computers apart and tinkering with them. As I was finishing college, I discovered that I  really liked programming computers as well. Most recently, I have had a ton of fun teaching myself React and the MERN stack.';
const bodyParagraph2 = 'In addition to my skills in programming, I hold a BSc in Mathematics from Indiana University. I’ve also spent many years selling real estate, so I know how to deliver to clients. Please check some of my projects below, or at my github link in the navbar.'
const callToAction = <p><b>I am currently open for projects or job opportunities</b> and would love to hear from you!</p>;

export default Header;