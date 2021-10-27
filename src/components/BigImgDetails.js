import React from "react";
import { Fragment } from "react/cjs/react.production.min";

const BigImgDetails = ({ showImageDetails }) => {
  const { image, description, title, upvotes, downvotes, score } =
    showImageDetails;

  return (
    <div className=" col-lg-8 p-5 row">

 
    <div className=" col-sm-2 col-md-9 col-lg-10 mb-4 mt-5">
    
      <div className="card bg-card">
        <img src={image} className="card-img-top img-big"/>
        <div className="card-body">
          <p className="card-text">Upvotes: {upvotes} | Downvotes: {downvotes} | Score: {score}</p>
         
          {description ? (
          <p className="card-text">{description}</p>
        ) : (
          <p className="card-text desc-empty">Description Empty</p>
        )}
        </div>
        <div className="card-footer card-title text-center">
          {/* <a
            href={largeImageURL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-block"
          >
            Ver Imagen
          </a> */}
          {title}
        </div>

   </div>
        




      </div>
    </div>
  );
};

export default BigImgDetails;
