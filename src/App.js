import JobListing from "./pages/JobListing";
import JobDetails from "./pages/JobDetails";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <JobListing />
          </Route>

          <Route exact path='/jobdetails' component={JobDetails}></Route>

        </Switch>
      </Router>

    </div >
  );
}

export default App;
