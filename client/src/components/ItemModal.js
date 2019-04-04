import React from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Form,
    FormGroup,
    Label,
    Input } from 'reactstrap';
import {connect} from 'react-redux';
import {addItem} from '../actions/itemActions'
import PropTypes from 'prop-types'

class ItemModal extends React.Component {
    state = {
            modal: false,
            name: ''
        };
    
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const newItem = {
            name: this.state.name
        }
        this.props.addItem(newItem)
        this.toggle()
    }

    render() {
        return (
          <div>
            <Button style={{ margin: "2rem" }} onClick={this.toggle}>
              Add Item
            </Button>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggle}>
                Add to Shopping List
              </ModalHeader>
              <ModalBody>
                <Form onSubmit={this.onSubmit}>
                  <FormGroup>
                      <Label for ='item'>Item</Label>
                        <Input type = 'text' name='name' id='item' placeholder="Add Shopping Item" onChange={this.onChange} />
                        <Button style={{marginTop: '1rem'}} color="dark" block >Add Item</Button>   
                  </FormGroup>
                </Form>
              </ModalBody>
            </Modal>
          </div>
        );
    }
}
const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, {addItem})(ItemModal);