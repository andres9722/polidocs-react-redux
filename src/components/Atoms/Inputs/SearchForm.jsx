import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = props => (
  <div className={props.classes}>
    <label>{props.label}</label>
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      required={props.required}
    />
  </div>
)

SearchForm.propTypes = {
  classes: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool
}

export default SearchForm
