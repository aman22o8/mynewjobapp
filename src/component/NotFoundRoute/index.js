import './index.css'
import HeaderRoute from '../HeaderRoute'

const NotFoundRoute = () => (
  <div>
    <HeaderRoute />
    <div className="not_found_container">
      <img
        className="not_found"
        src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
        alt="not found"
      />
      <h1 className="not_found_heading">Page Not Found</h1>
      <p className="not_found_desc">
        We are sorry, the page you requested could not be found
      </p>
      <button className="refresh_btn" type="button">
        Refresh
      </button>
    </div>
  </div>
)

export default NotFoundRoute
