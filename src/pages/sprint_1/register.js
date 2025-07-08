
import React from 'react';

import { Link } from 'react-router-dom';

function Register() {

    return (
        <>
            <section class=" register-bg ">
                <div class="container">

                    <div class="row justify-content-center">
                        <div class="col-md-11">

                            <div class="row my-4 my-sm-5">
                                <div class="col-md-5">
                                    <div class="register-lefttextbox">
                                        <Link to="/"><img src="images/left-bluearrow.png" /></Link>
                                        <h1>Welcome To </h1>
                                        <img src="images/new-logo.png" />
                                        <p>An Online Platform to Buy & Sell <br /> Marine and Offshore Equipment, <br /> Products, Parts and Services</p>
                                    </div>
                                </div>
                                <div class="col-md-7 col-lg-6">
                                    <div class="register-righttextbox">
                                        <h3>Register</h3>

                                        <div class="row mt-2 mt-sm-4">
                                            <div class="col-md-3 col-4">
                                                <div class="register-radio">
                                                    <input class="with-gap" type="radio" name="register" id="client2" />
                                                    <label for="client2" class="register-label" > Buyer </label>
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-4">
                                                <div class="register-radio">
                                                    <input class="with-gap" type="radio" name="register" id="client3" />
                                                    <label for="client3" class="register-label" >Seller</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row ">
                                            <div class="col-md-6">
                                                <input type="email" class="form-control input-box" placeholder="Name" />
                                                <input type="email" class="form-control input-box" placeholder="Email" />
                                                <input type="email" class="form-control input-box" placeholder="Country" />
                                                <input type="email" class="form-control input-box" placeholder="Password" />
                                                <input type="email" class="form-control input-box" placeholder="Company Name" />
                                            </div>
                                            <div class="col-md-6">
                                                    <input type="email" class="form-control input-box" placeholder="Phone" />
                                                    <input type="email" class="form-control input-box" placeholder="Location" />
                                                    <input type="email" class="form-control input-box" placeholder="City" />
                                                    <input type="email" class="form-control input-box" placeholder="Confirm Password" />
                                                    <input type="email" class="form-control input-box" placeholder="Website Url" />
                                            </div>
                                        </div>

                                        <div class="row justify-content-center mt-2 ">
                                            <div clas="col-md-12">
                                                <div class="form-group new-checkfilled ">
                                                    <input class="filled-in" type="checkbox" value="" id="Check" />
                                                    <label class="new-checkfilledlabel" for="Check">
                                                        *I agree to Sparess's T&C
                                                    </label>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="row justify-content-center">
                                            <div class="col-md-7">
                                              <Link to="/Question"><button type="button" class=" next-btn">Next</button> </Link>
                                            </div>
                                        </div>

                                        <div class="row justify-content-center">
                                            <div class="col-md-6 col-lg-6 col-9">
                                                <div class="d-flex justify-content-between align-items-center pt-3">
                                                    <h5>Already have an Account ?</h5>
                                                    <Link to="/Login" class="newlogin-btn">Login</Link> 
                                                </div>

                                            </div>
                                        </div>

                                        <h6>or continue with</h6>

                                        <div class="social-iconregister">
                                            <a href="#"><img src="images/rfacebook.png" /></a>  <a href="#"><img src="images/rapple.png" /></a> <a href="#"><img src="images/rgoogle.png" /></a>
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

export default Register;