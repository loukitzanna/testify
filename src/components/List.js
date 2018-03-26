import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <ListItem key={index} text={item.text} id={item.id} onRemoveItem={this.props.onRemoveItem} />
        ))}
      </ul>
    );
  }
}

export default List;