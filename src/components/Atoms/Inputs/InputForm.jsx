import React from 'react'
import PropTypes from 'prop-types'

const InputForm = props => (
  <div className='form__content'>
    <label className='form__label'>{props.label}</label>
    <input
      value={props.value}
      id={props.id}
      className='form__input'
      type={props.type}
      minLength={props.minLength}
      name={props.name}
      placeholder={props.placeholder}
      required={props.required}
      defaultValue={props.default}
      autoComplete={props.autoComplete}
      disabled={props.disabled}
      ref={props.ref}
    />
  </div>
)

InputForm.propTypes = {
  classes: PropTypes.string,
  label: PropTypes.string,
  minLength: PropTypes.number,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  defaultValue: PropTypes.string,
  autoComplete: PropTypes.bool
}

export default InputForm
