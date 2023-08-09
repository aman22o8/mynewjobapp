import './index.css'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const HeaderRoute = props => {
  const clickedLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="Header_container">
      <Link className="linkslogo" to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="logo"
        />
      </Link>
      <ul className="list_types">
        <li className="itms_in">
          <Link className="linkslogo" to="/">
            <p className="heading">Home</p>
          </Link>
        </li>
        <li>
          <Link className="linkslogo" to="/jobs">
            <p className="heading">Jobs</p>
          </Link>
        </li>

        <li>
          <button onClick={clickedLogout} className="log_out_btn" type="button">
            Logout
          </button>
        </li>
      </ul>
    </div>
  )
}

export default withRouter(HeaderRoute)
