// impt to sorthand import propTypes, to ensure that the prop si a certain type
import PropTypes from 'prop-types'


// inputing props so that we can send in info from the app.js
function Header({ text }) {
  return (
    <header>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

// This sets a default prop in case nothing else is set
Header.defaultProps = {
  text: 'Feedback UI'
}

// THis makes it that the text prop has to be type string
Header.propTypes = {
  text: PropTypes.string
}

export default Header
