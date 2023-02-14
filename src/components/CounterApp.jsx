import React from 'react'
import PropTypes from "prop-types"

function CounterApp({value}) {
  return (
    <div>
        <h1>CounterApp</h1>
        <h2>{value}</h2>
    </div>
  )
}

export default CounterApp

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 0
}