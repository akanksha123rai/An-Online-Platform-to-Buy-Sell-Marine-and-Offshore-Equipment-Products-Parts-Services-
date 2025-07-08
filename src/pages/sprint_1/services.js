import React, { useState } from 'react';

import { Link } from "react-router-dom";

import { Modal } from 'react-bootstrap';
import Footer from '../include/footer';
import Header from '../include/header';



function Services() {
    
    const [shows, setShows] = useState(false);
    const handleCloses = () => setShows(false);
    const handleShows = () => setShows(true);

    return (
        <>

        <div class="innerheader">
           <Header></Header>
        </div>
       
            <section class="services-sectop">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="services-tophead">
                                <h1>Who We Are</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-4 py-sm-5 ">
                <div class="container">
                    <div class="row justify-content-center mb-2 mb-sm-5">
                        <div class="col-md-11">
                            <div class="row align-items-center">
                                <div class="col-md-6 mb-3 mb-sm-0 pr-sm-0">
                                    <img src="images/service-left.png" alt="" />
                                </div>
                                <div class="col-md-6">
                                    <div class="row justify-content-center">
                                        <div class="col-md-9">
                                            <div class="service-textbox">
                                                <h1> <span class="service-textcolor">Sparess.com</span> is an
                                                    "<span class="service-marketplacecolor">Online Marketplace</span>" to
                                                    connect Buyers and Sellers associated with " <span class="service-marketplacecolor">Marine and Offshore</span>" Businesses.</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6 pt-0 pt-sm-5  order-2 order-sm-1">
                                    <div class="row">
                                        <div class="col-md-10">
                                            <div class="service-textbox">
                                                <h1> This marketplace <br />  <span class="service-textcolor">Sparess.com</span> will bring Buyers and Sellers under one online platform where they can reach each other easily and quickly to market their products, spares and services. </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6 mb-3 mb-sm-0  pl-sm-0 pt-3 pt-sm-5 order-1 order-sm-2">
                                    <img src="images/service-sec.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section class="platform-sec py-4 py-sm-5">
                <div class="container">
                    <div class="row justify-content-center ">
                        <div class="col-md-11">
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="platorm-box">
                                        <h1>Our Vision <span> is to make this platform</span>  "Accessible Globally Across the Entire Marine and Offshore
                                            Community" and "Enable users to Reduce- Reuse - Recycle Products and Parts" <span>used for Marine and Offshore
                                                operations.</span></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section class=" py-4 py-sm-5">
                <div class="container">
                    <div class="row align-items-center justify-content-center ">
                        <div class="col-md-9 text-center">
                            <div class="service-textbox mt-2 mt-sm-5">
                                <h1><span class="service-marketplacecolor" >Our Misson</span> is to enable Buyers and Sellers
                                    ( an Individual or a Business Entity) to reach each other just by "a click or touch " .  This online
                                    platform can be accessed economically through  <span class="service-marketplacecolor" >Website and Mobile Apps.</span> </h1>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-center my-2 my-sm-5">
                        <div class="col-md-10 mt-2 mt-sm-5">
                            <div class="row align-items-center ">
                                <div class="col-md-6 ">
                                    <img src="images/mobile.png" alt="" />
                                </div>

                                <div class="col-md-6 mt-3 mt-sm-0">
                                    <div class="row justify-content-center">
                                        <div class="col-md-11 col-lg-10">
                                            <div class="our-mission">
                                                <h1>Try our Sparess App !!</h1>
                                                <p>Get Connected to Buyers,Sellers & Service Providers for your Marine & Offshore Needs, Anywhere and Anytime with your Mobile</p>
                                            </div>

                                            <div class="row mt-2 mt-lg-5 align-items-center">
                                                <div class="col-lg-5 col-md-6 col-6">

                                                    <div class="footbtn service-btn mb-3 mb-lg-4 mb-sm-2" onClick={handleShows} >
                                                        <div class="row align-items-center">
                                                            <div class="col-md-3 pr-0 col-3"><img src="images/black-play.png" alt="" /></div>
                                                            <div class="col-md-9 pl-2 col-9"><h5>Get it on <br /> <span>Google Play</span></h5></div>
                                                        </div>
                                                    </div>

                                                    <div class="footbtn service-btn" onClick={handleShows} >
                                                        <div class="row align-items-center">
                                                            <div class="col-md-3 pr-0 col-3"><img src="images/black-apple.png" alt="" /></div>
                                                            <div class="col-md-9 pl-2 col-9"><h5>Get it on <br /> <span>Apple Store</span></h5></div>
                                                        </div>
                                                    </div>


                                                </div>
                                                <div class="col-lg-7 col-md-6 col-6">
                                                    <div class="qr-imgbox">
                                                        <img src="images/black-scan.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer ></Footer>



         

            <Modal show={shows} onHide={handleCloses} className="qr-popup">
                <Modal.Header closeButton >
                    <Modal.Title>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div class="row text-center">
                        <div class="col-md-12">
                            <div class="qr-popupimg">
                                <img src="images/pop-qr.png" alt="" />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <button type="button" class="btn btn-outline-primary post-btn mr-2">BACK</button>
                    <button type="button" class="btn btn-login">PROCEED TO PAYMENT</button>
                   
                </Modal.Footer> */}
            </Modal>

        </>
    );
}

export default Services;