import React from 'react';
import {
    Modal,
    ModalBody,
} from 'reactstrap';
import './CarouselModal.css';
import { Component } from 'react';

class CarouselModal extends Component {
    state = {
        modal: false
    }

    //toggle for opening and closing modal
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    render() {

        return(
            <div>
                <button className='info__expand' onClick={this.toggle}>
                    <img src={require('./media/add.svg')} alt=''/>
                </button>

                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                size='lg'
                className='modal__style'
                >
                    <ModalBody className='modal__body'>
                        <h2 className='modal__head'>{this.props.description.title}</h2>
                        <hr/>
                        <p>
                            {this.props.description.description}
                        </p>
                        <p>
                            <em><b>Uses:</b> {this.props.description.uses}</em>
                        </p>
                        <div className="modal__btn">
                            <button className="modal__btn-exit" onClick={this.toggle}>x</button>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}


export default CarouselModal;