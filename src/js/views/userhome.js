import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const UserHome = () => {
    return (
        <><div className="bg"></div><div className="bg bg2"></div><div className="bg bg3"></div><div>
            <Link to="/quiz">
                <button type="submit" className="btn btn-primary mt-2">Quiz 1</button>
            </Link>
        </div></>
)};