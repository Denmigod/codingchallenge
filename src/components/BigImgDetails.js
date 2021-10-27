import React from "react";

const BigImgDetails = ({ showImageDetails }) => {
  const { image, description, title, upvotes, downvotes, score } =
    showImageDetails;

  return (
    <div className=" col-lg-8 p-5 row ">
      <div className=" col-sm-2 col-md-9 col-lg-10 mb-4 mt-5 mx-auto">
        <div className="card bg-card">
          <img src={image} className="card-img-top img-big" />
          <div className="card-body">
            <p className="card-text text info">
              Upvotes: {upvotes} | Downvotes: {downvotes} | Score: {score}
            </p>
            {description ? (
              <p className="card-text text">{description}</p>
            ) : (
              <p className="card-text desc-empty text ">Description Empty</p>
            )}
          </div>
          <div className="card-footer card-title text-center text">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default BigImgDetails;
