import React, { Component } from 'react';
import SideBar from '../SideBar';

class DMLPreviewPage extends Component {
  render() {
    return (    
<section id="quotation">
    <div className="container">
        <div className="row">
            <SideBar />
            <div className="col-md-10">
                <div className="content dml">
                <h3 className="title">Item from Contact List</h3>
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
                                <th scope="col">Supplier</th>
                                <th scope="col">Unit Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td><img className="img-thumb" src="./asset/img/indomie.png" alt="Card image cap" /></td>
                                <td>
                                    <a href="/product" className="card-title">Indomie Rasa Soto</a>
                                </td>
                                <td>Klontong Store</td>
                                <td>Agriculture & Food</td>


                                <td>
                                    <span className="startform">Rp. 2.500</span><small className="text-muted">/ons</small>
                                </td>
                                <td>
                                    <button className="btn btn-sm bg-second mr-2">View</button>
                                    <button className="btn btn-sm bg-main" data-toggle="modal" data-target="#exampleModalCenter">Add
                                        to DML</button>
                                </td>
                            </tr>
                            <tr>

                                <td><img className="img-thumb" src="./asset/img/indomie.png" alt="Card image cap" /></td>
                                <td>
                                    <a href="/product" className="card-title">Indomie Rasa Soto</a>

                                </td>
                                <td>Klontong Store</td>
                                <td>Agriculture & Food</td>


                                <td>
                                    <span className="startform">Rp. 7.800</span><small className="text-muted">/ons</small>
                                </td>
                                <td>
                                    <button className="btn btn-sm bg-second mr-2">View</button>
                                    <button className="btn btn-sm bg-main">Add to DML</button>
                                </td>
                            </tr>
                            <tr>

                                <td><img className="img-thumb" src="./asset/img/indomie.png" alt="Card image cap" /></td>
                                <td>
                                    <a href="/product" className="card-title">Indomie Rasa Soto</a>

                                </td>
                                <td>Klontong Store</td>

                                <td>Agriculture & Food</td>


                                <td>
                                    <span className="startform">Rp. 2.000</span><small className="text-muted">/ons</small>
                                </td>
                                <td>
                                    <button className="btn btn-sm bg-second mr-2">View</button>
                                    <button className="btn btn-sm bg-main">Add to DML</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div>


            </div>
        </div>
    </div>

    <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Add to DML</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form action="" method="get">
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Departement</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>F & B</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Item Description</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>Carrot Vegetable</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label className="form-check-label" for="defaultCheck1">
                                Set item as Premary Item
                            </label>
                        </div>
                      
                    </form>
                </div>
                <div className="modal-footer">
                <form action="/dml-summary" method="get">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Back</button>
                    <button type="submit" className="btn btn-primary bg-main">Add to DML</button>
                </form>
                  
                </div>
            </div>
        </div>
    </div>
</section>
        )
    }
}
export default DMLPreviewPage;