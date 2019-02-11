import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar';
class CategoryPage extends Component {
  render() {
    return (
        <div className="box-content">

            <div className="container">
                <div className="row">
                    <SideBar />
                        <div className="col-md-10 content search-result">

                            <div className="header-search">
                                <div className="text-search-info">Show all categories</div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-md-2dot4">
                                    <div className="card card-box">
                                    <div className="card-image">
                                        <img className="card-img-top" src="./asset/img/agriculture-food.jpeg" alt="Card image cap" />
                                        <div class="middle">
                                            <a class="btn btn-success btn-main" href="/search">
                                                View
                                            </a>
                                        </div>                  
                                    </div>
               
 
                                        <div className="card-body">
                                            <h6 className="card-title">Agriculture & Food</h6>

                                        </div>
                                    </div>
                                </div>
         
                            </div>
 
                        </div>       
                </div>


            </div>
        </div>
    )
  }
}
export default CategoryPage;