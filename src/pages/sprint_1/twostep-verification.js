
import React from 'react';
import { Link } from "react-router-dom";

function TwostepVerification() {

    return (
        <>
            <section class=" register-bg ">
                <div class="container">

                    <div class="row justify-content-center ">
                        <div class="col-md-11">
                            <div class="row  my-4 my-sm-5">
                                <div class="col-md-4">

                                    <div class="register-lefttextbox">
                                        <Link to="/"><img src="images/left-bluearrow.png" /></Link>
                                        <h1>Welcome To </h1>
                                        <img src="images/new-logo.png" />
                                        <p>An Online Platform to Buy & Sell <br /> Marine and Offshore Equipment, <br /> Products, Parts and Services</p>
                                    </div>

                                </div>

                                <div class="col-md-7">

                                    <div class="verification-box">
                                        <div class="row justify-content-end">
                                            <div class="col-md-8 col-lg-6">
                                                <div class="register-righttextbox forget-right">
                                                    <h3> Two Step Verification </h3>
                                                    <h5 class="mt-2">We sent a verification code to your email.</h5>
                                                    <h4 class="padding-topnone pb-2" >fai******@gmail.com</h4>

                                                    <div class="d-flex mt-4">
                                                        <input type="number" />
                                                        <input type="number" />
                                                        <input type="number"  />
                                                        <input type="number" />
                                                        <input type="number" />
                                                        <input type="number" />
                                                    </div>


                                                    <div class="text-center mt-4 mt-sm-5">
                                                        <Link to="/"><button type="button" class=" next-btn newtwostepbutton ">Verify</button></Link>
                                                    </div>

                                                    <div class="mt-4 text-center">
                                                        <h5>Didn't get the code? <span><Link to="/">Resend</Link></span> </h5>
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



        </>
    );
}

export default TwostepVerification;