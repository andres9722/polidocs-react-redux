import React from 'react'
import { connect } from 'react-redux'
import Button from '../Atoms/Buttons/Button.jsx'
import { onLogin } from '../../state/actionCreators'

const Login = ({ handleOnLogin }) => (
  <div>
    <h1>Login</h1>
    <Button value='Iniciar Sesión' onClick={() => handleOnLogin()} />
  </div>
)

const mapDispatchToProps = dispatch => ({
  handleOnLogin () {
    dispatch(onLogin())
  }
})

export default connect(null, mapDispatchToProps)(Login)
