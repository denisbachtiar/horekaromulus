import React, { Component } from 'react';
class LoginPage extends Component {
  render() {
    return (
      <div>
{/* Start Login Form */}
<section className="bg-light" id="login">
  <div className="container">
    <div className="row">
      <div className="col-5 box">
        <h5>Login</h5>
        <p className="login-text">Lorem ipsum dolor, sit amet consectetur  Ea aliquam, et quae ipsa. <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p><form>
        <div className="form-group">

          <div className="btn-group btn-group-toggle" data-toggle="buttons">

            <label className="btn btn-secondary active">
              <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> BUYER
            </label>
            <label className="btn btn-secondary">
              <input type="radio" name="options" id="option2" autoComplete="off" /> SELLER
            </label>
          </div>

        </div>
          <div className="form-group">
            <label className="form-style3">Username or email</label>
            <div className="form-box">
              <input type="email" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <label className="form-style3">Password</label>
            <div className="form-box">
              <input type="password" className="form-control" />
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
            <button type="submit" className="btn btn-form">login</button>
          </div>
          <div className="hr-style1" />
          <div className="form-regis">
            <small className="text-grey">if you doesn't have a account please <a className="text-second" href="#">register here</a></small>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
{/* End Login Form */}

      </div>
    )
  }
}
export default LoginPage;