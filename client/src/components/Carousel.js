import React, { Component } from 'react'

//import react-transitions-group for animations
import { CSSTransition, SwitchTransition } from 'react-transition-group';

//axios handles grabbing items from the db
import axios from 'axios';

//import other components
import CarouselModal from './CarouselModal.js'

//import styling
import './Carousel.css';

class Carousel extends Component {
    constructor(props){
        super(props);

        this.state = {
            carouselIndex: 0,
            isActive: false,
            prjItem: []
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

    toggleInfo = () => {
        this.setState({
            infoIsExpanded: !this.state.infoIsExpanded
        })
        //console.log(this.state.infoIsExpanded);
    }

    //jump to the nth slide by clicking the nth button
    jumpTo = (index) => {
        this.setState({
            carouselIndex: index,
            isActive: true
        })
    }

    //gets items for display
    componentDidMount() {
        axios.get('api/projects')
        .then(res => {
            this.setState({
                prjItem: [...res.data]
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    
    render() {
        //console.log(this.state.prjItem);

        //loads in requisite picture from static media
        let picture = require(`./media/${this.state.carouselIndex}.jpg`)
        
        if(this.state.prjItem.length) {
            //get indices of objects to create nav buttons
            let buttonIndex = [...this.state.prjItem.keys()]

            return (
                <div className="carousel">

                    <button className="carousel__button-left" onClick={this.slideBack}>
                        <img src={require('./media/back.svg')} alt=''/>
                    </button>

                    <SwitchTransition>
                        <CSSTransition
                        key={this.state.prjItem[this.state.carouselIndex]._id}
                        timeout={300}
                        classNames={'fade'}
                        >
                            <div className="carousel__display">

                                    <img src={picture}
                                        alt="" 
                                        className="carousel__display-img"
                                    />

                            </div>
                        </CSSTransition>
                    </SwitchTransition>


                    <SwitchTransition>
                        <CSSTransition
                        key={this.state.prjItem[this.state.carouselIndex]._id}
                        timeout={500}
                        classNames={'fade__info'}
                        >
                    <div className='carousel__display-info'>
                        <div  className="info__title">
                            <h3>
                                {this.state.prjItem[this.state.carouselIndex].title}
                            </h3>
                            <div className='info__modal'>
                                <CarouselModal description={this.state.prjItem[this.state.carouselIndex]}/>
                            </div>
                        </div>
                        
                        <a type='button'
                        href={this.state.prjItem[this.state.carouselIndex].gitURL}
                        className={this.state.prjItem[this.state.carouselIndex].gitURL?
                        'info__button-1':'info__button-1--inactive'}
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                            Github
                        </a>

                        

                        <a type='button'
                        href={this.state.prjItem[this.state.carouselIndex].projectURL}
                        className={this.state.prjItem[this.state.carouselIndex].projectURL?
                        'info__button-2':'info__button-2--inactive'}
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                        Live
                        </a>

                    </div>
                        </CSSTransition>
                    </SwitchTransition>

                    <button className="carousel__button-right" onClick={this.slideForward}>
                        <img src={require('./media/forward.svg')} alt=''/>
                    </button>

                    {/*Controls circle buttons at bottom of carousel */}
                    <div className="carousel__nav">
                        {buttonIndex.map(index => {
                            return( 
                                <button 
                                key={index} 
                                onClick={this.jumpTo.bind(this, index)} 
                                className={(this.state.isActive && this.state.carouselIndex===index)||this.state.carouselIndex===index? 'carousel_indicator_current-slide':'carousel_indicator'}
                                >
                                </button>
                            )
                        })}
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }

    
}

export default Carousel;