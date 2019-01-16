import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar';

class SearchResult extends Component {
  render() {
    return (
        <div className="box-content">

            <div className="container">
                <div className="row">
                    <SideBar />
                        <div className="col-md-8 content search-result">
                            <h3>The item you are looking for is not found</h3>
                        </div>       
                </div>


            </div>
        </div>
    )
  }
}
export default SearchResult;