import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
// import uuid from 'uuid'

class ShoppingList extends Component {
    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = _id => {
        this.props.deleteItem(_id);
    };

    // onDeleteClick = _id => {
    //     this.setState({
    //         items: this.state.items.filter(item => item._id != _id)
    //     })
    // };

    state = {
        // items: [
        //     { _id: uuid(), name: 'chadol'},
        //     { _id: uuid(), name: 'nan'},
        //     { _id: uuid(), name: 'dooboo'},
        //     { _id: uuid(), name: 'chapchae'},
        // ]
    }
    
    render() {
        // const { items } = this.state;
        const { items } = this.props.item;
        return (
            <Container>
            {/* <Button color = "dark" size = "md" style ={{margin: '1rem'}}
                onClick = {() =>{
                    const name = prompt('Enter an item');
                    if (name){
                        this.setState(state =>({ 
                        items: [...state.items, { _id: uuid(), name }]
                    }))}}
                }
                >Add Item </Button> */}
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >
                                        &times;
                  </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    item: state.item
});

// export default (ShoppingList);
export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);
