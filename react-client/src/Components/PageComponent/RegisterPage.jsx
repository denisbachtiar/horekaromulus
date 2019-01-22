import React, { Component } from 'react';
import { StoreRegister as storeRegisterSchema } from '../../DefaultSchemas'
import * as api from '../../Utils/Apis'

const storeRegisterDefault = {...storeRegisterSchema}

class RegisterPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      storeRegister: storeRegisterDefault
    }
  }

  btnSubmit() {
    api.register(this.state.storeRegister, () => {
      
    })
  }

  render() {
    return (
      <div>
        {/* Start Register Form */}
        <section className="bg-light" id="register">
          <div className="container">
            <div className="row">
              <div className="col-5 box">
                <h5>Register</h5>
                <p className="login-text">Lorem ipsum dolor, sit amet consectetur  Ea aliquam, et quae ipsa. <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p><form>
                  <div className="form-group">
                    <label className="form-style3">First Name</label>
                    <div className="form-box">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-style3">Last Name</label>
                    <div className="form-box">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-6 text-left">
                        <label className="form-style3">Email</label>
                        <div className="form-box">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-6">
                        <label className="form-style3">Phone number</label>
                        <div className="form-box">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-style3">Password</label>
                    <div className="form-box">
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-6 text-left">
                        <label className="form-style3">Company name</label>
                        <div className="form-box">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-6">
                        <label className="form-style3">Position</label>
                        <div className="form-box">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-6 text-left">
                        <label className="form-style3">Company NPWP</label>
                        <div className="form-box">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-6">
                        <label className="form-style3">Company Phone number</label>
                        <div className="form-box">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-style3">Address</label>
                    <div className="form-box">
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-style3">Country</label>
                    <div className="form-box">
                      <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-6 text-left">
                        <label className="form-style3">Province</label>
                        <div className="form-box">
                          <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-6">
                        <label className="form-style3">City</label>
                        <div className="form-box">
                          <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-6 text-left">
                        <label className="form-style3">District</label>
                        <div className="form-box">
                          <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-6">
                        <label className="form-style3">Zipcode</label>
                        <div className="form-box">
                          <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group form-check">
                    <div className="row">
                      <div className="col-6">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-style3">Remember me</label>
                      </div>
                      <div className="col-6 text-right">
                        <a className="form-style2 text-main" href="#">Forget Password</a>
                      </div>
                    </div>
                  </div>
                  <div className="col text-center"> 
                    <button type="button" className="btn btn-form" onClick={() => this.btnSubmit()}>submit</button>
                  </div>
                  <div className="hr-style1" />
                  <div className="form-regis">
                    <small className="text-grey">if you have account, please <a className="text-second" href="#">login here</a></small>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* End Register Form */}
      </div>
    )
  }
}
export default RegisterPage;