
import React from 'react';
import { Link } from "react-router-dom";


function Footer () {

    return (
        <>
           

           <section class="foot-section pt-4 pt-sm-5">
                <div class="container">

                    <div class="row justify-content-center">
                        <div class="col-md-11">

                            <div class="row">
                                <div class="col-md-4 order-sm-1 order-2 col-6 ">
                                    <div class="foot-righttext">
                                        <h1>Links</h1>
                                        <ul>
                                            <li><Link to="/">Connect With Us</Link></li>
                                            <li><Link to="/">Advertise With Us</Link></li>
                                            <li><Link to="/">Terms Of use</Link></li>
                                            <li><Link to="/">Privacy policy</Link></li>
                                            <li><Link to="/">Tech Support</Link></li>

                                            <li><Link to="/DealsPromotions">Deals and Promotion</Link></li>
                                            <li><Link to="/BuyForm">But Form</Link></li>
                                            <li><Link to="/Experience">Experience</Link></li>
                                            <li><Link to="/Planchoose">Choose Plan</Link></li>
                                            <li><Link to="/RangeProduct">Range Products</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-4 text-center order-sm-2 order-1 mb-4 mb-sm-0">
                                    <img src="images/new-logo.png" alt="" />
                                    <div class="foot-contnet">
                                        <a href="#"><img src="images/facebook.png" class="mr-2" alt="" /></a>
                                        <a href="#"><img src="images/linkedin.png" class="mr-2" alt="" /></a>
                                        <a href="#"><img src="images/twitter.png" class="mr-2" alt="" /></a>
                                        <a href="#"><img src="images/youtube.png" class="mr-2" alt="" /></a>
                                        <a href="#"><img src="images/instagram.png" alt="" /></a>

                                        <div class="mt-2 mt-sm-3">
                                            <a href="#"><img src="images/payment-app.png" alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 order-sm-3 order-3 col-6">
                                    <div class="row justify-content-end">
                                        <div class="col-md-5">
                                            <div class="foot-righttext">
                                                <h1>Location</h1>
                                                <ul>
                                                    <li><a href="#">Dubai</a></li>
                                                    <li><a href="#">Abu Dhabi</a></li>
                                                    <li><a href="#">Sharjah</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-0 mt-sm-1">
                                <div class="col-md-12">
                                    <p class="copy-righttext">Sparess.com   2022   All Right Reserved <img src="images/bottom-footimg.png" class="ml-1" alt="" /></p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>


        

        </>
    );
}


export default  Footer;