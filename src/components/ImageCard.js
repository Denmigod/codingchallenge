import React from "react";

const ImageCard = ({ image, description }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card text-white bg-card">
        <img src={image} className="card-img-top" />

        <div className="card-footer">{description} HELLO</div>
      </div>
    </div>
  );
};

export default ImageCard;
