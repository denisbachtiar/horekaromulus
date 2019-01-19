import React, { Component } from 'react';
class QuotationRequest extends Component {
  render() {
    return (    
            <section id="quotation">
            <div className="container">
                <h1 className="title text-center"><i className="fa fa-list-alt"></i> Quotation Request</h1>
                    <div className="table-action">
                        <div class="row no-gutters">
                            <div className="col-md-1">
                                <label className="p-2"><input type="checkbox" name="checkbox" className="mr-2" value="value" /> Select all</label>

                            </div>
                            <div className="col-md-1">
                                <div className="p-2"><i className="fas fa-trash-alt mr-2"></i> <a href="#">Delete</a></div>

                            </div>
                            <div className="col-md-3">
                                
                                <div class="input-group mb-3">
                                    <span className="p-2">Quation Date</span>
                                    <input type="text" className="form-control" placeholder="11/11/2018" aria-label="11/11/2018" aria-describedby="basic-addon2" />
                                    <div class="input-group-append">
                                        <span className="input-group-text" id="basic-addon2"><i className="fas fa-calendar-alt"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="input-group mb-3">
                                    <span className="p-2">Delivery Date</span>
                                    <input type="text" className="form-control" placeholder="11/11/2018" aria-label="11/11/2018" aria-describedby="basic-addon2" />
                                    <div class="input-group-append">
                                        <span className="input-group-text" id="basic-addon2"><i className="fas fa-calendar-alt"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col text-right">
                                <a href="#" className="btn btn-main">Add Item</a>
                            </div>

                        </div>
                    </div>
                    <div className="head-table">       
                        <label className="p-2"><input type="checkbox" name="checkbox" className="mr-2" value="value" /> <span className="title-product">Carrot - Vegetable</span></label>
                    </div>

                    <table class="table table-light">
                    <thead>
                        <tr>
                        <th scope="col"></th>
                        <th scope="col">No</th>
                        <th scope="col">Item</th>
                        <th scope="col">Details</th>
                        <th scope="col">Category</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Delivery Unit</th>
                        <th scope="col">Special Note</th>
                        <th scope="col">Start From</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><input type="checkbox" name="checkbox" value="value" /></td>
                        <th scope="row">1</th>
                        <td><img className="img-thumb" src="./asset/img/indomie.png" alt="Card image cap" /></td>
                        <td>
                              <a href="/product" className="card-title">Indomie Rasa Soto</a>
                              <div className="company small">CV. Citra Abadi</div>
                              <p className="card-text text-muted small location"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                        </td>
                        <td>Agriculture & Food</td>
                        <td>
                     
                                <select class="form-control">
                                    <option selected value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            
                                 
                            
                        <small className="text-muted">*minimal order 20kg</small>
                        </td>
                        <td>
                        <select class="form-control">
                                    <option selected value="kg">kg</option>
                                    <option value="g">g</option>
                                    <option value="t">dus</option>
                                </select>   
                            
                                 
                            
                        </td>
                        <td>
                            <textarea id="specialnote[]" class="form-control" rows="3">
                                As soon as possible
                            </textarea>
                        </td>
                        <td>
                            <span className="startform">Rp. 2.500</span><small class="text-muted">/ons</small>
                        </td>
                        </tr>
                        <tr>
                        <td><input type="checkbox" /></td>
                        <th scope="row">2</th>
                        <td><img className="img-thumb" src="./asset/img/indomie.png" alt="Card image cap" /></td>
                        <td>
                        <a href="/product" className="card-title">Indomie Rasa Soto</a>
                              <div className="company small">CV. Citra Abadi</div>
                              <p className="card-text text-muted small location"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                        </td>
                        <td>Agriculture & Food</td>
                        <td>
                            <select class="form-control">
                                <option value="1">1</option>
                                <option selected value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        <small className="text-muted">*minimal order 20kg</small>
                        </td>
                        <td>
                            <select class="form-control">
                                <option selected value="kg">kg</option>
                                <option value="g">g</option>
                                <option value="t">dus</option>
                            </select>      
                        </td>
                        <td>
                            <textarea id="specialnote[]" class="form-control" rows="3">
                                As soon as possible
                            </textarea>
                        </td>
                        <td>
                            <span className="startform">Rp. 7.800</span><small class="text-muted">/ons</small>
                        </td>
                        </tr>
                        <tr>
                        <td><input type="checkbox" /></td>
                        <th scope="row">3</th>
                        <td><img className="img-thumb" src="./asset/img/indomie.png" alt="Card image cap" /></td>
                        <td>
                            <a href="/product" className="card-title">Indomie Rasa Soto</a>
                              <div className="company small">CV. Citra Abadi</div>
                              <p className="card-text text-muted small location"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                        </td>
                        <td>Agriculture & Food</td>
                        <td>
                     
                                <select class="form-control">
                                    <option selected value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            
                                 
                            
                        <small className="text-muted">*minimal order 20kg</small>
                        </td>
                        <td>
                        <select class="form-control">
                                    <option selected value="kg">kg</option>
                                    <option value="g">g</option>
                                    <option value="t">dus</option>
                                </select>   
                            
                                 
                            
                        </td>
                        <td>
                            <textarea id="specialnote[]" class="form-control" rows="3">
                                As soon as possible
                            </textarea>
                        </td>
                        <td>
                            <span className="startform">Rp. 2.000</span><small class="text-muted">/ons</small>
                        </td>
                        </tr>

                    </tbody>
                </table>
                    <div className="head-table">       
                        <label className="p-2"><input type="checkbox" name="checkbox" className="mr-2" value="value" /> <span className="title-product">Carrot - Vegetable</span></label>
                    </div>

                    <table class="table table-light">
                    <thead>
                        <tr>
                        <th scope="col"></th>
                        <th scope="col">No</th>
                        <th scope="col">Item</th>
                        <th scope="col">Details</th>
                        <th scope="col">Category</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Delivery Unit</th>
                        <th scope="col">Special Note</th>
                        <th scope="col">Start From</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><input type="checkbox" name="checkbox" value="value" /></td>
                        <th scope="row">1</th>
                        <td><img className="img-thumb" src="./asset/img/indomie.png" alt="Card image cap" /></td>
                        <td>
                              <a href="/product" className="card-title">Indomie Rasa Soto</a>
                              <div className="company small">CV. Citra Abadi</div>
                              <p className="card-text text-muted small location"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                        </td>
                        <td>Agriculture & Food</td>
                        <td>
                     
                                <select class="form-control">
                                    <option selected value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            
                                 
                            
                        <small className="text-muted">*minimal order 20kg</small>
                        </td>
                        <td>
                        <select class="form-control">
                                    <option selected value="kg">kg</option>
                                    <option value="g">g</option>
                                    <option value="t">dus</option>
                                </select>   
                            
                                 
                            
                        </td>
                        <td>
                            <textarea id="specialnote[]" class="form-control" rows="3">
                                As soon as possible
                            </textarea>
                        </td>
                        <td>
                            <span className="startform">Rp. 2.500</span><small class="text-muted">/ons</small>
                        </td>
                        </tr>
                        <tr>
                        <td><input type="checkbox" /></td>
                        <th scope="row">2</th>
                        <td><img className="img-thumb" src="./asset/img/indomie.png" alt="Card image cap" /></td>
                        <td>
                        <a href="/product" className="card-title">Indomie Rasa Soto</a>
                              <div className="company small">CV. Citra Abadi</div>
                              <p className="card-text text-muted small location"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                        </td>
                        <td>Agriculture & Food</td>
                        <td>
                            <select class="form-control">
                                <option value="1">1</option>
                                <option selected value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        <small className="text-muted">*minimal order 20kg</small>
                        </td>
                        <td>
                            <select class="form-control">
                                <option selected value="kg">kg</option>
                                <option value="g">g</option>
                                <option value="t">dus</option>
                            </select>      
                        </td>
                        <td>
                            <textarea id="specialnote[]" class="form-control" rows="3">
                                As soon as possible
                            </textarea>
                        </td>
                        <td>
                            <span className="startform">Rp. 7.800</span><small class="text-muted">/ons</small>
                        </td>
                        </tr>
                        <tr>
                        <td><input type="checkbox" /></td>
                        <th scope="row">3</th>
                        <td><img className="img-thumb" src="./asset/img/indomie.png" alt="Card image cap" /></td>
                        <td>
                            <a href="/product" className="card-title">Indomie Rasa Soto</a>
                              <div className="company small">CV. Citra Abadi</div>
                              <p className="card-text text-muted small location"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                        </td>
                        <td>Agriculture & Food</td>
                        <td>
                     
                                <select class="form-control">
                                    <option selected value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            
                                 
                            
                        <small className="text-muted">*minimal order 20kg</small>
                        </td>
                        <td>
                        <select class="form-control">
                                    <option selected value="kg">kg</option>
                                    <option value="g">g</option>
                                    <option value="t">dus</option>
                                </select>   
                            
                                 
                            
                        </td>
                        <td>
                            <textarea id="specialnote[]" class="form-control" rows="3">
                                As soon as possible
                            </textarea>
                        </td>
                        <td>
                            <span className="startform">Rp. 2.000</span><small class="text-muted">/ons</small>
                        </td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div class="d-flex justify-content-center">
                <a href="/" className="btn btn-dark m-2">Back</a>
                <a href="/summary-request" className="btn btn-main m-2">Next</a>
            </div>

            
            </section>
        )
    }
}
export default QuotationRequest;