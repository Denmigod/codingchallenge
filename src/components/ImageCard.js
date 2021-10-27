import React from "react";

const ImageCard = ({
  image,
  description,
  setshowImageDetails,
  title,
  upvotes,
  downvotes,
  score,
}) => {
  const showDetails = () => {
    const imgDetails = {
      image,
      description,
      title,
      upvotes,
      downvotes,
      score,
      show: true,
    };
    const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
      // move the screen to the top
    setshowImageDetails(imgDetails);
  };

  return (
    
    <div className=" col-sm-3 col-md-6 col-lg-4 mb-4 ">
      <div className="card bg-card">
        <img
          src={image}
          className="card-img-top img-grid "
          onClick={showDetails}
        />
        {description ? (
          <div className="card-footer descrip-grid">{description}</div>
        ) : (
          <div className="card-footer desc-empty descrip-grid">
            Description Empty
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
