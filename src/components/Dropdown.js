import React from "react";
import { Fragment } from "react/cjs/react.production.min";

const Dropdown = ({
  updateCheckSection,
  section,
  showViral,
  window,
  sort,
  updateCheckShowViral,
  updateCheckWindow,
  updateCheckSort,
}) => {
  let contentDropbox = {
    sect: ["hot", "top", "user"],
    vir: ["viral", "NO viral"],
    wind: ["day", "week", "month", "year", "all"],
  };

  let sor
 if ((section==="user"))
      sor= ["viral", "top", "time", "rising"];
 else
     sor= ["viral", "top", "time"];




  return (
    <div class="btn-group mt-3">
      <div className="dropdown  me-2">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {section}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {contentDropbox.sect.map((element) => (
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={updateCheckSection}
              >
                {element}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <br />

      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle  me-2"
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {showViral ? "viral" : "NO viral"}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
          {contentDropbox.vir.map((element) => (
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={updateCheckShowViral}
              >
                {element}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle me-2"
          type="button"
          id="dropdownMenuButton3"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {sort}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
          {sor.map((element) => (
            <li>
              <a className="dropdown-item" href="#" onClick={updateCheckSort}>
                {element}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="dropdown">
        {!(section === "top") ? (
          <button
            className="btn btn-secondary dropdown-toggle me-2"
            type="button"
            id="dropdownMenuButton4"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            disabled
          >
            {window}
          </button>
        ) : (
          <button
            className="btn btn-secondary dropdown-toggle me-2"
            type="button"
            id="dropdownMenuButton4"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {window}
          </button>
        )}

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton4">
          {contentDropbox.wind.map((element) => (
            <li>
              <a className="dropdown-item" href="#" onClick={updateCheckWindow}>
                {element}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
