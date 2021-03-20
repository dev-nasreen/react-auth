import React from 'react';
import {Link} from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
       <>
       <div className="row">
          <div className="col-12 mx-auto ">
              <nav className="navbar navbar-expand-lg navbar-light  px-5">
                <div className="container">
                  <Link className="navbar-brand logo" to="/home">UBAR</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 menu">
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/destination">Destination</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/blog">Blog</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link" to="/login"><button className="btn login-btn">Login</button></Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
          </div>
        </div>

       </>
    );
};

export default Header;