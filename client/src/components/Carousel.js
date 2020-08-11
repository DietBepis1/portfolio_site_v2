import React, { Component } from 'react'

//import styling
import './Carousel.css';

class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            carouselIndex: 0,
            isActive: false,
            about: {
                name: 'Glenn Piludu',
                email: 'gpiludu@gmail.com',
                phone: '(574) 344-9307',
                school: 'BSc Mathematics, Indiana University',
                tech: ['React', 'JavaScript', 'Python', 'MongoDB', 'SQL'],
                picture: require('./media/musclecat.jpg')
            },

            prjItem: [{
                    title: 'Test 1',
                    displayedDate: '2020',
                    description: placeholder,
                    projectURL: 'https://www.playstation.com/en-us/',
                    gitURL: 'https://www.playstation.com/en-us/',
                    picURL: require('./media/splash3.jpg')
                },
                {
                    title: 'Test 2',
                    displayedDate: '2020',
                    description: placeholder,
                    projectURL: 'https://www.playstation.com/en-us/',
                    gitURL: 'https://www.playstation.com/en-us/',
                    picURL: require('./media/splash4.jpg')

                },
                {
                    title: 'Test 3',
                    displayedDate: '2020',
                    description: placeholder,
                    projectURL: 'https://www.playstation.com/en-us/',
                    gitURL: 'https://www.playstation.com/en-us/',
                    picURL: require('./media/splash5.jpg')

                },
                {
                    title: 'Test 4',
                    displayedDate: '2020',
                    description: placeholder,
                    projectURL: 'https://www.playstation.com/en-us/',
                    gitURL: 'https://www.playstation.com/en-us/',
                    picURL: require('./media/musclecat.jpg')

                }
            ]
        };

    }

    //move active carousel slide backward by one when clicking the back arrows
    slideBack = () => {
        //console.log(`${this.state.carouselIndex}`)
        if(this.state.carouselIndex > 0) {
            this.setState({
                carouselIndex: this.state.carouselIndex - 1
            })
            //console.log(`${this.state.carouselIndex}...A`)
        } else {
            this.setState({
                carouselIndex: this.state.prjItem.length - 1
            })
            //console.log(`${this.state.carouselIndex}...B`)
        }
    }

    //move active carousel slide forward by one when clicking forward arrows
    slideForward = () => {
        //console.log(`${this.state.prjItem.length}, ${this.state.carouselIndex}`)
        if(this.state.carouselIndex < this.state.prjItem.length - 1) {
            this.setState({
                carouselIndex: this.state.carouselIndex + 1
            })
        } else {
            this.setState({
                carouselIndex: 0
            })
        }
    }

    //jump to the nth slide by clicking the nth button
    jumpTo = (index) => {
        this.setState({
            carouselIndex: index,
            isActive: true
        })
    }
    
    
    render() {
        //get indices of objects to create nav buttons
        let buttonIndex = [...this.state.prjItem.keys()]

        return (
            <div style={{marginTop: '6vh'}}>
                <div className="carousel">

                    <button className='carousel_button_left' onClick={this.slideBack}>
                        <img src={require('./media/back.svg')} alt=''/>
                    </button>
                    <div className="carousel_track-container">
                        <ul className="carousel_track">

                            <li className="carousel_slide" ref={this.activeSlide}>
                                <img src={this.state.prjItem[this.state.carouselIndex].picURL}
                                className='carousel_image' alt=''/>
                                <div className='carousel_item_desc'>
                                    <h3 className='desc_title'>{this.state.prjItem[this.state.carouselIndex].title}</h3>
                                    <button className='carousel_item_button'>Github</button>
                                    <br/>
                                    <button className='carousel_item_button_2'>Live</button>
                                    <div className="desc_blurb">{this.state.prjItem[this.state.carouselIndex].description}</div>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <button className='carousel_button_right'>
                        <img src={require('./media/forward.svg')} onClick={this.slideForward} alt=''/>
                    </button>

                    <div className="carousel_nav">
                        {buttonIndex.map(index => {
                            return <button 
                                    key={index} 
                                    onClick={this.jumpTo.bind(this, index)} 
                                    className={(this.state.isActive && this.state.carouselIndex===index)||this.state.carouselIndex===index? 'carousel_indicator_current-slide':'carousel_indicator'}
                                    >
                                    </button>
                        })}
                    </div>
                </div>

            </div>
        )
    }
}

const placeholder = 'He’d taken the drug to blunt SAS, nausea, but the muted purring of the car’s floor. The semiotics of the car’s floor. Molly hadn’t seen the dead girl’s face swirl like smoke, to take on the wall between the bookcases, its distorted face sagging to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall of a broken mirror bent and elongated as they fell. The Sprawl was a steady pulse of pain midway down his spine. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the blowers and the amplified breathing of the fighters. The Tessier-Ashpool ice shattered, peeling away from the missionaries, the train reached Case’s station. Then a mist closed over the black water and the robot gardener. Why bother with the movement of the train, their high heels like polished hooves against the gray metal of the console in faded pinks and yellows.'
export default Carousel;