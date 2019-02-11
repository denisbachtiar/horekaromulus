import React, { Component } from 'react';
import SideBar from '../SideBar';

class DMLSummaryPage extends Component {
  render() {
    return (    
<section id="quotation">
    <div className="container">
        <div className="row">
            <SideBar />
            <div className="col-md-10">
                <div className="content dml">
                    <h3 className="title">Daily Market List</h3>
                    <div className="table-action">
                        <div className="d-flex flex-row">
                            <div className="p-2">
                                <select className="custom-select">
                                    <option selected>Newest</option>
                                    <option value="1">Oldest</option>
                                    <option value="2">Price</option>
                                </select>
                            </div>
                            <div className="p-2">
                                <select className="custom-select">
                                    <option selected>All Category</option>
                                    <option value="1">Agriculture & Food</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="p-2">
                                <select className="custom-select">
                                    <option selected>All Seller</option>
                                    <option value="1">Klontong Store</option>
                                    <option value="2">Toko David</option>
                                    <option value="3">Kaki LIma</option>
                                </select>
                            </div>
                        </div>
                    </div>


                    <table className="table table-light">
                        <thead>
                            <tr>
                                <th scope="col">Item</th>
                                <th scope="col">Details</th>
                                <th scope="col">Category</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Del Unit</th>
                                <th scope="col">Supplier</th>
                                <th scope="col">Unit Price</th>
                                <th scope="col">Sub Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td><img className="img-thumb" src="./asset/img/indomie.png" alt="Card image cap" /></td>
                                <td>
                                    <a href="/product" className="card-title">Indomie Rasa Soto</a>
                                </td>
                                <td>Agriculture & Food</td>

                                <td>
                                    <select class="form-control">
                                        <option selected>10</option>
                                        <option>20</option>
                                        <option>30</option>
                                    </select>
                                </td>
                                <td>
                                    <select class="form-control">
                                        <option selected value="kg">kg</option>
                                        <option value="g">g</option>
                                        <option value="t">dus</option>
                                    </select>
                                </td>
                                <td>Klontong Store</td>


                                <td>
                                    <span className="startform">Rp. 2.500</span>
                                </td>
                                <td>
                                    <span className="startform">Rp. 25.000</span>
                                </td>
                      
                            </tr>
                            <tr>

                                <td><img className="img-thumb" src="./asset/img/indomie.png" alt="Card image cap" /></td>
                                <td>
                                    <a href="/product" className="card-title">Indomie Rasa Soto</a>

                                </td>
                                <td>Agriculture & Food</td>

                                <td>
                                    <select class="form-control">
                                        <option selected>10</option>
                                        <option>20</option>
                                        <option>30</option>
                                    </select>
                                </td>
                                <td>
                                    <select class="form-control">
                                        <option selected value="kg">kg</option>
                                        <option value="g">g</option>
                                        <option value="t">dus</option>
                                    </select>
                                </td>
                                <td>Klontong Store</td>


                                <td>
                                    <span className="startform">Rp. 7.800</span>
                                </td>
                                <td>
                                    <span className="startform">Rp. 78.000</span>
                                </td>
                    
                            </tr>
                            <tr>

                                <td><img className="img-thumb" src="./asset/img/indomie.png" alt="Card image cap" /></td>
                                <td>
                                    <a href="/product" className="card-title">Indomie Rasa Soto</a>

                                </td>
                                <td>Agriculture & Food</td>

                                <td>
                                    <select class="form-control">
                                        <option selected>10</option>
                                        <option>20</option>
                                        <option>30</option>
                                    </select>
                                </td>
                                <td>
                                    <select class="form-control">
                                        <option selected value="kg">kg</option>
                                        <option value="g">g</option>
                                        <option value="t">dus</option>
                                    </select>
                                </td>
                                <td>Klontong Store</td>



                                <td>
                                    <span className="startform">Rp. 2.000</span>
                                </td>
                                <td>
                                    <span className="startform">Rp. 20.000</span>
                                </td>
                        
                            </tr>
                           
                        </tbody>
                    </table>
                            <div class="d-flex justify-content-end">
                                <span className="total-price bg-light p-2">Rp. 540.000</span>

                            </div>
                    <div class="d-flex justify-content-center">
                        <a href="#" class="btn btn-main m-2">Order Now</a>
                    </div>
                </div>


            </div>
        </div>
    </div>


</section>
        )
    }
}
export default DMLSummaryPage;