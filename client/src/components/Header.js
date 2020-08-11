import React, { Component } from 'react'

import Carousel from './Carousel.js'

//import styling
import './Header.css';


class Header extends Component {
    render() {
        return (
            <div className='master'>
                <Carousel />
            </div>
        )
    }
}


export default Header;