import React from 'react';
// import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";


function Login() {

    return (
        <>
            <section class=" register-bg ">
                <div class="container">

                    <div class="row justify-content-center">
                        <div class="col-md-11">

                            <div class="row  my-4 my-sm-5 ">
                                <div class="col-md-4">

                                    <div class="register-lefttextbox">
                                        <Link to="/"><img src="images/left-bluearrow.png" /></Link>
                                        <h1>Welcome To </h1>
                                        <img src="images/new-logo.png" />
                                        <p>An Online Platform to Buy & Sell <br /> Marine and Offshore Equipment, <br /> Products, Parts and Services</p>
                                    </div>

                                </div>

                                <div class="col-md-7">
                                    <div class="row justify-content-end ">
                                        <div class="col-md-7 col-lg-6">
                                            <div class="register-righttextbox login-right">
                                                <h3>Login </h3>
                                                <div class="row mt-2 mt-sm-4">
                                                    <div class="col-md-5 col-4">
                                                        <div class="register-radio">
                                                            <input class="with-gap" type="radio" name="register" id="client2" />
                                                            <label for="client2" class="register-label" > Buyer </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-4">
                                                        <div class="register-radio">
                                                            <input class="with-gap" type="radio" name="register" id="client3" />
                                                            <label for="client3" class="register-label" >Seller</label>
                                                        </div>
                                                    </div>
                                                </div>

                                            
                                                    <input type="email" class="form-control input-box sec-inputbox" placeholder="Email" />
                                               

                                                <div class=" position-relative">
                                                    <input type="email" class="form-control input-box padding-right sec-inputbox" placeholder="Password" />
                                                    <img src="images/orange-eyes.png" class="password-eyes" alt="" />
                                                </div>

                                                <div class="text-right mt-3">
                                                    <h5><Link to="/ForgetPassword">Forgot password ?</Link></h5>
                                                </div>

                                                <div class="text-center mt-3 mt-sm-5">
                                                <Link to="/"><button type="button" class=" next-btn">Login</button></Link>
                                                </div>

                                                <div class="row justify-content-center mt-2 mt-sm-4">
                                                    <div class="col-md-9 col-8">
                                                        <div class="d-flex justify-content-between align-items-center pt-3">
                                                            <h5>Don't have Account ?</h5>
                                                            <Link to="/Register" class=" newlogin-btn">Register</Link>
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



                </div>
            </section>



        </>
    );
}

export default Login;