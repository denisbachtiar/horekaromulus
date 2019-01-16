import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar';

class NotFound extends Component {
  render() {
    return (
        <div className="box-content">
            <div className="container">
                <div className="row">
                    <SideBar />
                        <div className="col-md-8 content not-found">
                                <div className="notice">
                                    <h3>The item you are looking for is not found</h3>
                                    <p>If you want to add the item you are looking foor to the category, please input it manually</p>
                                    <Link to="/add-item-manually" className="btn btn-group-text btn-group-style bg-main text-white">Add Item Manually</Link>
                                </div>
                        </div>       
                </div>
            </div> 
        </div>

      )
  }
}
export default NotFound;