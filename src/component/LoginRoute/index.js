import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    isTrue: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, showSubmitError: true})
  }

  changeUserName = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  changecheckBox = () => {
    this.setState(prevState => ({isTrue: !prevState.isTrue}))
  }

  submittingForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    // console.log(response)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, isTrue, showSubmitError, errorMsg} = this.state
    console.log(isTrue)
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="bg_container_loginPage">
        <form onSubmit={this.submittingForm} className="form_container">
          <img
            className="login_logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />

          <label htmlFor="username" className="label_heading">
            USERNAME
          </label>
          <input
            id="username"
            onChange={this.changeUserName}
            value={username}
            type="text"
            className="input_value"
            placeholder="Username"
          />
          <label htmlFor="password" className="label_heading">
            Password
          </label>
          <input
            id="password"
            onChange={this.changePassword}
            type={isTrue ? 'text' : 'password'}
            value={password}
            className="input_value"
            placeholder="Password"
          />

          <div className="checkbox_container">
            <input onChange={this.changecheckBox} type="checkbox" />
            <p className="check">Show Password</p>
          </div>
          <button type="submit" className="login_button">
            Login
          </button>
          {showSubmitError && <p className="error_message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginRoute
