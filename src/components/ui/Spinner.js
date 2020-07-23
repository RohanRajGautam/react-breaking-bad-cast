import React from "react";
import spinner from "../../img/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={spinner}
      alt='spinner'
      style={{ margin: "auto", width: "200px", display: "block" }}
    />
  );
};

export default Spinner;
