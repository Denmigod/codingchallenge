import { Fragment } from "react";
import "./App.css";
import Form from "./components/Form";
import { useState, useEffect } from "react";

import ParticleBackground from "./components/ParticleBackground";
import ImageCard from "./components/ImageCard";
import ImageList from "./components/ImageList";

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

  useEffect(() => {
    console.log("Entre al useEffect");
    const apiRequest = async () => {
      if (search.searchText === "") return;
      // move the screen to the top
      const {
        searchText,
        section,
        sort,
        window,
        showViral,
        showMature,
        albumPreviews,
      } = search;
      const maxImagesPage = 30;

      const url = `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/$1?showViral=${showViral}&mature=${showMature}&album_previews=${albumPreviews}?q=${searchText}`;

      const answer = await fetch(url, {
        method: "GET",
        headers: { Authorization: "Client-ID dd24796e29575bb" },
        redirect: "follow",
      });
      const result = await answer.json();
      /* setImages(result.hits);

      // calculation of the pages total
      setTotalPages(Math.ceil(result.totalHits / maxImagesPage));*/
      console.log(result);
      console.log(result.data[0].link);
      setUsersPost(result.data);
    };
    apiRequest();
  }, [search]);

  return (
    <Fragment>
      <ParticleBackground />
      <div className="formHead container-md text-center">
        <h1 className=" fs-1 head">Coding Challenge!</h1>
        <br />
        <h3 className="head responsable">By Demian Noseda</h3>
      </div>
      <div className=" mt-5 container-md bg-secondary bg-gradient p-2 text-dark bg-opacity-10">
        <Form setSearch={setSearch} />
      </div>
      <div className="mx-auto col-8 p-5 row">
        <ImageList usersPost={usersPost} />
      </div>
    </Fragment>
  );
}

export default App;
