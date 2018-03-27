import React, { Component } from 'react';
import List from './List';
import Empty from './Empty';
import { assignId } from '../utilities';

class ListViewer extends Component {
  state = {
    items: [
      { text: 'one', id: 0 },
      { text: 'two', id: 1 },
    ]
  }

  handleAddItem = (e) => {
    e.preventDefault();
    const input = this.input;
    const text = input.value;
    this.setState((prevState) => {
      const id = assignId(prevState.items, prevState.items.length);
      return ({
        items: [...prevState.items, { text, id }]
      });
    });

    input.value = '';
  }

  handleRemoveItem = (id) => (e) => {
    e.preventDefault();

    this.setState((prevState) => ({
      items: prevState.items.filter(e => e.id != id),
    }));
  }

  render() {
    return (
      <div>
        {
          this.state.items.length > 0 ? 
            <List items={this.state.items} onRemoveItem={this.handleRemoveItem}/> :
            <Empty />
        }
        
        <div>
          <form onSubmit={this.handleAddItem}>
            <input ref={(e) => { this.input = e; }}  required type="text" />
            <button type="submit">Add Item</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ListViewer;