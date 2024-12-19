import React from 'react';
import { Images, Videos } from './ListImages';


const ImagesType = ({ imageNames }) => {
  return (
    <div>
      {imageNames.map((imageNames, ind) => (
        <div key={ind}>
          <img src={(`${Images[imageNames]}`)} alt={`${imageNames} ${ind + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImagesType;