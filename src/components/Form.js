import React, { Fragment, useState } from "react";

import Dropdown from "./Dropdown";
import Error from "./Error";

const Form = ({ setSearch }) => {
  
  const checkboxText = [
    "hot",
    "top",
    "user",
    "viral",
    "top",
    "time",
    "rising",
    "viralimages",
    "day",
    "week",
    "month",
    "year",
    "all",
  ];

  const [text, setText] = useState("");
  const [section, setSection] = useState("hot");
  const [sort, setSort] = useState("viral");
  const [window, setWindow] = useState("day");
  const [showViral, setShowViral] = useState(false);
  const [showMature, setShowMature] = useState(false);
  const [albumPreviews, setAlbumPreviews] = useState(false);
  const [error, setError] = useState(false);

  const setTextSearch = (value) => {
    setText(value);
  };

  const submitForm = (e) => {
    e.preventDefault();

    const search = {
      searchText: text,
      section,
      sort,
      window,
      showViral,
      showMature,
      albumPreviews,
    };
    if (!(text === "")) {
      setError(false);
      setSearch(search);
    } else setError(true);
  };

  const updateCheckSection = (e) => {
    if (!(e.target.innerText === "top")) setWindow("day");
    if (!(e.target.innerText === "user")) setSort("viral");
    setSection(e.target.innerText);
  };

  const updateCheckSort = (e) => {
    setSort(e.target.innerText);
  };

  const updateCheckWindow = (e) => {
    setWindow(e.target.innerText);
  };

  const updateCheckShowViral = (e) => {
    if (e.target.innerText === "viral") setShowViral(true);
    else setShowViral(false);
  };

  return (
    <Fragment>
      <form onSubmit={submitForm} className="mt-3">
        <div className="row">
          <div className="form-group ">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Write here to search for a image"
              onChange={(e) => setTextSearch(e.target.value)}
            />
          </div>
          <div className=" mt-3">
            <input type="submit" className="btn btn-lg me-5" value="Search" />
        <Dropdown
          updateCheckSection={updateCheckSection}
          section={section}
          sort={sort}
          window={window}
          showViral={showViral}
          updateCheckShowViral={updateCheckShowViral}
          updateCheckWindow={updateCheckWindow}
          updateCheckSort={updateCheckSort}
        />
          </div>
        </div> 
      </form>
      {error ? <Error message="Please write something to search" /> : null}
    </Fragment>
  );
};
export default Form;
