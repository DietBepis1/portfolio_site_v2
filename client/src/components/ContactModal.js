import React, { Component } from 'react';
import {
    Modal,
    ModalBody
} from 'reactstrap';
import './ContactModal.css';

class ContactModal extends Component {
    state = {
        modal: false,
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    render() {
        

        return (
            <div className='contact__modal'>
                <button 
                className="contact__modal-btn"
                size='sm'
                onClick={this.toggle}
                >
                    Contact Me
                </button>

                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                size='lg'
                className='modal__style'
                >
                    <ModalBody className='modal__body'>
                        <h1 className="modal__header">Let's Get in Touch!</h1>
                        <hr></hr>
                        <h4><b>Phone:</b> {this.props.about.phone}</h4>
                        <h4><b>Email:</b> {this.props.about.email}</h4>
                        <h4><b>Tech I've used:</b> React.js, Vue.js, Node.js, Express.js, MongoDB, Python, Django, SQL</h4>
                        <h4><b>Education:</b> {this.props.about.school}</h4>
                        <div className="modal__btn">
                            <button className="modal__btn-exit" onClick={this.toggle}>x</button>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default ContactModal;