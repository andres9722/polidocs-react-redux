import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { showMenu } from '../../../state/actionCreators'
import Menu from '../Menu/Menu.jsx'
import './Header.scss'

const Header = ({ showMenu, handleOnShowMenu }) => {
  return (
    <header className='header'>
      <div className='header__container l-container'>
        <div className='logo'>
          <Link to='/dashboard'>
            <h1 className='logo__link'>POLIDOCS</h1>
          </Link>
        </div>
        <div
          className={showMenu ? 'hamburger hamburger--animated' : 'hamburger'}
          onClick={() => handleOnShowMenu()}
        >
          <span className='hamburger__next' />
        </div>
        <nav className={showMenu ? 'nav nav--show' : 'nav'}>
          <Menu handleOnShowMenu={handleOnShowMenu} />
        </nav>
      </div>
    </header>
  )
}

const mapStateToProps = ({ showMenu }) => ({ showMenu })

const mapDispatchToProps = dispatch => ({
  handleOnShowMenu () {
    dispatch(showMenu())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
