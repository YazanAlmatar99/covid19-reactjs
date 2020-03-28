import React from "react";
import './ImageList.css';
import ImageCard from './ImageCard';
const ImageList = props => {
  const images = props.images.map((image) => {
    return <ImageCard  key={image.id} image={image} />;
  });
 if (images===undefined || images.length ===0){
return <div className= 'ui red message'>
  Please Search For an Existing Image in the search bar
</div>
 }

  return <div  className='image-list'>{images}</div>;
 

};

export default ImageList;
