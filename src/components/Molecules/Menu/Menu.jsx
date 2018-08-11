import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../../state/actionCreators'

const Menu = ({ handleOnSignOut, handleOnShowMenu }) => {
  return (
    <ul className='menu l-container'>
      <li className='menu__item'>
        <NavLink
          className='menu__link'
          activeClassName='menu__link--active'
          onClick={() => handleOnShowMenu()}
          to='/dashboard'
        >
          Dashboard
        </NavLink>
      </li>
      <li className='menu__item'>
        <NavLink
          className='menu__link'
          activeClassName='menu__link--active'
          onClick={() => handleOnShowMenu()}
          to='/calcula'
        >
          Calcula tú nota
        </NavLink>
      </li>
      <li className='menu__item'>
        <NavLink
          className='menu__link'
          activeClassName='menu__link--active'
          onClick={() => handleOnShowMenu()}
          to='/services'
        >
          Servicios
        </NavLink>
      </li>
      <li className='menu__item'>
        <Link className='menu__link' to='/' onClick={() => handleOnSignOut()}>
          Salir
        </Link>
      </li>
    </ul>
  )
}

const mapDispatchToProps = dispatch => ({
  handleOnSignOut () {
    dispatch(signOut())
  }
})

export default connect(null, mapDispatchToProps)(Menu)
