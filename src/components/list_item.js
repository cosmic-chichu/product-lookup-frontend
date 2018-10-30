import React from 'react';

const ListItem = ({item, onItemSelect}) => {
  //const video = props.video; same as constructor
  const imageUrl = item.thumbnailImage;
  return (
    <li onClick={() => onItemSelect(item)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{item.name}</div>
          <div><img className="media-object" src={item.customerRatingImage} alt={item.customerRating} title={item.customerRating}/> {item.numReviews} Ratings
          </div>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
