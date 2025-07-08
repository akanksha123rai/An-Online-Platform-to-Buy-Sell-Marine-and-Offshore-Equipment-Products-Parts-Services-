import React from 'react';
import Header from '../include/header';
 import { Link } from "react-router-dom";



function ContactUs () {

    return (

        <>

        <Header></Header>

            <section class="py-4 py-sm-5 contactUs-section ">
                <div class="container">

                <div class="row justify-content-center mt-5">
                    <div class="col-md-11">
                    <div class="row align-items-center">
                        <div class="col-md-5 mb-2 mb-sm-0">
                            <div class="contact-leftimg mt-3">
                                <img src="images/contact-left.png" alt="" />
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="contact-us">
                                <h1>Contact Us</h1>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="email" class="form-control contact-input " placeholder="Name" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="email" class="form-control contact-input " placeholder="Phone No." />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="email" class="form-control contact-input " placeholder="Email" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="email" class="form-control contact-input " placeholder="Location" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="email" class="form-control contact-input " placeholder="Company Address" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="email" class="form-control contact-input " placeholder="Website" />
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <textarea class="form-control contact-input" placeholder="Description" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div class="row justify-content-center text-center mt-2 mb-3 mb-sm-0">
                                    <div class="col-md-4 col-8">
                                       <Link to="/"><button type="button" class=" search-btn btn-block ">Submit</button></Link>
                                          
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div class="row mt-2 mt-sm-4">
                        <div class="col-md-5 col-8 text-left text-sm-center">
                            <div class="conatct-socialimg">
                                <a href="#"><img src="images/facebook.png" alt="" /></a>
                                <a href="#"><img src="images/linkedin.png" alt="" /></a>
                                <a href="#"><img src="images/twitter.png" alt="" /></a>
                                <a href="#"><img src="images/youtube.png" alt="" /></a>
                                <a href="#"><img src="images/instagram.png" alt="" /></a>
                            </div>
                        </div>
                        <div class="col-md-7 col-4 text-right mt-2 mt-sm-4">
                            <a href="#"><img src="images/uparrow.png" alt="" /></a>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-7 col-lg-5 col-12">
                            <div class="d-block d-sm-flex justify-content-between">
                              
                                    <div class="location-contact mb-2 mb-sm-0">
                                        <p><img src="images/forum.png"  alt="" /> Hello@sparess.com</p>
                                    </div>
                           
                               
                                    <div class="location-contact mb-2 mb-sm-0">
                                        <p><img src="images/contact-call.png"  alt="" /> +09876543210</p>
                                    </div>
                               
                              
                                    <div class="location-contact mb-2 mb-sm-0">
                                        <p><img src="images/location-on.png"  alt="" /> Hello@sparess.com</p>
                                    </div>
                             
                            </div>
                        </div>

                    </div>
                    </div>
                </div>

                </div>
            </section>


        </>
    );
}

export default ContactUs;