import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import './AppNavbar.css';
import resume from './media/resume 2020.5.pdf';
import './ContactModal.js';

class AppNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    //toggle navbar menu button on small screens
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <Container fluid={true}>
                    <Navbar light expand='sm' fixed='top' className='underlay'>
                        <NavbarBrand className='brand'>piludu.io</NavbarBrand>
                        <NavbarToggler onClick={this.toggle.bind(this)}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className='ml-auto' navbar>
                                <NavItem>
                                    <NavLink style ={{color: '#191919'}} className='link-style' href='https:/github.com/dietbepis1'>Github</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style ={{color: '#191919'}} className='link-style' href='https://www.linkedin.com/in/glenn-piludu-0b1401139/'>LinkedIn</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style ={{color: '#191919'}} className='link-style' href={resume} target='_blank'>Resume</NavLink>
                                </NavItem>
                                {/*<NavItem>
                                    <ContactModal style={{fontSize: '1rem'}}/>
                                </NavItem>*/}
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        )
    }
}

export default AppNavbar;