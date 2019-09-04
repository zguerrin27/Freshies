import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { addItem } from '../actions/itemActions';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { Model } from 'mongoose';
import itemReducer from '../reducers/itemReducer';

class ItemModal extends Component {
  state = {
    modal: false,
    name: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })  // this adds the e.t.val to the e.targe.name feature of the input in the formgroup
  }

  onSubmit = (e) => {
    e.preventDefault();   // stops form from default behavior 

    const newItem = {
      id: uuid(),
      name: this.state.name
    }

    this.props.addItem(newItem);   // Add new item via the addItem action that you grab from props

    this.toggle();  // close the modal
  }

  render(){
    return(
      <div>
        <Button
          color="primary"
          style={{marginBottom: '1rem', marginLeft: '2rem', maxWidth: '95%'}}
          onClick={this.toggle}
          size="lg"
          block
        >Add Item</Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add Item To List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input 
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add Item"
                  onChange={this.onChange}
                  ></Input>
                  <Button color="dark" style={{ marginTop: "2rem" }} block >Add Item</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, { addItem })(ItemModal);