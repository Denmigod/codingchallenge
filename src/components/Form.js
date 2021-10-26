import React, { Fragment, useState } from "react";
import "../styles/Container.css";

const Form = ({ setSearch }) => {
  const [text, setText] = useState("");
  const [section, setSection] = useState("hot");
  const [sort, setSort] = useState("viral");
  const [window, setWindow] = useState("all");
  const [showViral, setShowViral] = useState(false);
  const [showMature, setShowMature] = useState(false);
  const [albumPreviews, setAlbumPreviews] = useState(false);

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

    setSearch(search);
  };

  return (
    <form onSubmit={submitForm} className="mt-3 ml-3">
      <div className="row">
        <div className="form-group col-md-9">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Write here to search for a image"
            onChange={(e) => setTextSearch(e.target.value)}
          />
        </div>
        <div className="form-group col-md-2">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Search"
          />
        </div>
      </div>
      {/* <div className="row">
        <div className="form-group col-md-2">
          <input
            type="submit"
            className="btn btn-lg btn-primary btn-block"
            value="Hot"
            disabled
          />
        </div>
        <div className="form-group col-md-2">
          <input
            type="submit"
            className="btn btn-lg btn-primary btn-block"
            value="Top"
            disabled
          />
        </div>
        <div className="form-group col-md-2">
          <input
            type="submit"
            className="btn btn-lg btn-primary btn-block"
            value="User"
            disabled
          />
        </div>
      </div> */}
    </form>
  );
};
/*  {error ? <Error mensaje="Agrega un termino de busqueda" /> : null}*/
export default Form;
