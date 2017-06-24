import React from 'react'
import PropTypes from 'prop-types'

const App = (props) => (
  <div id='app'>
    <h1>Gift App</h1>
    {props.children}
  </div>
)

App.propTypes = { children: PropTypes.array }

export default App
