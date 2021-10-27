import React from "react";
import { Fragment } from "react/cjs/react.production.min";

const Checkbox = ({ label ,updateCheck}) => {
  return (
    <Fragment>
      <input
        type="checkbox"
        class="btn-check"
        id={label}
        value={label}
        onClick={updateCheck}
        autocomplete="off"
      />
      <label className="btn btn-outline-primary mr-4" for={label}>
        {label}
      </label>
    </Fragment>
  );
};

export default Checkbox;
