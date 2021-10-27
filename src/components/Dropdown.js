import React from "react";

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
  /* --- Setting up the states ---*/
  let contentDropbox = {
    sect: ["hot", "top", "user"],
    vir: ["viral", "NO viral"],
    wind: ["day", "week", "month", "year", "all"],
  };

  /* --- Set the sort array to show the "rising" option only when the user chooses the "user" section ---*/
  let sor;
  if (section === "user") sor = ["viral", "top", "time", "rising"];
  else sor = ["viral", "top", "time"];

  return (
    /*  
    This work in this way: it has 4 dropdowns and each one uses the array defined before 
     to create the options for each dropdown, now each one has his own method to change
     the state correspondent when the user click on an option.
    */
    <div class="btn-group mt-2">
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
