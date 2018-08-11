import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { authed, isLoading } from './state/actionCreators'
import Loader from './components/Atoms/Loader/Loader.jsx'
import Header from './components/Molecules/Header/Header.jsx'
import Routes from './components/Utils/Routes.jsx'
import firebase from 'firebase/app'
import 'firebase/auth'
import './App.scss'

class App extends Component {
  componentDidMount () {
    const { userAuthed, isLoading } = this.props
    this.removeListener = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        userAuthed(true)
        isLoading(false)
      } else {
        isLoading(false)
      }
    })
  }

  componentWillUnmount () {
    this.removeListener()
  }

  render () {
    const { authed, loading } = this.props
    console.log(this.props)
    return (
      <div className='App'>
        {loading === true
          ? <div className='loading'>
            <h1>Cargando...</h1>
            <Loader />
          </div>
          : <Router>
            <main>
              {authed === true ? <Header /> : null}
              <Routes authed={authed} />
            </main>
          </Router>}
      </div>
    )
  }
}

const mapStateToProps = ({ authed, loading }) => ({ authed, loading })

const mapDispatchToProps = dispatch => ({
  userAuthed (value) {
    dispatch(authed(value))
  },
  isLoading (value) {
    dispatch(isLoading(value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
