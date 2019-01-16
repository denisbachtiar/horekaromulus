import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './PageComponent/HomePage';
import LoginPage from './PageComponent/LoginPage';
import RegisterPage from './PageComponent/RegisterPage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './Footer';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="login" exact path="/login" component={LoginPage} />
          <Route name="register" exact path="/register" component={RegisterPage} />
          <Footer />
        </div>
      </Router>
    )
  }
}
export default App;