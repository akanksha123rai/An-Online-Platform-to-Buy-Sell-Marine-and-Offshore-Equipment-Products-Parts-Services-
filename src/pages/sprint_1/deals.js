// import React from 'react';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Header from '../include/header';
import Footer from '../include/footer';


import { Link } from "react-router-dom";

import Slider from "react-slick";

var sliderfirstsetting = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: false,
};

function DealsPromotions() {
    const [shows, setShows] = useState(false);
    const handleCloses = () => setShows(false);
    const handleShows = () => setShows(true);

    // const [show, setShow] = useState(false);

    const [nav2, setNav1] = useState();

    return (
        <>
        
        <div class="innerheader">
           <Header></Header>
        </div>

            <section class="services-sectop deals-top">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="services-tophead">
                                <h1>Deals & Promotions</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-4 py-sm-5" >
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-11">
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <div class="head-text">
                                        <h1>Advertize Here</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="row experiance-slide mt-3 mt-sm-5">
                                <div class="col-md-6">
                                    <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}  {...sliderfirstsetting}>
                                        <div>
                                            <div class="experiance-box new-experiance">
                                                <img src="images/new.png" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="experiance-box new-experiance">
                                                <img src="images/new.png" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="experiance-box new-experiance">
                                                <img src="images/new.png" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="experiance-box new-experiance">
                                                <img src="images/new.png" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="experiance-box new-experiance">
                                                <img src="images/new.png" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="experiance-box new-experiance">
                                                <img src="images/new.png" alt="" />
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                                <div class="col-md-6">
                                    <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}  {...sliderfirstsetting}>
                                        <div>
                                            <div class="experiance-box new-experiance">
                                                <img src="images/youtube-play.png" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="experiance-box new-experiance">
                                                <img src="images/youtube-play.png" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="experiance-box new-experiance">
                                                <img src="images/youtube-play.png" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="experiance-box new-experiance">
                                                <img src="images/youtube-play.png" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="experiance-box new-experiance">
                                                <img src="images/youtube-play.png" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="experiance-box new-experiance">
                                                <img src="images/youtube-play.png" alt="" />
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="pb-4 pb-sm-5">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-11">
                            <div class="row justify-content-between">
                                <div class="col-md-9 mb-3 mb-sm-0">
                                    <div class="position-relative d-flex">
                                        <input type="email" class="form-control mr-3 deal-input" placeholder="Search for Product Id, catagory or something..." />
                                        <img src="images/search-deal.png" class="search-icon" alt="" />
                                        <button type="button" class=" search-btn">Search</button>
                                    </div>
                                </div>

                                <div class="col-md-2 pl-3 pl-sm-0 col-5">
                                    <select class="form-control deals-select">
                                        <option>Rent</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>

                            <div class="tittle-price border-bottom pb-2 d-none d-sm-block">
                                <div class="row mt-5">
                                    <div class="col-md-3 ">
                                        <p>Filters</p>
                                    </div>
                                    <div class="col-md-4 ">
                                        <p>Product</p>
                                    </div>
                                    <div class="col-md-2  text-center">
                                        <p>Price & Rating</p>
                                    </div>
                                    <div class="col-md-1">
                                        <p>Available</p>
                                    </div>
                                    <div class="col-md-2  text-center">
                                        <p>Action</p>
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-4">
                                <div class="col-md-3 mb-3 mb-sm-0">
                                    <div class="deals-left">
                                        <div class="padding-boxdeal">
                                            <div class="row mt-4">
                                                <div class="col-md-5 col-6">
                                                    <p><a href="#">Filter</a></p>
                                                </div>
                                                <div class="col-md-7 col-6">
                                                    <h1><a href="#">CLEAR ALL</a></h1>
                                                </div>
                                                <div class="col-md-12 mt-2 mt-sm-3">
                                                {/* <div class="form-group experiance-check">
                                                    <input class="filled-in" type="checkbox" value="" id="Check" />
                                                    <label class="exp-labelcheck exp-label " for="Check">    </label>
                                                </div> */}
                                                    <div class="experiance-check">
                                                        <input class="filled-in" type="checkbox"  id="client3" />
                                                        <label for="client3" class="rating-label" >Marine Vessels</label>
                                                    </div>
                                                    <div class="experiance-check">
                                                        <input class="filled-in" type="checkbox"  id="client4" />
                                                        <label for="client4" class="rating-label" >Luxury Vessels</label>
                                                    </div>
                                                    <div class="experiance-check">
                                                        <input class="filled-in" type="checkbox"  id="client5" />
                                                        <label for="client5" class="rating-label" >Product & Parts</label>
                                                    </div>
                                                    <div class="experiance-check">
                                                        <input class="filled-in" type="checkbox"  id="client6" />
                                                        <label for="client6" class="rating-label">Equipment Rental</label>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                        <hr class="m-2" />

                                        <div class="padding-boxdeal">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="position-relative">
                                                        <input type="email" class="form-control sub-input" placeholder="Subcatagory" />
                                                        <img src="images/serach-orange.png" class="sub-inputimg" alt="" />
                                                    </div>
                                                </div>

                                                <div class="col-md-12 mt-3">
                                                    <div class="experiance-check">
                                                        <input class="filled-in" type="checkbox" id="client7" />
                                                        <label for="client7" class="rating-label" >Plates and Profiles</label>
                                                    </div>
                                                    <div class="experiance-check">
                                                        <input class="filled-in" type="checkbox" id="client8" />
                                                        <label for="client8" class="rating-label" >Compressors</label>
                                                    </div>
                                                    <div class="experiance-check">
                                                        <input class="filled-in" type="checkbox" id="client9" />
                                                        <label for="client9" class="rating-label" >Engines</label>
                                                    </div>
                                                    <div class="experiance-check">
                                                        <input class="filled-in" type="checkbox" id="client10" />
                                                        <label for="client10" class="rating-label" >Equipment Rental</label>
                                                    </div>
                                                    <div class="experiance-check">
                                                        <input class="filled-in" type="checkbox"  id="client11" />
                                                        <label for="client11" class="rating-label" >Hydraulic Parts</label>
                                                    </div>
                                                    <div class="experiance-check">
                                                        <input class="filled-in" type="checkbox"  id="client12" />
                                                        <label for="client12" class="rating-label" >Fuel</label>
                                                    </div>
                                                    <div class="experiance-check">
                                                        <input class="filled-in" type="checkbox" id="client13" />
                                                        <label for="client13" class="rating-label" >Life Saving Appliances</label>
                                                    </div>
                                                    <div class="experiance-check">
                                                        <input class="filled-in" type="checkbox"  id="client14" />
                                                        <label for="client14" class="rating-label" > Combat Equipment </label>
                                                    </div>
                                                    <div class="experiance-check">
                                                        <input class="filled-in" type="checkbox"  id="client15" />
                                                        <label for="client15" class="rating-label" > Cranes and Davits </label>
                                                    </div>
                                                    <div class="experiance-check">
                                                        <input class="filled-in" type="checkbox" id="client16" />
                                                        <label for="client16" class="rating-label"> Portholes </label>
                                                    </div>
                                                    <div class="experiance-check">
                                                        <input class="filled-in" type="checkbox" id="client17" />
                                                        <label for="client17" class="rating-label" > Cameras </label>
                                                    </div>
                                                    <div class="experiance-check ">
                                                        <input class="filled-in" type="checkbox" id="client18" />
                                                        <label for="client18" class="rating-label" > Flooring and Carpets </label>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 pb-3">
                                                    <h1><a href="#"> SEE ALL </a></h1>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-9">

                                    <div class="boxover-flow">

                                        <div class="price-ratingbox mr-1">
                                            <div class="row align-items-center ">
                                                <div class="col-md-6 mb-2 mb-sm-0">
                                                    <div class="row align-items-center">
                                                        <div class="col-md-4 col-4">
                                                            <div class="price-ratingboximg">
                                                                <img src="images/rating-price.png" alt="" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-8 col-lg-7 col-8">
                                                            <h1>Marine Engine  MS Sulzar</h1>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="row">

                                                        <div class="col-md-4 col-4 ">
                                                            <h6>49.00$</h6>
                                                        </div>
                                                        <div class="col-md-3 col-4 pl-lg-3 pr-lg-3 pl-0 pr-0  ">
                                                            <h6>24 Units</h6>
                                                        </div>
                                                        <div class="col-md-5 text-left text-sm-right  pt-1 pt-sm-0  col-12">
                                                            <button type="button" class=" review-btn deal-btn  mr-2 mr-sm-0">Connect</button>
                                                            <button type="button" class="review-btn price-btn deal-btn "><img src="images/text-msg.png" alt="" /></button>
                                                            <button type="button" class=" review-btn price-btn deal-btn"><img src="images/call.png" alt="" /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="price-ratingbox mr-1 mt-2">
                                            <div class="row align-items-center ">
                                                <div class="col-md-6 mb-2 mb-sm-0">
                                                    <div class="row align-items-center">
                                                        <div class="col-md-4 col-4">
                                                            <div class="price-ratingboximg">
                                                                <img src="images/Deal2.png" alt="" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-8 col-lg-7 col-8">
                                                            <h1>Marine Engine  MS Sulzar</h1>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="row">

                                                        <div class="col-md-4 col-4 ">
                                                            <h6>49.00$</h6>
                                                        </div>
                                                        <div class="col-md-3 col-4 pl-lg-3 pr-lg-3 pl-0 pr-0  ">
                                                            <h6>24 Units</h6>
                                                        </div>
                                                        <div class="col-md-5 text-left text-sm-right  pt-1 pt-sm-0  col-12">
                                                            <button type="button" class=" review-btn deal-btn  mr-2 mr-sm-0">Connect</button>
                                                            <button type="button" class="review-btn price-btn deal-btn "><img src="images/text-msg.png" alt="" /></button>
                                                            <button type="button" class=" review-btn price-btn deal-btn"><img src="images/call.png" alt="" /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="price-ratingbox mr-1 mt-2">
                                            <div class="row align-items-center ">
                                                <div class="col-md-6 mb-2 mb-sm-0">
                                                    <div class="row align-items-center">
                                                        <div class="col-md-4 col-4">
                                                            <div class="price-ratingboximg">
                                                                <img src="images/Deal3.png" alt="" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-8 col-lg-7 col-8">
                                                            <h1>Marine Engine  MS Sulzar</h1>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="row">

                                                        <div class="col-md-4 col-4 ">
                                                            <h6>49.00$</h6>
                                                        </div>
                                                        <div class="col-md-3 col-4 pl-lg-3 pr-lg-3 pl-0 pr-0  ">
                                                            <h6>24 Units</h6>
                                                        </div>
                                                        <div class="col-md-5 text-left text-sm-right  pt-1 pt-sm-0  col-12">
                                                            <button type="button" class=" review-btn deal-btn  mr-2 mr-sm-0">Connect</button>
                                                            <button type="button" class="review-btn price-btn deal-btn "><img src="images/text-msg.png" alt="" /></button>
                                                            <button type="button" class=" review-btn price-btn deal-btn"><img src="images/call.png" alt="" /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="price-ratingbox mr-1 mt-2">
                                            <div class="row align-items-center ">
                                                <div class="col-md-6 mb-2 mb-sm-0">
                                                    <div class="row align-items-center">
                                                        <div class="col-md-4 col-4">
                                                            <div class="price-ratingboximg">
                                                                <img src="images/Deal4.png" alt="" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-8 col-lg-7 col-8">
                                                            <h1>Marine Engine  MS Sulzar</h1>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="row">

                                                        <div class="col-md-4 col-4 ">
                                                            <h6>49.00$</h6>
                                                        </div>
                                                        <div class="col-md-3 col-4 pl-lg-3 pr-lg-3 pl-0 pr-0  ">
                                                            <h6>24 Units</h6>
                                                        </div>
                                                        <div class="col-md-5 text-left text-sm-right  pt-1 pt-sm-0  col-12">
                                                            <button type="button" class=" review-btn deal-btn  mr-2 mr-sm-0">Connect</button>
                                                            <button type="button" class="review-btn price-btn deal-btn "><img src="images/text-msg.png" alt="" /></button>
                                                            <button type="button" class=" review-btn price-btn deal-btn"><img src="images/call.png" alt="" /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="price-ratingbox mr-1 mt-2">
                                            <div class="row align-items-center ">
                                                <div class="col-md-6 mb-2 mb-sm-0">
                                                    <div class="row align-items-center">
                                                        <div class="col-md-4 col-4">
                                                            <div class="price-ratingboximg">
                                                                <img src="images/Deal5.png" alt="" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-8 col-lg-7 col-8">
                                                            <h1>Marine Engine  MS Sulzar</h1>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="row">

                                                        <div class="col-md-4 col-4 ">
                                                            <h6>49.00$</h6>
                                                        </div>
                                                        <div class="col-md-3 col-4 pl-lg-3 pr-lg-3 pl-0 pr-0  ">
                                                            <h6>24 Units</h6>
                                                        </div>
                                                        <div class="col-md-5 text-left text-sm-right  pt-1 pt-sm-0  col-12">
                                                            <button type="button" class=" review-btn deal-btn  mr-2 mr-sm-0">Connect</button>
                                                            <button type="button" class="review-btn price-btn deal-btn "><img src="images/text-msg.png" alt="" /></button>
                                                            <button type="button" class=" review-btn price-btn deal-btn"><img src="images/call.png" alt="" /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="price-ratingbox mr-1 mt-2">
                                            <div class="row align-items-center ">
                                                <div class="col-md-6 mb-2 mb-sm-0">
                                                    <div class="row align-items-center">
                                                        <div class="col-md-4 col-4">
                                                            <div class="price-ratingboximg">
                                                                <img src="images/rating-price.png" alt="" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-8 col-lg-7 col-8">
                                                            <h1>Marine Engine  MS Sulzar</h1>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="row">

                                                        <div class="col-md-4 col-4 ">
                                                            <h6>49.00$</h6>
                                                        </div>
                                                        <div class="col-md-3 col-4 pl-lg-3 pr-lg-3 pl-0 pr-0  ">
                                                            <h6>24 Units</h6>
                                                        </div>
                                                        <div class="col-md-5 text-left text-sm-right  pt-1 pt-sm-0  col-12">
                                                            <button type="button" class=" review-btn deal-btn  mr-2 mr-sm-0">Connect</button>
                                                            <button type="button" class="review-btn price-btn deal-btn "><img src="images/text-msg.png" alt="" /></button>
                                                            <button type="button" class=" review-btn price-btn deal-btn"><img src="images/call.png" alt="" /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="price-ratingbox mr-1 mt-2">
                                            <div class="row align-items-center ">
                                                <div class="col-md-6 mb-2 mb-sm-0">
                                                    <div class="row align-items-center">
                                                        <div class="col-md-4 col-4">
                                                            <div class="price-ratingboximg">
                                                                <img src="images/Deal2.png" alt="" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-8 col-lg-7 col-8">
                                                            <h1>Marine Engine  MS Sulzar</h1>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="row">

                                                        <div class="col-md-4 col-4 ">
                                                            <h6>49.00$</h6>
                                                        </div>
                                                        <div class="col-md-3 col-4 pl-lg-3 pr-lg-3 pl-0 pr-0  ">
                                                            <h6>24 Units</h6>
                                                        </div>
                                                        <div class="col-md-5 text-left text-sm-right  pt-1 pt-sm-0  col-12">
                                                            <button type="button" class=" review-btn deal-btn  mr-2 mr-sm-0">Connect</button>
                                                            <button type="button" class="review-btn price-btn deal-btn "><img src="images/text-msg.png" alt="" /></button>
                                                            <button type="button" class=" review-btn price-btn deal-btn"><img src="images/call.png" alt="" /></button>
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

            <section class=" pb-4 pb-sm-5">
                <div class="container">

                    <div class="row justify-content-center pt-0 pt-sm-4 mb-2 mb-sm-4">
                        <div class="col-md-10 ">
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

export default DealsPromotions;