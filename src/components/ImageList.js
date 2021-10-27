import React from "react";
import ImageCard from "./ImageCard";

const ImageList = ({ usersPost,setshowImageDetails }) => {
  if (!usersPost) return null;
 
  return (
    <div className=" col-lg-8 p-5 row">
      {usersPost.map((userPost) =>
        userPost.images?.map((image) =>
          !(image.type === "video/mp4") ? (
            <ImageCard
              key={image.id}
              image={image.link}
              description={image.description}
              setshowImageDetails={setshowImageDetails}
              title={userPost.title}
              upvotes={userPost.ups}
              downvotes={userPost.downs}
              score={userPost.score}
              
            />
          ) : null
        )
      )}
    </div>
  );
};

export default ImageList;
