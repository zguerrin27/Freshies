import React, { Component } from 'react';
import {
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {

  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  }

  render() {

    const { items } = this.props.item;
    // const { items } = this.state; // destructoring... the curly braces pulls out items from this.state
    // style={{maxWidth: "75%", margin: "auto"}}
    // <Container></Container>
    return (
    
        <ListGroup>
          {items.map( ({ _id, name }) => (
            <ListGroupItem>
              <Button
                className="remove-btn"
                style={{marginRight: "5rem"}}
                color="danger"
                size="small"
                onClick={this.onDeleteClick.bind(this, _id)}   // binds this to onDeleteClick because its an arrow function and not bound in a constructor.. passes up id
                > &times;
                </Button>
            {name}
                
            </ListGroupItem>
          ))}
        </ListGroup> 
   
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);
