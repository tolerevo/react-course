import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, name }) => {
  console.log(text);
 
  return <button>{text} - {name}</button>;
};

Button.propTypes = { text: PropTypes.string.isRequired };

Button.defaultProps = {
  name: 'Some name'
}
export default Button;
