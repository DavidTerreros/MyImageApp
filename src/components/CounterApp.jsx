import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function CounterApp({ value }) {
  const [data, setData] = useState(0);
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (data % 2 === 0) {
      setMessage("Es Par!");
    } else {
      setMessage("Es Impar!");
    }
  }, [data]);

  const handleAdd = (e) => {
    setData(data + 1);
  };

  const handleRemove = (e) => {
    setData(data - 1);
  };

  const handleReset = (e) => {
    setData(0);
  };

  return (
    <div className="doton">
      <header>
        <h1 className="hero__header">CounterApp</h1>
      </header>
      <h2>{value}</h2>
      <p>Valor: {data}</p>
      <div className="nav__buttons">
        <button onClick={handleAdd}>+</button>
        <button onClick={handleRemove}>-</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <hr />
      <span
        style={
          data % 2
            ? { textAlign: "center", fontSize: "2rem" }
            : {
                color: "green",
                fontSize: "1.5rem",
                textDecoration: "underline",
              }
        }
      >
        {message}
      </span>
    </div>
  );
}

export default CounterApp;

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 0,
};
