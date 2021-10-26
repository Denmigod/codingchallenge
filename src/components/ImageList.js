import React from "react";
import ImageCard from "./ImageCard";

const ImageList = ({ usersPost }) => {
  if (!usersPost) return null;

  return (
    <div className="mx-auto col-8 p-5 row">
      {usersPost.map((userPost) =>
        userPost.images?.map((image) => (
          <ImageCard
            key={userPost.id}
            image={image.link}
            description={image.description}
          />
        ))
      )}
    </div>
  );
};

export default ImageList;
