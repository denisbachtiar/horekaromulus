import React, { Component } from 'react';
class SummaryQuotation extends Component {
  render() {
    return (    
            <section id="quotation">
            <div className="container">
                <h1 className="title text-center pb-2"><i className="fa fa-list-alt"></i> Quotation Request</h1>
             
                    <div className="head-table">  
                        <a href="#" className="p-2 font-weight-bold">CV. Citra Abadi</a>(1 item) |    
                        <label className="p-2">Item Description: <span className="title-product">Carrot - Vegetable</span></label>
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
                              <p className="card-text text-muted small location"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                        </td>
                        <td>Agriculture & Food</td>
                        <td>20</td>
                        <td>kg</td>
                        <td className="special-note">Lorem Ipsum is simply dummy text
of the printing and typesetting
industry. Lorem Ipsum has been
the industry's standard dummy
                        </td>
                        <td>
                            <span className="startform">Rp. 2.500</span><small class="text-muted">/ons</small>
                        </td>
                        </tr>
                     

                    </tbody>
                </table>
                <div className="box-form">
                    <div class="d-flex justify-content-center">
                        <form className="form-quotation">
                            <div class="form-group">
                                <label for="quotation">Quotation Date</label>
                                <input type="text" className="form-control" placeholder="11/11/2018" aria-label="11/11/2018" aria-describedby="basic-addon2" />
                            </div>
                            <div class="form-group">
                                <label for="delivery">Delivery Date</label>
                                <input type="text" className="form-control" placeholder="11/11/2018" aria-label="11/11/2018" aria-describedby="basic-addon2" />
                            </div>
                            <div class="form-group">
                                <label for="delivery">Description</label>
                                <textarea className="form-control" row="10">

                                </textarea>
                            </div>
                        </form>               
                    </div>
                    <div class="d-flex justify-content-center">
                        <a href="/quotation-request" className="btn btn-dark m-2">Back</a>
                        <a href="#" className="btn btn-main m-2">Send Quotation</a>
                    </div>
                </div>
            </div>
   

            
            </section>
        )
    }
}
export default SummaryQuotation;