import React, { useState } from 'react';
import { Outlet, NavLink } from "react-router-dom";
function Header() {
  
  return (
    <>
     <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between d-md-none d-block">
                     <button className="btn px-1 py-0 open-btn me-2"><i className="fal fa-stream"></i></button>
                        <a className="navbar-brand fs-4" href="#"><span className="bg-dark rounded px-2 py-0 text-white">CL</span></a>
                       
                    </div>
                    <button className="navbar-toggler p-0 border-0" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fal fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#"><NavLink to="/">Home</NavLink></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#"><NavLink to="About">About</NavLink></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#"><NavLink to="Gallery">Gallery</NavLink></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#"><NavLink to="Career">Career</NavLink></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#"><NavLink to="Contact">Contact Us</NavLink></a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
            <Outlet />
    </>
  );
}
export default Header;