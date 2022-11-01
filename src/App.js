import React, { Fragment } from 'react'
import Footer from './components/Footer';
import Home from './components/Home'
import Main from './components/Main'

const App = () => {
  return (
    <Fragment>
      <Home />
      <Main />
      <Footer />
    </Fragment>
  )
}

export default App