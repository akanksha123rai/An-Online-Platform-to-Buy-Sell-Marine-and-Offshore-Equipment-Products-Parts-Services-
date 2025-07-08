
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";


function Header () {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <header class="d-none d-sm-block ">
                <div class="tophead">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 col-4 d-flex">
                            <Link to="/Login"><button type="button" class="btn  login-btn mr-3">Login</button></Link> 
                            <Link to="/Register"> <button type="button" class="btn  login-btn mr-2 mr-lg-4">Register</button></Link>
                            <Link to="/MyWishlist"> <i class="fa-regular fa-heart wish-icon "  ></i> </Link>
                            </div>
                            <div class="col-md-6 text-center col-6">
                                <ul class="tophead-right ">
                                    <li> <Link to="/ContactUs"> Contacts Us</Link></li>
                                    <li> <Link to="/Blogs"> Blogs </Link></li>
                                    <li class="showhim" > <Link to="/"> Our Services
                                     {/* <img src="images/arrow-down.png" alt="" /> */}
                                     <i class="fa fa-angle-down down-arrowicon" aria-hidden="true"></i>
                                      </Link>
                                        <div class="showme">
                                            <div class="row">
                                                <div class="col">
                                                    <div class="hover-boxcontent">
                                                        <div class="maintitle">
                                                            <h5>Search & Connect to Seller</h5>
                                                            <div class="heading-seperator"><span></span></div>
                                                        </div>
                                                        <ul>
                                                            <li><a href="#">Maintenance and Support </a></li>
                                                            <li><a href="#">Offshore</a></li>
                                                            <li><a href="#">Luxury</a></li>
                                                            <li><a href="#"></a></li>
                                                            <li><a href="#">Maintenance and Support Services</a></li>
                                                        </ul>
                                                    </div>

                                                </div>
                                                <div class="col">
                                                    <div class="hover-boxcontent">
                                                        <div class="maintitle">
                                                            <h5>Sell Equipments, Product & Parts</h5>
                                                            <div class="heading-seperator"><span></span></div>
                                                        </div>
                                                        <ul>
                                                            <li><a href="#">Marine Vessels</a></li>
                                                            <li><a href="#">Offshore Equipment</a></li>
                                                            <li><a href="#">Luxury Vessels </a></li>
                                                            <li><a href="#">Marine & OffshoreSpares</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="hover-boxcontent">
                                                        <div class="maintitle">
                                                            <h5>Sell Maintenance & Support Services</h5>
                                                            <div class="heading-seperator"><span></span></div>
                                                        </div>
                                                        <ul>
                                                            <li><a href="#">Reconditioning Services</a></li>
                                                            <li><a href="#">Product Support Services</a></li>
                                                            <li><a href="#">Logistic Support Services</a></li>
                                                            <li><a href="#">Maintainance Support Services</a></li>
                                                            <li><a href="#">Finance Support Services</a></li>
                                                        </ul>
                                                    </div>

                                                </div>
                                                <div class="col">
                                                    <div class="hover-boxcontent">
                                                        <div class="maintitle">
                                                            <h5>Rental Equipment <br /> Listing</h5>
                                                            <div class="heading-seperator"><span></span></div>
                                                        </div>

                                                    </div>

                                                </div>
                                                <div class="col">
                                                    <div class="hover-boxcontent">
                                                        <div class="maintitle">
                                                            <h5>Advertise Product &  Businesses</h5>
                                                            <div class="heading-seperator"><span></span></div>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </li>
                                    <li><Link to="/Services"> About Sparess </Link></li>
                                </ul>
                            </div>
                            <div class="col-md-3 col-6  text-center col-2">
                                <Link to="/###"><img src="images/new-logo.png" class="header-logoimg" alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <header class="d-block d-sm-none">
                <div class="tophead">
                    <div class="container">
                        <div class="row align-items-center ">
                            <div class="col-7 pr-0">
                                <img src="images/menu-left-alt.svg" class="mr-2 menu-btn-left" onClick={handleShow} /> 
                                <Link to="/"><img src="images/new-logo.png" class="logo-mobile" /></Link>
                            </div>
                            <div class="col-5 text-right d-flex pl-0">
                            <Link to="/Login"><button type="button" class="btn  login-btn mr-2">Login</button></Link> 
                            <Link to="/"> <button type="button" class="btn  login-btn mr-2">Register</button></Link>
                            <Link to="/"> <i class="fa-regular fa-heart" ></i> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Modal show={show} onHide={handleClose}
                className="filter-popup modal-dialog-slideout home-pop">
                <Modal.Header closeButton>
                    <Modal.Title>
                       
                        <img src="images/new-logo.png" alt="" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="home-popcontent">
                                <ul>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Blogs</a></li>
                                    <li><a href="#">Our Services</a></li>
                                    <li><a href="#">About Sparess</a></li>
                                    {/* <li><a href="#">Skin care Kits</a></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {/* <button type="button" class="btn btn-outline-primary post-btn mr-2">BACK</button>
                    <button type="button" class="btn btn-login">SELECT DATE & TIME</button> */}
                    {/* <Button variant="secondary" onClick={handleClose}>Close</Button> */}
                    {/* <Button variant="primary" onClick={handleClose}>Save Changes</Button> */}
                </Modal.Footer>
            </Modal>

        </>
    );
}


export default  Header;