import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route, Switch } from  "react-router-dom";
import LinkedPage from './linked-page/linkedPage';
import PrivateRoute from './privateRoute';
import HomePage from './home-page/homePage';




function App() {
  return (
    <Router basename="/">
    <div className="App">
        <Switch>
          <PrivateRoute component={LinkedPage} path="/link" exact ></PrivateRoute>
          <Route path="/home"  >
            <HomePage></HomePage>
          </Route>
        </Switch>
      </div>
    </Router>

     
  );
}

export default App;
