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
                <Container className='underlay' fluid={true}>
                    <Navbar light expand='sm'>
                        <NavbarBrand className='brand'>piludu.io</NavbarBrand>
                        <NavbarToggler onClick={this.toggle.bind(this)}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className='ml-auto' navbar>
                                <NavItem>
                                    <NavLink style ={{color: '#191919'}} className='link-style' href='#'>Github</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style ={{color: '#191919'}} className='link-style' href='#'>LinkedIn</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style ={{color: '#191919'}} className='link-style' href='#'>Resume</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style ={{color: '#191919'}} className='link-style' href='#'>Contact Me</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        )
    }
}

export default AppNavbar;