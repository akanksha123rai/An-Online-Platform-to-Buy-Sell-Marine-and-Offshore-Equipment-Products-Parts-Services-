import React from 'react';
import { Link } from "react-router-dom";

function Planchoose() {

    return (

        <>
            <section class="py-4 plan-section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-11">
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="buy-formtext">
                                        <h1>Choose Your Plan</h1>
                                        <div class="heading-seperator heading-seperator2"><span></span></div>
                                    </div>
                                </div>
                                <div class="col-md-4 text-left text-sm-right">
                                    <img src="images/new-logoplan.png"

                                        alt="" />
                                </div>
                            </div>

                            <div class="row mt-3 mt-sm-5 pb-5 ">
                                <div class="col-md-4 mb-2 mb-sm-0 " >
                                    <div class="planprice-box">
                                        <h1>Why Subscribe ?</h1>
                                        <hr />
                                        <div class="planprice-boxcontent">
                                            <p>Subscription allows you as a user to  sell your products,
                                                spares and available maintenance and support  services in this online platform.
                                                To view the products, parts , maintenance and support services,equipment rental
                                                listing in this online platform you need not subscribe , but have to register
                                                with your credentials.</p>

                                            <ul class="first-boxplan">
                                                <li>Registering in this platform will faciialite you as a user to log in to the website the next
                                                    time without the necessity to re-enter your credentials.</li>
                                                <li>The subscription funds help the online platform operator to manage the website maintenance expenses.</li>
                                                <li>There are 2 types of subscription , Standard and Premium, the benefits and features of the
                                                    subscription are detailed in respective sections for user's easy understanding.
                                                    "Choose the right Subscription and Save"</li>

                                            </ul>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4   mb-2 mb-sm-0  " >
                                    <div class="planprice-box">
                                        <h1> <img src="images/plan-top.png" class="mr-2" alt="" /> Standard Plan</h1>
                                        <div class="heading-seperator heading-seperator4"><span></span></div>
                                        <hr />
                                        <div class="planprice-boxcontent">
                                            <h6>Plan Includes:</h6>
                                            <ul class="second-boxplan">
                                                <li>Access the platform to post your products & spares that you wish to sell</li>
                                                <li>Upload upto 2 photos of each product that you wish to list in this platform to sell or rent</li>
                                                <li>Access the list of all Maintenance & Support Service providers & their contact information</li>
                                                <li>Buyer and seller can chat with each other on this online platform.</li>
                                                <li>Post in this platform 5 products per year free of any additional charges.Additional postings will
                                                    be charged @$1 per posting per month (31 days)</li>
                                                <li>The sale or rental listing will remain in this platform for upto 6 months from date of posting. </li>
                                            </ul>

                                            <div class="text-center">
                                                <Link class="/SubscriptionPlan"><button type="button" class="btn  btn-block plan-outlinebtn ">Take free 30-day trial</button></Link>
                                                <Link to="/SubscriptionPlan"><button type="button" class="btn  btn-block basic-btn ">Choose Basic</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4  mb-2 mb-sm-0 ">
                                    <div class="planprice-box">
                                        <h1> <img src="images/plan-top.png" class="mr-2" alt="" />Premium Plan</h1>
                                        <div class="heading-seperator heading-seperator4 heading-seperator5 "><span></span></div>
                                        <hr />
                                        <div class="planprice-boxcontent">
                                            <h6>Plan Includes:</h6>
                                            <ul class="second-boxplan">
                                                <li>Access the platform to post your products & spares that you wish to sell</li>
                                                <li>Upload upto 2 photos of each product that you wish to list in this platform to sell or rent</li>
                                                <li>Access the list of all Maintenance & Support Service providers & their contact information</li>
                                                <li>Buyer and seller can chat with each other on this online platform.</li>
                                                <li>Post in this platform 5 products per year free of any additional charges.Additional postings will
                                                    be charged @$1 per posting per month (31 days)</li>
                                                <li>The sale or rental listing will remain in this platform for upto 6 months from date of posting. </li>
                                            </ul>

                                            <div class="text-center pt-5">
                                                <Link to="/BuyForm"><button type="button" class="btn  btn-block basic-btn ">Choose Advance</button></Link>
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

export default Planchoose;