// import React from 'react';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

import Header from '../include/header';
import Footer from '../include/footer';
// import { Container } from 'react-bootstrap';
// import { Link } from "react-router-dom";


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

var slidersecondsetting = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: false,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        }
    ]
};

function RangeProduct() {



    const [shows, setShows] = useState(false);
    const handleCloses = () => setShows(false);
    const handleShows = () => setShows(true);

    // const [show, setShow] = useState(false);

    // const [nav1, setNav1] = useState();
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    //     var React = require('react');
    //    var Slider = require('react-slick');



    return (
        <>

            <div class="innerheader">
                <Header></Header>
            </div>

            <section class="services-sectop range-producttop">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="services-tophead">
                                <h1>Range of products</h1>
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



            <section class="pb-4 pb-sm-5" >
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-11">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="rangeproduct-head">
                                        <h1>Range of products</h1>
                                    </div>
                                </div>
                                <div class="col-md-7  mt-3">

                                    <div class="row  experiance-slide ">
        
                                        <div class="col-md-12">
                                            <div class="range-productimg">
                                                <img src="images/range-rightimg.png" />
                                            </div>
                                        </div>

                                        <div class="col-md-12 mt-2 rangeSlider">
                                            <Slider asNavFor={nav1}
                                                ref={(slider2) => setNav2(slider2)}
                                                {...slidersecondsetting}
                                            >
                                                <div>
                                                    <div class="range-productimgleft">
                                                        <img src="images/range-leftimg.png" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="range-productimgleft">
                                                        <img src="images/new-range1.png" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="range-productimgleft">
                                                        <img src="images/new-range2.png" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="range-productimgleft">
                                                        <img src="images/new-range3.png" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="range-productimgleft">
                                                        <img src="images/range-leftimg.png" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="range-productimgleft">
                                                        <img src="images/new-range1.png" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="range-productimgleft">
                                                        <img src="images/new-range2.png" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="range-productimgleft">
                                                        <img src="images/new-range3.png" />
                                                    </div>
                                                </div>
                                            </Slider>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-5  mt-3">
                                    <div class="range-productright">
                                        <h6>Product</h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing and <br class="d-sm-block d-none" /> typesetting industry.</p>
                                        <h2>17,00 AED</h2>

                                        <h5>Quantity</h5>

                                        <div class="quantity-box">
                                            1
                                        </div>

                                        <h5>Type</h5>


                                        <div class="row mt-4">
                                            <div class="col-md-6 col-6 pr-0">
                                                <button type="button" class="search-btn btn-block new-btn">Connect to Seller</button>
                                            </div>
                                            <div class="col-md-6 col-6 ">
                                                <button type="button" class="btn  btn-block rent-btn ">RENT</button>
                                            </div>
                                        </div>

                                        {/* <div class="d-flex mt-2"> 
                                        <button type="button" class=" search-btn btn-block">Connect to Seller</button>
                                        <button type="button" class="btn  btn-block rent-btn ml-2">RENT</button>
                                  </div>  */}

                                        <div class="d-flex justify-content-between">
                                            <div>
                                                <h5>Amount</h5>
                                                <h3>AED 200</h3>
                                            </div>
                                            <div>
                                                <h5>Amount</h5>
                                                <h3>AED 20</h3>
                                            </div>
                                            <div>
                                                <h5>Amount</h5>
                                                <h3>AED 10</h3>
                                            </div>
                                        </div>

                                        <div class="wish-boximg">
                                            <img src="images/wish-img.png" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* <button type="button" class=" search-btn">Search</button> */}


            <section class="pb-4 pb-sm-5" >
                <div class="container">

                    <div class="row justify-content-center">
                        <div class="col-md-11">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="description-text">
                                        <h1>Description</h1>
                                    </div>

                                </div>
                            </div>

                            <div class="description-content">
                                <div class="row">
                                    <div class="col-md-4">
                                        <h6> Catagory</h6>
                                        <p>Lorem Ipsum is simply </p>

                                        <h6>Sub Catagory</h6>
                                        <p>Lorem Ipsum is simply </p>

                                        <h6>Product Name</h6>
                                        <p>Lorem Ipsum is simply </p>

                                        <h6>Product Make</h6>
                                        <p>Lorem Ipsum is simply </p>

                                        <h6>Product Date</h6>
                                        <p>Lorem Ipsum is simply </p>

                                        <h6>Product Location</h6>
                                        <p>Lorem Ipsum is simply </p>

                                    </div>

                                    <div class="col-md-5">
                                        <h6>Product Details</h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever since the 1500s,</p>
                                        <ul>
                                            <li>Lorem ipsum</li>
                                            <li>Lorem ipsum</li>
                                            <li>Lorem ipsum</li>
                                            <li>Lorem ipsum</li>
                                        </ul>
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

export default RangeProduct;