// CountryDiv.js
import React from 'react';

const CountryDiv = ({ image, name }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default CountryDiv;
