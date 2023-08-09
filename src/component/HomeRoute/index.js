import './index.css'
import {Link} from 'react-router-dom'
import HeaderRoute from '../HeaderRoute'

const HomeRoute = () => (
  <div className="main_header_container">
    <HeaderRoute />
    <div className="home_container">
      <div className="first">
        <h1 className="home_heading">Find The Job That Fits Your Life</h1>
        <p className="home_desc">Millions of people are searching for jobs </p>
        <Link to="/jobs" className="links_home">
          <button type="button" className="home_button">
            Find Jobs
          </button>
        </Link>
      </div>
      {/* <div className="second">
        <img
          className="home_image"
          src="https://assets.ccbp.in/frontend/react-js/home-lg-bg.png"
          alt="home"
        />
      </div> */}
    </div>
  </div>
)

export default HomeRoute
