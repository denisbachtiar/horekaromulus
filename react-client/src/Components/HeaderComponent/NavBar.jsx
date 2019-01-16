import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
      <header>
     {/* Start Navbar */}
     <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">Horeka</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <div className="input-group input-style">
              <div className="input-group-prepend">
                <button className="btn dropdown-toggle dropdown-style" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All</button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">item</a>
                  <a className="dropdown-item" href="#">item</a>
                  <a className="dropdown-item" href="#">item</a>
                  <div role="separator" className="dropdown-divider" />
                  <a className="dropdown-item" href="#">item</a>
                  <a className="dropdown-item" href="#">item</a>
                  <a className="dropdown-item" href="#">item</a>
                </div>
              </div>
              <input type="search" className="form-control form-style" aria-label="search item" placeholder="what are you looking for...." />
              <div className="input-group-append">
                <button className="btn btn-group-text btn-group-style bg-main text-white" type="button" id="button-addon2">SEARCH</button>
              </div>
            </div>
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="#"><i className="fa fa-list-alt fa-2x" /><span className="align-top text-style">DAILY MARKET LIST</span></a>
              <a className="nav-item nav-link" href="#"><i className="fa fa-search fa-2x" aria-hidden="true" /></a>
              <a className="nav-item nav-link" href="#"><i className="fa fa-shopping-cart fa-2x" aria-hidden="true" /></a>
            </div>
            <div className="btn-group" role="group" aria-label="Basic example">
              <Link to="register" className="btn btn-register text-center">REGISTER</Link>
              <Link to="login" className="btn btn-login text-center">LOGIN</Link>
            </div>
          </div>
        </div>
      </nav>
      {/* End Navbar */}
      </header>
    )
  }
}
export default NavBar;