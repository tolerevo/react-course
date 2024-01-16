import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, name = "" }) => {
  return (
    <button
      onClick={function () {
        console.log("Hola Mundo");
      }}
    >
      {text} - {name}
    </button>
  );
};

Button.propTypes = { text: PropTypes.string.isRequired };

export default Button;
