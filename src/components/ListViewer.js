import React, { Component } from 'react';
import { connect } from 'react-redux';
import { assignId } from '../utilities';
import { add, del } from '../actions';
import List from './List';
import Empty from './Empty';

class ListViewer extends Component {
  onAddItem = (e) => {
    e.preventDefault();
    const { items } = this.props;
    const input = this.input;
    const text = input.value;
    const id = assignId(items, items.length);
    this.props.handleAddItem({
      id,
      text
    });

    input.value = '';
  }

  handleRemoveItem = (item) => (e) => {
    e.preventDefault();
    this.props.handleRemoveItem(item);
  }

  render() {
    const { items } = this.props;
    return (
      <div>
        {
          items.length > 0 ? 
            <List items={items} onRemoveItem={this.handleRemoveItem}/> :
            <Empty />
        }

        <div>
          <form onSubmit={this.onAddItem}>
            <input ref={(e) => { this.input = e; }}  required type="text" />
            <button type="submit">Add Item</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    items: state.list.items
  }),
  (dispatch) => ({
    handleAddItem: (item) => dispatch(add(item)),
    handleRemoveItem: (item) => dispatch(del(item)),
  }),
)(ListViewer);