import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './PageComponent/HomePage';
import LoginPage from './PageComponent/LoginPage';
import RegisterPage from './PageComponent/RegisterPage';
import SearchResult from './PageComponent/SearchResult';
import NotFound from './PageComponent/NotFound';
import NavBar from './HeaderComponent/NavBar';
import Footer from './Footer';
class App extends Component {
  render() {
    return (
      <Router>
        <div class={browserHistory}>
          <NavBar />
            <div className="wrapper">
                <Route name="home" exact path="/" component={HomePage} />
                <Route name="login" exact path="/login" component={LoginPage} />
                <Route name="register" exact path="/register" component={RegisterPage} />

                <Route name="search" exact path="/search" component={SearchResult} />
                <Route name="404" exact path="/404" component={NotFound} />
            </div>
            <Footer />     

        </div>
      </Router>
    )
  }
}
export default App;