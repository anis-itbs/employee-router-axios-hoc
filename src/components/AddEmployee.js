import React, { Component } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

import { connect } from 'react-redux'
import { v4 as uuid } from 'uuid';

import { addEmployee } from '../js/actions/employeesActions'

const emptyEmployee = {
    "id": "",
    "name": "",
    "poste": "",
    "phone": "",
    "email": "",
    "img": "avatarM1.png"
}

class AddEmployee extends Component {
    constructor(){
        super()
        this.state={
            show: false,
            newEmployee: emptyEmployee
        }
    }

    toggleModal = () => {
        this.setState({
            ...this.state,
            show: !this.state.show,
            newEmployee: {
                ...emptyEmployee,
                id : uuid()
            }
        })
        
    }

    handleChange=(event)=>{
        this.setState({
            ...this.state,
            newEmployee: {
                ...this.state.newEmployee,
                [event.target.name] : event.target.value
            }
        })
    }

    saveEmployee = () =>{
        this.props.addEmployee(this.state.newEmployee)
        this.toggleModal()
    }

    
    render() {
        return (
            <div>
                <Button variant="primary" onClick={this.toggleModal}>New</Button>


                <Modal show={this.state.show} onHide={this.toggleModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add employee</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicBName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" name="name" onChange={this.handleChange} />
                            </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="formBasicPoste">
                                <Form.Label>Poste</Form.Label>
                                <Form.Control type="text" placeholder="Enter poste" name="poste" onChange={this.handleChange} />
                            </Form.Group>
                            
                            
                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="Enter phone" name="phone" onChange={this.handleChange} />
                            </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChange} />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.toggleModal}>
                            Close
                        </Button>

                        <Button variant="primary" onClick={this.saveEmployee}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default connect(null, {addEmployee})(AddEmployee)
