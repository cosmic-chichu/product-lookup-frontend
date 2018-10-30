import React from 'react';

const ItemDetail = ({item}) => {
  if(!item) {
    return <div>Loading...</div>;
  }

  // const videoId = video.id.videoId;
  // const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
    {item.categoryPath}
      <div className="embed-responsive embed-responsive-16by9">
        <div className="media-left">
          <img className="media-object" src={item.mediumImage}/>
        </div>
        <div>Price: ${item.salePrice}</div>
        <div>Stock Status: {item.stock}</div>
        <div dangerouslySetInnerHTML={{ __html: item.shortDescription}}></div>
      </div>
      <div className="details">
        <div>{item.name}</div>
        <div><a href={item.productUrl} target='_blank'>Link to Product</a></div>
      </div>
    </div>
  );
};

export default ItemDetail;
