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
                        <div className="col-md-10 content search-result">

                            <div className="header-search">
                            <div className="text-search-info">Showing 175 items for "carrot" (1 - 60 of 175)</div>
        

                            <div class="d-flex justify-content-between">
                            <div className="short-by">Sort : low to high</div>

                                <button type="button" className="btn btn-success btn-main btn-sm">Select all</button>
                            </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-md-2dot4">
                                    <div className="card card-box">
                                        <input class="c-card product-list" type="checkbox" id="1" name="product-list[]" value="id"></input>
                                        <i class="fas fa-check-circle"></i>

                                        <div className="card-image">
                                            <label for="1">
                                                <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />
                                                <div class="middle">
                                                    <button class="btn btn-success btn-main" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                        View
                                                    </button>
                                                </div>     
                                            </label>
             
                                        </div>
               
 
                                        <div className="card-body">
                                            <label for="1">
                                                <h6 className="card-title">Indomie Rasa Soto</h6>
                                                <div className="text-muted small">Start from</div>
                                                <span className="card-text card-price">Rp 2.300</span><span className="text-muted small">/Ons</span>
                                                <div className="company small">CV. Citra Abadi</div>
                                                <p className="card-text text-muted smalllocation"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                                            </label>
                                        </div>
                                        <div className="overlay">
                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2dot4">
                                    <div className="card card-box">
                                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />

                                        <div className="card-body">
                                            <h6 className="card-title">Indomie Rasa Soto</h6>
                                            <div className="text-muted small">Start from</div>
                                            <span className="card-text card-price">Rp 2.300</span><span className="text-muted small">/Ons</span>
                                            <div className="company small">CV. Citra Abadi</div>
                                            <p className="card-text text-muted smalllocation"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2dot4">
                                    <div className="card card-box">
                                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />

                                        <div className="card-body">
                                            <h6 className="card-title">Indomie Rasa Soto</h6>
                                            <div className="text-muted small">Start from</div>
                                            <span className="card-text card-price">Rp 2.300</span><span className="text-muted small">/Ons</span>
                                            <div className="company small">CV. Citra Abadi</div>
                                            <p className="card-text text-muted smalllocation"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2dot4">
                                    <div className="card card-box">
                                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />

                                        <div className="card-body">
                                            <h6 className="card-title">Indomie Rasa Soto</h6>
                                            <div className="text-muted small">Start from</div>
                                            <span className="card-text card-price">Rp 2.300</span><span className="text-muted small">/Ons</span>
                                            <div className="company small">CV. Citra Abadi</div>
                                            <p className="card-text text-muted smalllocation"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2dot4">
                                    <div className="card card-box">
                                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />

                                        <div className="card-body">
                                            <h6 className="card-title">Indomie Rasa Soto</h6>
                                            <div className="text-muted small">Start from</div>
                                            <span className="card-text card-price">Rp 2.300</span><span className="text-muted small">/Ons</span>
                                            <div className="company small">CV. Citra Abadi</div>
                                            <p className="card-text text-muted smalllocation"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12 collapse" id="collapseExample">
                                        <div class="card card-box">
                                            <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div class="owl-carousel owl-theme single-product">
                                                        <div class="item"><img className="img-responsive" src="./asset/img/indomie.png" alt="Card image cap" /></div>
                                            
                                                    </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                    <div class="d-flex justify-content-between">

                                                    <h2 className="title">Indomie Rasa Soto</h2>
                                                    <span class="badge badge-light custom">Minimal Order: 20 Kg</span>

                                                    </div>
                                                            <div className="company">CV. Citra Abadi</div>
                                                            <p className="card-text text-muted location"><i class="fas fa-map-marker-alt"></i> Jl. Bukit Gading Raya, Perkantoran Gading Bukit Indah blok O No. 3-5,
                                Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14240</p>
                                                            <h5>Product Details: </h5>
                                                            <div className="product-details">
                                                            <p>Easy to grow & 90% germination rate. Emergence of seedlings about 8-10 days.
                                Sprout temperature about 18-20℃. Planting in backyards,front yards
                                raised beds or planter boxes.
                                Easy to grow & 90% germination rate. Emergence of seedlings about 8-10 days.</p>
                                                            </div>
                                                            <div class="d-flex">
                                                        
                                                                <div className="mr-auto p-2">
                                                                    <div className="text-muted small">Start from</div>
                                                                    <span className="card-text card-price">Rp 2.300</span><span className="text-muted small">/Ons</span>
                                                                </div>
                                                                <div className="p-2">
                                                                    <a href="/product" className="btn btn-success btn-secondary">View Details</a>

                                                                </div>
                                                                <div className="p-2">
                                                                <a href="#" className="btn btn-success btn-main">Add Item</a>
                                                                </div>
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                <div className="col-md-2dot4">
                                    <div className="card card-box">
                                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />

                                        <div className="card-body">
                                            <h6 className="card-title">Indomie Rasa Soto</h6>
                                            <div className="text-muted small">Start from</div>
                                            <span className="card-text card-price">Rp 2.300</span><span className="text-muted small">/Ons</span>
                                            <div className="company small">CV. Citra Abadi</div>
                                            <p className="card-text text-muted smalllocation"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2dot4">
                                    <div className="card card-box">
                                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />

                                        <div className="card-body">
                                            <h6 className="card-title">Indomie Rasa Soto</h6>
                                            <div className="text-muted small">Start from</div>
                                            <span className="card-text card-price">Rp 2.300</span><span className="text-muted small">/Ons</span>
                                            <div className="company small">CV. Citra Abadi</div>
                                            <p className="card-text text-muted smalllocation"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2dot4">
                                    <div className="card card-box">
                                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />

                                        <div className="card-body">
                                            <h6 className="card-title">Indomie Rasa Soto</h6>
                                            <div className="text-muted small">Start from</div>
                                            <span className="card-text card-price">Rp 2.300</span><span className="text-muted small">/Ons</span>
                                            <div className="company small">CV. Citra Abadi</div>
                                            <p className="card-text text-muted smalllocation"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2dot4">
                                    <div className="card card-box">
                                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />

                                        <div className="card-body">
                                            <h6 className="card-title">Indomie Rasa Soto</h6>
                                            <div className="text-muted small">Start from</div>
                                            <span className="card-text card-price">Rp 2.300</span><span className="text-muted small">/Ons</span>
                                            <div className="company small">CV. Citra Abadi</div>
                                            <p className="card-text text-muted smalllocation"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2dot4">
                                    <div className="card card-box">
                                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />

                                        <div className="card-body">
                                            <h6 className="card-title">Indomie Rasa Soto</h6>
                                            <div className="text-muted small">Start from</div>
                                            <span className="card-text card-price">Rp 2.300</span><span className="text-muted small">/Ons</span>
                                            <div className="company small">CV. Citra Abadi</div>
                                            <p className="card-text text-muted smalllocation"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2dot4">
                                    <div className="card card-box">
                                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />

                                        <div className="card-body">
                                            <h6 className="card-title">Indomie Rasa Soto</h6>
                                            <div className="text-muted small">Start from</div>
                                            <span className="card-text card-price">Rp 2.300</span><span className="text-muted small">/Ons</span>
                                            <div className="company small">CV. Citra Abadi</div>
                                            <p className="card-text text-muted smalllocation"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2dot4">
                                    <div className="card card-box">
                                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />

                                        <div className="card-body">
                                            <h6 className="card-title">Indomie Rasa Soto</h6>
                                            <div className="text-muted small">Start from</div>
                                            <span className="card-text card-price">Rp 2.300</span><span className="text-muted small">/Ons</span>
                                            <div className="company small">CV. Citra Abadi</div>
                                            <p className="card-text text-muted smalllocation"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2dot4">
                                    <div className="card card-box">
                                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />

                                        <div className="card-body">
                                            <h6 className="card-title">Indomie Rasa Soto</h6>
                                            <div className="text-muted small">Start from</div>
                                            <span className="card-text card-price">Rp 2.300</span><span className="text-muted small">/Ons</span>
                                            <div className="company small">CV. Citra Abadi</div>
                                            <p className="card-text text-muted smalllocation"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2dot4">
                                    <div className="card card-box">
                                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />

                                        <div className="card-body">
                                            <h6 className="card-title">Indomie Rasa Soto</h6>
                                            <div className="text-muted small">Start from</div>
                                            <span className="card-text card-price">Rp 2.300</span><span className="text-muted small">/Ons</span>
                                            <div className="company small">CV. Citra Abadi</div>
                                            <p className="card-text text-muted smalllocation"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2dot4">
                                    <div className="card card-box">
                                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />

                                        <div className="card-body">
                                            <h6 className="card-title">Indomie Rasa Soto</h6>
                                            <div className="text-muted small">Start from</div>
                                            <span className="card-text card-price">Rp 2.300</span><span className="text-muted small">/Ons</span>
                                            <div className="company small">CV. Citra Abadi</div>
                                            <p className="card-text text-muted smalllocation"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2dot4">
                                    <div className="card card-box">
                                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />

                                        <div className="card-body">
                                            <h6 className="card-title">Indomie Rasa Soto</h6>
                                            <div className="text-muted small">Start from</div>
                                            <span className="card-text card-price">Rp 2.300</span><span className="text-muted small">/Ons</span>
                                            <div className="company small">CV. Citra Abadi</div>
                                            <p className="card-text text-muted smalllocation"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2dot4">
                                    <div className="card card-box">
                                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />

                                        <div className="card-body">
                                            <h6 className="card-title">Indomie Rasa Soto</h6>
                                            <div className="text-muted small">Start from</div>
                                            <span className="card-text card-price">Rp 2.300</span><span className="text-muted small">/Ons</span>
                                            <div className="company small">CV. Citra Abadi</div>
                                            <p className="card-text text-muted smalllocation"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2dot4">
                                    <div className="card card-box">
                                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />

                                        <div className="card-body">
                                            <h6 className="card-title">Indomie Rasa Soto</h6>
                                            <div className="text-muted small">Start from</div>
                                            <span className="card-text card-price">Rp 2.300</span><span className="text-muted small">/Ons</span>
                                            <div className="company small">CV. Citra Abadi</div>
                                            <p className="card-text text-muted smalllocation"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2dot4">
                                    <div className="card card-box">
                                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />

                                        <div className="card-body">
                                            <h6 className="card-title">Indomie Rasa Soto</h6>
                                            <div className="text-muted small">Start from</div>
                                            <span className="card-text card-price">Rp 2.300</span><span className="text-muted small">/Ons</span>
                                            <div className="company small">CV. Citra Abadi</div>
                                            <p className="card-text text-muted smalllocation"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="box-action m-3" >
                                <div class="d-flex justify-content-center">
                                <form action="" method="get">
                                    <button type="button" id="cancel_all" className="btn btn-secondary mr-2">Cancel All</button>
                                </form>
                                <form action="" method="get">
                                    <button type="button" id="add_item" className="btn bg-main">Add Item</button>
                                </form>
                               
                                </div>
                            </div>
                            

                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-center">
                                    <li class="page-item disabled">
                                    <a class="page-link" href="#" tabindex="-1">Previous</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                    <a class="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="selected-item">
                                <div className="header-search">
                                    <div className="text-search-info"><strong>Selected Item</strong></div>
                
                                </div>
                                <div className="row no-gutters">
                                    <div className="col-md-2dot4">
                                        <div className="card card-box">
                                            <input class="c-card product-list" type="checkbox" id="1" name="product-list[]" value="id"></input>
                                            <i class="fas fa-check-circle"></i>

                                            <div className="card-image">
                                                <label for="1">
                                                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />
                                                    <div class="middle">
                                                        <button class="btn btn-success btn-main" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                            View
                                                        </button>
                                                    </div>     
                                                </label>
                
                                            </div>
                
    
                                            <div className="card-body">
                                                <label for="1">
                                                    <h6 className="card-title">Indomie Rasa Soto</h6>
                                                    <div className="text-muted small">Start from</div>
                                                    <span className="card-text card-price">Rp 2.300</span><span className="text-muted small">/Ons</span>
                                                    <div className="company small">CV. Citra Abadi</div>
                                                    <p className="card-text text-muted smalllocation"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                                                </label>
                                            </div>
                                            <div className="overlay">
                                            
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="box-action" >
                                    <div class="justify-content-left">
                               
                                    <form action="/quotation-request" method="get">
                                        <button type="submit" id="send_to_cart" className="btn bg-main">Send to Cart</button>
                                    </form>
                                
                                    </div>
                                </div>
                            </div>       
                </div>


            </div>
        </div>
    )
  }
}
export default SearchResult;