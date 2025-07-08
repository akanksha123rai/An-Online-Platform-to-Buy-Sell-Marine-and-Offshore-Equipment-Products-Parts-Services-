import React from 'react';
// import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

function ForgetPassword() {

    return (
        <>
            <section class=" register-bg new-questions ">
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
                                    <div class="row justify-content-end">
                                        <div class="col-md-7 col-lg-6">
                                            <div class="register-righttextbox forget-right">
                                                <h3>Forgot Password?</h3>
                                                <h5 class="mt-2">Enter your email and we'll send you instructions to  reset your password.</h5>

                                                <div class="pb-2">
                                                    <input type="email" class="form-control input-box sec-inputbox" placeholder="Enter Email or Mobile" />
                                                </div>

                                                <div class="text-center mt-4">
                                                    <Link to="/TwostepVerification"><button type="button" class=" next-btn">Send Reset Link</button></Link>
                                                </div>

                                                <h4><Link to="/Login"><img src="images/left-arrow.png" class="mr-1" alt="" /> Back to login</Link></h4>

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

export default ForgetPassword;