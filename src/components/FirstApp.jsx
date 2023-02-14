import React from "react";
import PropTypes from "prop-types"

const newMessage = "Nombre:!!!!";

const getResults = (a, b) => {
  return a + b;
};  

const FirstApp = ({name="Whoami", title}) => {

  return (
    <>
      <h3>{title}</h3>
      <p>Elemento: Mokuton</p>  
      <span>Hola {name}!</span>
    </>
  );
};

export default FirstApp;

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
}

FirstApp.defaultProps = {
  title: 'No Hay Chucha Tu madrex',
  name: "Mengeche",
}