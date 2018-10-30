import React from 'react';
import ListItem from './list_item';

const List = (props) => {
  const items = props.items.map( item => {
    return (
      <ListItem
        onItemSelect={props.onItemSelect}
        key={item.itemId}
        item={item} />
      );
  });

  return (
    <ul className="col-md-4 list-group">
      {items}
    </ul>
  );
};

export default List;
