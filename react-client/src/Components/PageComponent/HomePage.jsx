import React, { Component } from 'react';
class HomePage extends Component {
  render() {
    return (
      
      <div>
        {/* Start Jumbotron */}
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="row white-box">
              <div className="col-3">
                <div>
                  <h4 className="jumbo-head-style">Category</h4>
                </div>
                <div className="input-group jumbo-input-style mb-3">
                  <input type="search" className="form-control form-style" placeholder="search here" aria-label aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <button className="btn btn-group-text bg-main text-white" type="button"><i className="fa fa-search" aria-hidden="true" /></button>
                  </div>
                </div>
                <div className="dropright">
                  <button type="button" className="btn btn-dropdown text-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-list-alt"></i> Beauty & Fashion
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Cosmetic</a>
                    <a className="dropdown-item" href="#">Fashion</a>
                    <a className="dropdown-item" href="#">Jewelry</a>
                  </div>
                </div>
                <div className="dropright">
                  <button type="button" className="btn btn-dropdown text-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Separated link</a>
                  </div>
                </div>
                <div className="dropright">
                  <button type="button" className="btn btn-dropdown text-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Separated link</a>
                  </div>
                </div>
                <div className="dropright">
                  <button type="button" className="btn btn-dropdown text-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Separated link</a>
                  </div>
                </div>
                <div className="dropright">
                  <button type="button" className="btn btn-dropdown text-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Separated link</a>
                  </div>
                </div>
                <div className="dropright">
                  <button type="button" className="btn btn-dropdown text-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Separated link</a>
                  </div>
                </div>
              </div>
              <div className="col-9 p-0">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block curousel-box" src="./asset/img/railway-station.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block curousel-box" src="./asset/img/train-station.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block curousel-box" src="./asset/img/departure-platform.jpg" alt="Third slide" />
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Jumbostron */}
        {/* Start Request Box */}
        <section className="bg-light" id="request-box">
          <div className="container-fluid pl-5 pr-5">
            <div className="row no-gutters white-box-2">
              <div className="col-6"> 
                <img src="./asset/img/request-img.jpeg" className="img-fluid request-image" alt="Responsive image" />
              </div>
              <div className="col-6">
                <div className="container mt-5">
                  <h2 className="text-second"><strong>One Request, Multiple qoutes</strong></h2>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group request-input-style">
                        <input type="text" className="form-control request-form-style" id aria-describedby placeholder="all category" />
                      </div>
                    </div>
                    <div className="col-6">
                      <button type="submit" className="btn request-btn-style bg-main text-white">REQUEST ORDER</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Request Box */}
        {/* Start Popular Tabs */}
        <section className="bg-light" id="popular-tab">
          <div className="container pl-5 pr-5">
            <div className="row no-gutters ">
              <div className="col mr-5">
                <h2>Popular</h2>
              </div>
              <div className="col">
                <button type="submit" className="btn btn-popular">FOOD</button>
              </div>
              <div className="col">
                <button type="submit" className="btn btn-popular">SPICE</button>
              </div>
              <div className="col">
                <button type="submit" className="btn btn-popular">KITCHEN SET</button>
              </div>
              <div className="col">
                <button type="submit" className="btn btn-popular">FURNITURE</button>
              </div>
              <div className="col">
                <button type="submit" className="btn btn-popular">ELECTRONIC</button>
              </div>
              <div className="col">
                <button type="submit" className="btn btn-popular">HEALTH</button>
              </div>
              <div className="col">
                <button type="submit" className="btn btn-popular">CLENING</button>
              </div>
              <div className="col">
                <button type="submit" className="btn btn-popular">SANITORY</button>
              </div>
            </div>
          </div>
        </section>
        {/* End Popular Tabs */}
        {/* Start Popular Items */}
        <section className="bg-light" id="popular-item">
          <div className="container-fluid pt-2 pl-5 pr-5">
            <div className="row no-gutters card-deck">
              <div className="col">
                <div className="card card-box">
                  <div className="card-body">
                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />
                    <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                    <p className="card-text text-center card-price">Rp 2.300</p>
                    <div className="text-center card-rating">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                    <p className="card-text text-center card-shop-name">Abc 1234 Shop</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-box">
                  <div className="card-body">
                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />
                    <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                    <p className="card-text text-center card-price">Rp 2.300</p>
                    <div className="text-center card-rating">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                    <p className="card-text text-center card-shop-name">Abc 1234 Shop</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-box">
                  <div className="card-body">
                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />
                    <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                    <p className="card-text text-center card-price">Rp 2.300</p>
                    <div className="text-center card-rating">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                    <p className="card-text text-center card-shop-name">Abc 1234 Shop</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-box">
                  <div className="card-body">
                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />
                    <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                    <p className="card-text text-center card-price">Rp 2.300</p>
                    <div className="text-center card-rating">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                    <p className="card-text text-center card-shop-name">Abc 1234 Shop</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-box">
                  <div className="card-body">
                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />
                    <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                    <p className="card-text text-center card-price">Rp 2.300</p>
                    <div className="text-center card-rating">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                    <p className="card-text text-center card-shop-name">Abc 1234 Shop</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-box">
                  <div className="card-body">
                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />
                    <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                    <p className="card-text text-center card-price">Rp 2.300</p>
                    <div className="text-center card-rating">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                    <p className="card-text text-center card-shop-name">Abc 1234 Shop</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Popular Items */}
        {/* Start Recomended */}
        <section className="bg-light" id="recomended">
          <div className="container-fluid pt-2 pb-2 pl-5 pr-5">
            <div className="row no-gutters ">
              <div className="col">
                <h2>Recommended For You</h2>
              </div>
            </div>
          </div>
        </section>
        {/* End Recomended */}
        {/* Start Recomended Item */}
        <section className="bg-light" id="recomended-item">
          <div className="container-fluid pt-2 pl-5 pr-5">
            <div className="row no-gutters card-deck">
              <div className="col">
                <div className="card card-box">
                  <div className="card-body">
                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />
                    <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                    <p className="card-text text-center card-price">Rp 2.300</p>
                    <div className="text-center">
                      <button type="submit" className="btn btn-buy">BUY</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-box">
                  <div className="card-body">
                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />
                    <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                    <p className="card-text text-center card-price">Rp 2.300</p>
                    <div className="text-center">
                      <button type="submit" className="btn btn-buy">BUY</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-box">
                  <div className="card-body">
                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />
                    <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                    <p className="card-text text-center card-price">Rp 2.300</p>
                    <div className="text-center">
                      <button type="submit" className="btn btn-buy">BUY</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-box">
                  <div className="card-body">
                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />
                    <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                    <p className="card-text text-center card-price">Rp 2.300</p>
                    <div className="text-center">
                      <button type="submit" className="btn btn-buy">BUY</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-box">
                  <div className="card-body">
                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />
                    <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                    <p className="card-text text-center card-price">Rp 2.300</p>
                    <div className="text-center">
                      <button type="submit" className="btn btn-buy">BUY</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row no-gutters card-deck">
              <div className="col">
                <div className="card card-box">
                  <div className="card-body">
                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />
                    <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                    <p className="card-text text-center card-price">Rp 2.300</p>
                    <div className="text-center">
                      <button type="submit" className="btn btn-buy">BUY</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-box">
                  <div className="card-body">
                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />
                    <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                    <p className="card-text text-center card-price">Rp 2.300</p>
                    <div className="text-center">
                      <button type="submit" className="btn btn-buy">BUY</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-box">
                  <div className="card-body">
                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />
                    <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                    <p className="card-text text-center card-price">Rp 2.300</p>
                    <div className="text-center">
                      <button type="submit" className="btn btn-buy">BUY</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-box">
                  <div className="card-body">
                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />
                    <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                    <p className="card-text text-center card-price">Rp 2.300</p>
                    <div className="text-center">
                      <button type="submit" className="btn btn-buy">BUY</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-box">
                  <div className="card-body">
                    <img className="card-img-top" src="./asset/img/indomie.png" alt="Card image cap" />
                    <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                    <p className="card-text text-center card-price">Rp 2.300</p>
                    <div className="text-center">
                      <button type="submit" className="btn btn-buy">BUY</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Recomended Items */}
        {/* Start Recomended */}
        <section className="bg-light" id="partner">
          <div className="container-fluid pt-2 pb-2 pl-5 pr-5">
            <div className="row no-gutters ">
              <div className="col">
                <h2>Our Partner</h2>
              </div>
            </div>
          </div>
        </section>
        {/* End Recomended */}
        {/* Start Partners */}
        <section className="bg-light" id="partner-box">
          <div className="container-fluid pt-2 pb-2 pl-5 pr-5">
            <div className="row no-gutters d-flex justify-content-center">
              <img src="./asset/img/samsung.png" alt="samsung" className="img-box" />
              <img src="./asset/img/samsung.png" alt="samsung" className="img-box" />
              <img src="./asset/img/samsung.png" alt="samsung" className="img-box" />
              <img src="./asset/img/samsung.png" alt="samsung" className="img-box" />
              <img src="./asset/img/samsung.png" alt="samsung" className="img-box" />
            </div>
          </div>
        </section>
        {/* End Partners */}
      </div>
    )
  }
}
export default HomePage;