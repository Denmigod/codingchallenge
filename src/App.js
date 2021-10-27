import { Fragment } from "react";
import "./App.css";
import Form from "./components/Form";
import { useState, useEffect } from "react";

import ParticleBackground from "./components/ParticleBackground";

import ImageList from "./components/ImageList";
import Spinner from "./components/Spinner";
import BigImgDetails from "./components/BigImgDetails";

function App() {
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
      if (search.searchText === "") return;
      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
      // move the screen to the top
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

      const url = `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/${actualPage}?showViral=${showViral}&mature=${showMature}&album_previews=${albumPreviews}?q=${searchText}`;
      console.log(`LLAME A LA API con la siguiente url ${url}`);
      const answer = await fetch(url, {
        method: "GET",
        headers: { Authorization: "Client-ID dd24796e29575bb" },
        redirect: "follow",
      });
      const result = await answer.json();

      setSpinner(false);
      setUsersPost(result.data);
      console.log(result);
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

  const previousView=()=>{
    const showImgAux={
      image: "",
    description: "",
    title: "",
    upvotes: "",
    downvotes: "",
    score: "",
    show: false,
    }
    setshowImageDetails(showImgAux);

  }

  return (
    <Fragment>
      <ParticleBackground />
      <div className="formHead mx-auto  col-lg-8 p-5 row  text-center ">
        <div className="jumbotron ">
        <h1 className="display-1 head">Coding Challenge!</h1>
          <br />
          <p className="head fs-6 ">By Demian Noseda</p>
        </div>
      </div>
      <div className=" mt-5 mx-auto  row container-md p-2">
        <Form setSearch={setSearch} />
        {spinner ? <Spinner /> : null}
      </div>
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
      <div className=" row justify-content-center  mb-4 btn-Control">
        {actualPage !== 1  && !showImageDetails.show ? (
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
