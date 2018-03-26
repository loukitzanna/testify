import React from 'react';

const Item = ({ text, id, onRemoveItem }) => (
  <li><button className="danger" onClick={onRemoveItem(id)} type="button">X</button>{text}</li>
);

export default Item;