import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css'
import LoginRoute from './component/LoginRoute'
import HomeRoute from './component/HomeRoute'
import NotFoundRoute from './component/NotFoundRoute'
import ProtectedRoute from './component/ProtectedRoute'
import JobsRoute from './component/JobsRoute'
import JobItemDetailsRoute from './component/JobItemDetailsRoute'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <div className="job_main_container">
    <Switch>
      <Route exact path="/login" component={LoginRoute} />
      <ProtectedRoute exact path="/" component={HomeRoute} />
      <ProtectedRoute exact path="/jobs" component={JobsRoute} />
      <ProtectedRoute exact path="/jobs/:id" component={JobItemDetailsRoute} />
      <Route path="/not-found" component={NotFoundRoute} />
      <Redirect to="not-found" />
    </Switch>
  </div>
)

export default App
