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
    
            prjItem: [{
                    _id: 0,
                    title: 'piludu.io (2020)',
                    displayedDate: '2020',
                    description: 'This site was built with the React, NodeJs, ExpressJs, and MongoDB. I used the React Transtion Group library for the animations. It was my first serious React Project and I am pretty excited at how it turned out.',
                    projectURL: 'https://piludu.io',
                    gitURL: 'https://github.com/DietBepis1/portfolio_site_v2',
                    picURL: require('./media/splash3.jpg'),
                    uses: 'Node, Express, React, MongoDB, Reactstrap'
                },
                {
                    _id: 1,
                    title: 'Favorites List App (2020)',
                    displayedDate: '2020',
                    description: 'I built this app with React, NodeJS, ExpressJs, and MongoDb. The styling was done with Reactstrap. I built it to learn the Mern stack. It does every CRUD operation and visitors can add or delete items.',
                    projectURL: 'http://glenns-favorites-list.herokuapp.com',
                    gitURL: 'https://github.com/DietBepis1/favorites-list',
                    picURL: require('./media/favoriteslist.JPG'),
                    uses: 'Node, Express, React, MongoDB, Reactstrap'
    
                },
                {
                    _id: 2,
                    title: 'Freight Calculator (2020)',
                    displayedDate: '2020',
                    description: 'I worked on this project during my internship at Steel Warehouse. This calculator assists SW\'s sales team to create competitive bids for business. The calculator sits alongside other Sisense widgets for easy use. I constructed the datasets powering the calculator using SQL, Excel, and a bit of Python. There is also some custom JavaScript powering the calculator\'s location filters.',
                    projectURL: '',
                    gitURL: '',
                    picURL: require('./media/dashboard.PNG'),
                    uses: 'Python, SQL, JavaScript, Excel, Sisense'
                },
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

    toggleInfo = () => {
        this.setState({
            infoIsExpanded: !this.state.infoIsExpanded
        })
        console.log(this.state.infoIsExpanded);
    }

    //jump to the nth slide by clicking the nth button
    jumpTo = (index) => {
        this.setState({
            carouselIndex: index,
            isActive: true
        })
    }

    //gets items for display
    /*componentDidMount() {
        axios.get('/api/projects')
        .then(res => {
            const items = [...res.data]
            this.setState({
                prjItem: items
            })
        })
        .catch(err => {console.log(err)})
    }*/
    
    
    render() {
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

                                <img src={this.state.prjItem[this.state.carouselIndex].picURL}
                                     
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
    }
}

const placeholder = 'He’d taken the drug to blunt SAS, nausea, but the muted purring of the car’s floor. The semiotics of the car’s floor. Molly hadn’t seen the dead girl’s face swirl like smoke, to take on the wall between the bookcases, its distorted face sagging to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall of a broken mirror bent and elongated as they fell. The Sprawl was a steady pulse of pain midway down his spine. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the blowers and the amplified breathing of the fighters. The Tessier-Ashpool ice shattered, peeling away from the missionaries, the train reached Case’s station. Then a mist closed over the black water and the robot gardener. Why bother with the movement of the train, their high heels like polished hooves against the gray metal of the console in faded pinks and yellows.'
export default Carousel;