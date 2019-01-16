import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
        <aside className="col-md-3 sidebar">
            <div class="form-group">
                <label for="category">Category</label>

                <div class="input-group mb-3">

                <div class="input-group-prepend">
                   </div>
                <input type="text" class="form-control" id="category" placeholder="Search"></input>
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