import './index.css'
import {BsStarFill} from 'react-icons/bs'
// import {IoLocationSharp} from 'react-icons/io'
import {FaSuitcase} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const JobCard = props => {
  const {jobData} = props
  const {
    title,
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    rating,
    location,
    packagePerAnnum,
  } = jobData

  return (
    //   Wrap with Link from react-router-dom
    <li className="job-item">
      <Link to={`/jobs/${id}`} className="link-item">
        <div className="onTop">
          <img src={companyLogoUrl} alt="job" className="company logo" />
          <div>
            <h1 className="title">{title}</h1>
            <div className="rating_container">
              <BsStarFill className="star_icon" />
              <p className="rating">{rating}</p>
            </div>
          </div>
        </div>
        <div className="onMiddle">
          <div className="first_part">
            <div className="loaction_type">
              {/* <IoLocationSharp className="location" /> */}
              <p className="location_heading">{location}</p>
            </div>

            <div className="loaction_type">
              <FaSuitcase className="location" />
              <p className="location_heading">{employmentType}</p>
            </div>
          </div>
          <p className="stipend">{packagePerAnnum}</p>
        </div>
        <hr className="horizontal" />
        <h1 className="descriptionheading">Description</h1>
        <p className="description">{jobDescription}</p>
        <div className="product-details" />
      </Link>
    </li>
  )
}

export default JobCard
