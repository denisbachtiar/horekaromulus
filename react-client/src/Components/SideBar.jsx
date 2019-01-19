import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
        <aside className="col-md-2 sidebar">
            <div class="form-group">
                <label for="category">Category</label>
                <div className="category-nav-box">
                    <div class="input-group">
                        <input type="text" class="form-control" id="category" placeholder="Search"></input>
                    </div>

                    <nav class="navbar navbar-inverse" id="category-nav" role="navigation">
                        <ul class="nav sidebar-nav">
    
                            <li>
                                <a href="#">Agriculture & Food</a>
                            </li>
                            <li>
                                <a href="#">Automotive</a>
                            </li>
                            <li>
                                <a href="#">Beauty & Fashion</a>
                            </li>
                            <li>
                                <a href="#">Computer</a>
                            </li>
                            <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Electronics <span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="#">Coffee</a></li>
                                <li><a href="#">Drinking Water</a></li>
                                <li><a href="#">Egg Product</a></li>
                                <li>
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Vegetable <span class="caret"></span></a>
                                    <ul class="dropdown-menu" role="menu">
                                        <li><a href="#">Coffee</a></li>
                                        <li><a href="#">Drinking Water</a></li>
                                        <li><a href="#">Egg Product</a></li>
                                        <li><a href="#">Vegetable</a></li>
                                    </ul>
                                </li>
                            </ul>
                            </li>
                            <li>
                                <a href="#">Furnitures</a>
                            </li>
                            <li>
                                <a href="#">Health</a>
                            </li>
                            <li>
                                <a href="https://twitter.com/maridlcrmn">Follow me</a>
                            </li>
                        </ul>
                    </nav>               
                </div>







            </div>
            <div class="form-group">
                <label for="max_budget">Max Budget</label>

                <div class="input-group mb-3">

                <div class="input-group-prepend">
                <select class="input-group-text" id="inputGroupSelect01">
                        <option selected value="idr">IDR</option>
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                    </select>                </div>
                <input type="text" class="form-control" id="max_budget" placeholder=""></input>
                </div>
            </div>
            <div class="form-group">
                <label for="min_budget">Min Budget</label>

                <div class="input-group mb-3">

                <div class="input-group-prepend">
                <select class="input-group-text" id="inputGroupSelect01">
                        <option selected value="idr">IDR</option>
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                    </select>                </div>
                <input type="text" class="form-control" id="min_budget" placeholder=""></input>
                </div>
            </div>

            <div class="form-group">
                <label for="Location1">Location</label>
                <select class="custom-select" id="inputGroupSelect01">
                        <option selected value="idr">Jakarta</option>
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                    </select>            </div>
        </aside>
    )
  }
}
export default NavBar;