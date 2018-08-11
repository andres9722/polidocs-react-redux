import React from 'react'
import PropTypes from 'prop-types'

const Button = props => (
  <button className={props.classes} onClick={props.onClick} type={props.type}>
    {props.value}
  </button>
)

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
