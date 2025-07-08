import React from 'react';
// import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";


// import Sonnet from '../../components/Sonnet';

function Question() {

    return (
        <>
            <section class=" register-bg new-questions ">
                <div class="container">

                    <div class="row justify-content-center ">
                        <div class="col-md-11">

                            <div class="row  my-4 my-sm-5 ">
                                <div class="col-md-5">
                                    <div class="register-lefttextbox">
                                        <Link to="/"><img src="images/left-bluearrow.png" /></Link>
                                        <h1>Welcome To </h1>
                                        <img src="images/new-logo.png" />
                                        <p>An Online Platform to Buy & Sell <br /> Marine and Offshore Equipment, <br /> Products, Parts and Services</p>
                                    </div>

                                </div>

                                <div class="col-md-7">
                                    <div class="row justify-content-center">
                                        <div class="col-md-7 col-lg-6">
                                            <div class="register-righttextbox login-right">
                                                <h3 >Security Question</h3>
                                                <div class=" pt-2 pt-sm-2 pt-lg-5">
                                                    <input type="email" class="form-control input-box sec-inputbox" placeholder="Your Pet Name" />
                                                </div>
                                                <div class="text-center mt-2 mt-sm-4 pb-5 pb-sm-0">
                                                    <Link to="/"><button type="button" class="next-btn mt-3 ">Register</button></Link>
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

export default Question;