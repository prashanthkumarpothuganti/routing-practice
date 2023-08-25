// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="styling">
    <div className="row-styling-2">
      <div className="row-styling">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="image"
        />
        <h1 className="wave-heading">Wave</h1>
      </div>
      <div className="row-styling">
        <Link className="wave-heading" to="/">
          Home
        </Link>
        <Link className="wave-heading" to="/about">
          About
        </Link>
        <Link className="wave-heading" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  </nav>
)

export default Header
