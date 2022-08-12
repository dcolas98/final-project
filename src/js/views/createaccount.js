import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const CreateAccount = () => (
    <><div className="bg"></div><div className="bg bg2"></div><div className="bg bg3"></div><div>
        <p> insert form here </p>
        <Link to="/userhome">
            <button type="submit" className="btn btn-primary mt-2">Submit</button>
        </Link>
    </div></>
);