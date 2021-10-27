import { useState, useEffect, Fragment } from "react";
import "./App.css";

import Form from "./components/Form";
import ParticleBackground from "./components/ParticleBackground";
import ImageList from "./components/ImageList";
import Spinner from "./components/Spinner";
import BigImgDetails from "./components/BigImgDetails";

function App() {

  //  search state will be used to configure the API request.
  const [search, setSearch] = useState({
    searchText: "",
    section: "hot",
    sort: "viral",
    window: "all",
    showViral: false,
    showMature: false,
    albumPreviews: false,
  });

  const [usersPost, setUsersPost] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [spinner, setSpinner] = useState(false);
  const [showImageDetails, setshowImageDetails] = useState({
    image: "",
    description: "",
    title: "",
    upvotes: "",
    downvotes: "",
    score: "",
    show: false,
  });

  useEffect(() => {
    const apiRequest = async () => {
      // Analyse if the content is empty
      if (search.searchText === "") return;

      // move the screen to the top and set the spinner
      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
      setSpinner(true);

      const {
        searchText,
        section,
        sort,
        window,
        showViral,
        showMature,
        albumPreviews,
      } = search;

      // calling the API
      const url = `${process.env.REACT_APP_IMGUR_URL}${section}/${sort}/${window}/${actualPage}?showViral=${showViral}&mature=${showMature}&album_previews=${albumPreviews}?q=${searchText}`;
      const clientID= `Client-ID ${process.env.REACT_APP_IMGUR_CLIENTID}`
      
      
      const answer = await fetch(url, {
        method: "GET",
        headers: { Authorization: clientID },
        redirect: "follow",
      }).catch((error) => {
        console.log("An error appear trying to connectin with the API");
        console.log(error);
      });
      const result = await answer.json();

      //setting the spinner to false
      setSpinner(false);
      setUsersPost(result.data);
    };
    apiRequest();
  }, [search, actualPage]);

  const previousPage = (e) => {
    e.preventDefault();
    setActualPage(actualPage + 1);
  };

  const nextPage = (e) => {
    e.preventDefault();
    setActualPage(actualPage - 1);
  };

  // when the user try to go back to the initial menu where the images are
  const previousView = () => {
    const showImgAux = {
      image: "",
      description: "",
      title: "",
      upvotes: "",
      downvotes: "",
      score: "",
      show: false,
    };
    setshowImageDetails(showImgAux);
  };

  return (
    <Fragment>
      {/* this component make the background appear */}
      <ParticleBackground />

      {/* --- Title of the page ---*/}
      <div className="formHead mx-auto  col-lg-8 p-5 row  text-center ">
        <div className="jumbotron ">
          <h1 className="display-1 head">Coding Challenge!</h1>
          <br />
          <p className="head fs-6 ">By Demian Noseda</p>
        </div>
      </div>

      {/* --- The form ---*/}
      <div className=" row mx-auto col-md-4 col-lg-5">
        <Form setSearch={setSearch} />
      </div>

      {/* --- Spinner ---*/}
      {spinner ? <Spinner /> : null}

      {/* --- Shows the image list or the big image with the details when the user clic on one image ---*/}
      <div className=" row justify-content-center ">
        {showImageDetails.show ? (
          <BigImgDetails showImageDetails={showImageDetails} />
        ) : (
          <ImageList
            usersPost={usersPost}
            setshowImageDetails={setshowImageDetails}
          />
        )}
      </div>


       {/* --- Shows the corresponding button ---*/}
      <div className=" row justify-content-center  mb-4 btn-Control">
        {actualPage !== 1 && !showImageDetails.show ? (
          <button
            type="button"
            className="btn page me-3"
            onClick={previousPage}
          >
            &laquo; Previous
          </button>
        ) : null}
        {usersPost.length >= 1 && !showImageDetails.show ? (
          <button type="button" className="btn page " onClick={nextPage}>
            Next &raquo;
          </button>
        ) : null}
        {showImageDetails.show ? (
          <button
            type="button"
            className="btn page me-3"
            onClick={previousView}
          >
            &laquo; Go back
          </button>
        ) : null}
      </div>
    </Fragment>
  );
}

export default App;
