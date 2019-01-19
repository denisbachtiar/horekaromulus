import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar';
class ProductPage extends Component {
  render() {
    return (
      <div className="box-content">

        <div className="container">

            <div className="row">

                <div className="col-md-12 content product mb-4">
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

                              <div className="text-muted small">Start from</div>
                              <div className="mb-2">
                                <span className="card-text product-price">Rp 2.300</span><span className="text-muted small">/Ons</span>
                              </div>
                              <div className="company">CV. Citra Abadi</div>
                              <p className="card-text text-muted location"><i class="fas fa-map-marker-alt"></i> Jl. Bukit Gading Raya, Perkantoran Gading Bukit Indah blok O No. 3-5,
Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14240</p>
                              <h5>Item Details: </h5>
                              <p>Easy to grow & 90% germination rate. Emergence of seedlings about 8-10 days.
Sprout temperature about 18-20℃. Planting in backyards,front yards
raised beds or planter boxes.
Easy to grow & 90% germination rate. Emergence of seedlings about 8-10 days.</p>
                              <button type="button" className="btn btn-success btn-main">Add Item</button>
                    </div>
                  </div>
                </div>

            </div>
            <h3>Item Similar</h3>
            <div className="row no-gutters">
                  <div className="col-md-2">
                      <div className="card card-box">
                      <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />

                          <div className="card-body">
                              <h6 className="card-title">Indomie Rasa Soto</h6>
                              <div className="text-muted small">Start from</div>
                              <span className="card-text card-price">Rp 2.300</span><span className="text-muted small">/Ons</span>
                              <div className="company small">CV. Citra Abadi</div>
                              <p className="card-text text-muted small location"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-2">
                      <div className="card card-box">
                      <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />

                          <div className="card-body">
                              <h6 className="card-title">Indomie Rasa Soto</h6>
                              <div className="text-muted small">Start from</div>
                              <span className="card-text card-price">Rp 2.300</span><span className="text-muted small">/Ons</span>
                              <div className="company small">CV. Citra Abadi</div>
                              <p className="card-text text-muted small location"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-2">
                      <div className="card card-box">
                      <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />

                          <div className="card-body">
                              <h6 className="card-title">Indomie Rasa Soto</h6>
                              <div className="text-muted small">Start from</div>
                              <span className="card-text card-price">Rp 2.300</span><span className="text-muted small">/Ons</span>
                              <div className="company small">CV. Citra Abadi</div>
                              <p className="card-text text-muted small location"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-2">
                      <div className="card card-box">
                      <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />

                          <div className="card-body">
                              <h6 className="card-title">Indomie Rasa Soto</h6>
                              <div className="text-muted small">Start from</div>
                              <span className="card-text card-price">Rp 2.300</span><span className="text-muted small">/Ons</span>
                              <div className="company small">CV. Citra Abadi</div>
                              <p className="card-text text-muted small location"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-2">
                      <div className="card card-box">
                      <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />

                          <div className="card-body">
                              <h6 className="card-title">Indomie Rasa Soto</h6>
                              <div className="text-muted small">Start from</div>
                              <span className="card-text card-price">Rp 2.300</span><span className="text-muted small">/Ons</span>
                              <div className="company small">CV. Citra Abadi</div>
                              <p className="card-text text-muted small location"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-2">
                      <div className="card card-box">
                      <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />

                          <div className="card-body">
                              <h6 className="card-title">Indomie Rasa Soto</h6>
                              <div className="text-muted small">Start from</div>
                              <span className="card-text card-price">Rp 2.300</span><span className="text-muted small">/Ons</span>
                              <div className="company small">CV. Citra Abadi</div>
                              <p className="card-text text-muted small location"><i class="fas fa-map-marker-alt"></i> Jakarta</p>
                          </div>
                      </div>
                  </div>
                </div>
        </div>

      </div>
    )
  }
}
export default ProductPage;