import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
    <div className="text-center mt-5">
        <div className="login">
          <div className="logo">
            <img className="logo" src="https://image.shutterstock.com/image-vector/mobile-application-qr-code-scanning-600w-1803698605.jpg"/>
            <div className="img1">
            </div>
          </div>
        <form>
    <div className="epw">
  <div class="form-group">
    <div className="emailCircle"></div>
    <p>Returning Users:</p>
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="emInput form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="form-group mt-3">
    <div className="pwSquare"></div>
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="pwInput form-control" id="exampleInputPassword1"/>
  </div>
  < Link to="/userhome">
<button type="submit" className="btn btn-primary mt-4">Submit</button>
</Link>
  </div>
</form>
<div className="register mt-5">
    <h3>New User? Create an Account</h3>
	<Link to="/createaccount">
    <button className="btn btn-success">Create an Account</button>
	</ Link>
</div>
</div>
</div>
);
