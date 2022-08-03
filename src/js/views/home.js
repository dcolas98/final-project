import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
		<div className="bigDivOne d-flex justify-content-center">
    <div className="LDiv col-3"></div>
    <div className="MDiv col-6 d-flex justify-content-center">
    <form>
      <h1 className="d-flex justify-content-center" >New Account</h1>
  <div class="form-group">
    <label for="exampleInputEmail1">Full Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  
  <div class="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Confirm Email</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" class="btn btn-primary mt-2 mb-3">Create New Account</button>
</form>
</div>
<div className="RDiv col-3"></div>
</div>
);
