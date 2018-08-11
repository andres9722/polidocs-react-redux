import React from 'react'
import PropTypes from 'prop-types'

const SubmitForm = props => (
  <div className='form__content'>
    <input
      type='submit'
      className='form__submit'
      value={props.value}
      disabled={props.disabled}
    />
  </div>
)

SubmitForm.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool
}

export default SubmitForm
