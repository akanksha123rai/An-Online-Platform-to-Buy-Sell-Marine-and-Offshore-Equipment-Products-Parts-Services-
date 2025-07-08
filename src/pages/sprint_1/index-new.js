import React, { useState } from 'react';
import { Link } from "react-router-dom";

import Header from '../include/header';
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Slider from "react-slick";

import { Modal, Tab, Tabs, Carousel } from 'react-bootstrap';
import Footer from '../include/footer';

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

var servicesettings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 3,
    autoplay: true,
    pauseOnHover: false,
    padding: '60px',
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};


function HomeNew() {

    const [slide, setslide] = useState(false);
    const handleClos = () => setslide(false);
    const handleslide = () => setslide(true);

    const [slider, setslider] = useState(false);
    const handleClose = () => setslider(false);
    const handleslider = () => setslider(true);

    const [shows, setShows] = useState(false);
    const handleCloses = () => setShows(false);
    const handleShows = () => setShows(true);

    const labels = ["Posting", "Annual Subscription", "Free Trial Days", "Annual Pus Notifications", "Posting Duratino Days", "Photo Uploads"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Premiun",
                backgroundColor: "#FFFFFF",
                borderColor: "#FFFFFF",
                data: [50, 150, 250, 350, 314, 150, 150],
                borderRadius: "10",
                barThickness: "8"
            },
            {
                label: "Standerd",
                backgroundColor: "#FF5501",
                borderColor: "#FF5501",
                borderRadius: "10",
                barThickness: "8",
                data: [50, 100, 200, 300, 500, 600, 95],
            },
        ],

    };

    return (
        <>
            <Header></Header>

            <section class="position-relative">
                <Carousel class="pb-5 pb-sm-0 ">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 top-bgimg"
                            src="images/herobg.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 top-bgimg"
                            src="images/hero-bg2.png"
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 top-bgimg"
                            src="images/hero-bg3.png"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>

                <div class="carousel-caption">
                    <div class="container">
                        <div class="row  justify-content-center">
                            <div class="col-md-8">
                                <div class="top-banner">
                                    <h2>An Online Platform to Buy & Sell Marine and Offshore Equipment, Products, Parts &  Services</h2>
                                </div>

                                <div class="search-section d-flex">
                                    <input type="email" class="form-control serach-input" placeholder="Search for all content..." />
                                    <button type="button" class=" search-btn">Search</button>
                                </div>

                                <div class="component-text">
                                    <div class="row ">
                                        <div class="col-md-4 mb-1 mb-sm-0 pr-0">
                                            <p><img src="images/Component3.png" class="mr-2" alt="" />Search & Connect to sellers</p>
                                        </div>
                                        <div class="col-md-4 mb-1 mb-sm-0 pr-0">
                                            <p><img src="images/arrow-bag.svg" class="mr-2" alt="" />Sell Equipment, Products & Parts</p>
                                        </div>
                                        <div class="col-md-4 mb-1 mb-sm-0 pr-0">
                                            <p><img src="images/user-call.svg" class="mr-2" alt="" />Sell Maintenance & Support Services</p>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center mt-2 mt-sm-3">
                                        <div class="col-md-7">
                                            <div className="row">
                                                <div class="col-md-6 mb-1 mb-sm-0 pr-0">
                                                    <p><img src="images/Component4.png" class="mr-2" alt="" />Search & Connect to sellers</p>
                                                </div>
                                                <div class="col-md-6 pr-0">
                                                    <p><img src="images/Component5.png" class="mr-2" alt="" />Search & Connect to sellers</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="text-center trial-btn">
                                    <button type="button" class=" free-btn">30-Day Free Trial</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="carousel-foot">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-12 col-lg-10">
                                <div class="row align-items-center">
                                    <div class="col-md-6">
                                        <h1>Connecting Buyers & Sellers Across the World in Just One  Click</h1>
                                        <p>Download the App Now!</p>
                                    </div>
                                    <div class="col-md-2 mr-0 col-6">
                                        <div class="footbtn" onClick={handleShows}  >
                                            <div class="row align-items-center">
                                                <div class="col-md-3 pr-0 col-3"><img src="images/play-white.png" alt="" /></div>
                                                <div class="col-md-9 pl-2 col-9"><h5>Get it on <br /> <span>Google Play</span></h5></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2 ml-0 col-6">
                                        <div class="footbtn" onClick={handleShows}  >
                                            <div class="row align-items-center">
                                                <div class="col-md-3 pr-0 col-3"><img src="images/apple-white.png" alt="" /></div>
                                                <div class="col-md-9 pl-2 col-9"><h5>Get it on <br /> <span>Apple Store</span></h5></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2 d-none d-sm-block">
                                        <div class="carousel-qr">
                                            <img src="images/qrcode.png" alt="" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section class="py-4 py-sm-5" >
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <div class="head-text un-head">
                                <Link to="adrule"><h1>Advertize Here</h1> </Link>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div class="col-md-11">

                            <div class="row experiance-slide mt-3 mt-sm-5">
                                <div class="col-md-6">
                                    <Slider {...sliderfirstsetting}>
                                        <div>
                                            <div class="experiance-box new-experiance" onClick={handleslider} >
                                                <img src="images/new.png" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="experiance-box new-experiance" onClick={handleslider}>
                                                <img src="images/new.png" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="experiance-box new-experiance" onClick={handleslider}>
                                                <img src="images/new.png" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="experiance-box new-experiance" onClick={handleslider}>
                                                <img src="images/new.png" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="experiance-box new-experiance" onClick={handleslider}>
                                                <img src="images/new.png" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="experiance-box new-experiance" onClick={handleslider}>
                                                <img src="images/new.png" alt="" />
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                                <div class="col-md-6">
                                    <Slider  {...sliderfirstsetting}>
                                        <div>
                                            <div class="experiance-box new-experiance" onClick={handleslide} >
                                                <img src="images/youtube-play.png" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="experiance-box new-experiance" onClick={handleslide}>
                                                <img src="images/youtube-play.png" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="experiance-box new-experiance" onClick={handleslide}>
                                                <img src="images/youtube-play.png" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="experiance-box new-experiance" onClick={handleslide}>
                                                <img src="images/youtube-play.png" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="experiance-box new-experiance" onClick={handleslide}>
                                                <img src="images/youtube-play.png" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="experiance-box new-experiance" onClick={handleslide}>
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

            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <div class="head-text">
                                <Link to="planchoose"><h1>Our Subscription Plan</h1> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="subscription-plansec py-4 py-sm-5 my-4 my-sm-5">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="subscription-planleft">
                                <div class="row">
                                    <div class="col-md-6 pr-sm-0 mb-4 mb-sm-0">
                                        <div class="standard-plan premium-plan ">
                                            <h2><img src="images/Component-white.png" alt="" /> Standard Plan</h2>
                                            <div class="border-bottom"></div>

                                            <div class="standard-plancontent ">

                                                <div class="d-flex justify-content-between align-items-center mt-3">
                                                    <p>Monthly Subscription (In US$) </p>
                                                    <h1>1</h1>
                                                </div>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <p>Yearly Subscription (In US$) </p>
                                                    <h1>10</h1>
                                                </div>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <p>Posting Display Duration (In Days)</p>
                                                    <h1>25</h1>
                                                </div>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <p>Push Notification Per year </p>
                                                    <h1>50</h1>
                                                </div>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <p>Push Notification Per year </p>
                                                    <h1>180</h1>
                                                </div>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <p>Push Notification Display Duration (In Days) </p>
                                                    <h1>12</h1>
                                                </div>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <p>Push Notification Display Duration (In Days) </p>
                                                    <h1>7</h1>
                                                </div>


                                                <div class="text-center py-0 py-sm-3">
                                                    <Link to="/##"> <button type="button" class="btn choose-advanced "> Choose Basic </button></Link>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6  pl-sm-0">
                                        <div class="standard-plan  new-premium">
                                            <h2><img src="images/Component.png" alt="" />Premium Plan</h2>
                                            <div class="border-bottom"></div>

                                            <div class="standard-plancontent">

                                                <div class="d-flex justify-content-between align-items-center mt-3">
                                                    <p>Monthly Subscription (In US$) </p>
                                                    <h1>2</h1>
                                                </div>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <p>Yearly Subscription (In US$) </p>
                                                    <h1>20</h1>
                                                </div>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <p>Posting Display Duration (In Days)</p>
                                                    <h1>50</h1>
                                                </div>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <p>Push Notification Per year </p>
                                                    <h1>250</h1>
                                                </div>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <p>Push Notification Per year </p>
                                                    <h1>360</h1>
                                                </div>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <p>Push Notification Display Duration (In Days) </p>
                                                    <h1>24</h1>
                                                </div>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <p>Push Notification Display Duration (In Days) </p>
                                                    <h1>30</h1>
                                                </div>
                                                <div class="text-center py-2 py-sm-3">
                                                    <Link to="/##"><button type="button" class="btn choose-btn "> Choose Advance </button> </Link>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h6> Note * :  Posting will be chargable @$1/Post <br /> Notifications chargable @$1/Notification </h6>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="subscription-planlright">
                                <h1>Subscribe Annually & Save More</h1>
                                <div>
                                    <Bar data={data} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="pb-4 pb-sm-5">
                <div class="container">
                    <div class="row mb-3">
                        <div class="col-md-12 text-center">
                            <div class="head-text">
                                <Link to="/##"> <h1>Deals & Promotions</h1> </Link>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div class="col-md-11">
                            <div class="row py-2 py-sm-5">
                                <div class="col-md-3 mb-3 mb-sm-0">
                                    <div class="row ">
                                        <div class="col-md-3 col-3">
                                            <Link to="/DealsPromotions">
                                                <div class="deals-img">
                                                    <img src="images/deal-ship.png" alt="" />
                                                </div>
                                            </Link>

                                        </div>
                                        <div class="col-md-9 col-9">
                                            <div class="deal-content">
                                                <h1>Marine Vessels and Equipment</h1>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 mb-3 mb-sm-0">
                                    <div class="row ">
                                        <div class="col-md-3 col-3">
                                            <Link to="/DealsPromotions">
                                                <div class="deals-img">
                                                    <img src="images/Luxury.png" alt="" />
                                                </div>
                                            </Link>

                                        </div>
                                        <div class="col-md-9 col-9">
                                            <div class="deal-content">
                                                <h1>Offshore Vessels and Equipment</h1>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 mb-3 mb-sm-0">
                                    <div class="row">
                                        <div class="col-md-3 col-3">
                                            <Link to="/DealsPromotions">
                                                <div class="deals-img">
                                                    <img src="images/keys.png" alt="" />
                                                </div>
                                            </Link>

                                        </div>
                                        <div class="col-md-9 col-9">
                                            <div class="deal-content">
                                                <h1>Rental <br class="d-none d-sm-block" /> Equipment</h1>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 mb-3 mb-sm-0">
                                    <div class="row">
                                        <div class="col-md-3 col-3">
                                            <Link to="/DealsPromotions">
                                                <div class="deals-img">
                                                    <img src="images/deal-new2.png" alt="" />
                                                </div>
                                            </Link>

                                        </div>
                                        <div class="col-md-9 col-9">
                                            <div class="deal-content">
                                                <h1>Luxury Vessels <br class="d-none d-sm-block" /> and Crafts</h1>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-center mt-0 mt-sm-5">
                        <div class="col-md-9 col-12">
                            <div class="row">
                                <div class="col-md-4 mb-3 mb-sm-0">
                                    <div class="row">
                                        <div class="col-md-3 col-3 ">
                                            <Link to="/DealsPromotions">
                                                <div class="deals-img">
                                                    <img src="images/Deal-new.png" alt="" />
                                                </div>
                                            </Link>

                                        </div>
                                        <div class="col-md-9 col-9 ">
                                            <div class="deal-content">
                                                <h1>Marine and <br class="d-none d-sm-block" /> Offshore Products</h1>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3 mb-sm-0">
                                    <div class="row">
                                        <div class="col-md-3 col-3">
                                            <Link to="/DealsPromotions">
                                                <div class="deals-img mr-3">
                                                    <img src="images/marine.png" alt="" />
                                                </div>
                                            </Link>

                                        </div>
                                        <div class="col-md-9 col-9">
                                            <div class="deal-content">
                                                <h1>Marine and <br class="d-none d-sm-block" />  Offshore Sparess</h1>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4 mb-3 mb-sm-0">
                                    <div class="row">
                                        <div class="col-md-3 col-3">

                                            <Link to="/DealsPromotions">
                                                <div class="deals-img mr-3">
                                                    <img src="images/hand.png" alt="" />
                                                </div>
                                            </Link>

                                        </div>
                                        <div class="col-md-9 col-9">
                                            <div class="deal-content">
                                                <h1>Maintenance  <br class="d-none d-sm-block" />  & Support Services</h1>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <section class="py-0  py-sm-5">
                <div class="container">
                    <div class="row ">
                        <div class="col-md-12 text-center">
                            <div class="head-text">
                                <h1>Recently Added</h1>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div class="col-md-10">
                            <div class="row mt-4 mt-sm-5 align-items-center">
                                <div class="col-md-3 col-6 mb-4">
                                    <div class="product">
                                        <div class="product-layer">
                                            <div class="recently-img newrecently-img">
                                                <img src="images/add-min.png" alt="" />
                                            </div>
                                            <p>Marine Vessels <br /> and Equipment</p>
                                        </div>
                                        <div class="product-img">
                                            <img src="images/Add1.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3  col-6 mb-4">
                                    <div class="product">
                                        <div class="product-layer">
                                            <div class="recently-img newrecently-img">
                                                <img src="images/add-min2.png" alt="" />
                                            </div>
                                            <p>Offshore Vessels <br /> and Equipment </p>
                                        </div>
                                        <div class="product-img">
                                            <img src="images/Add5.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3  col-6 mb-4">
                                    <div class="product">
                                        <div class="product-layer">
                                            <div class="recently-img newrecently-img">
                                                <img src="images/add-minkey.png" alt="" />
                                            </div>
                                            <p>Rental <br /> Equipment</p>
                                        </div>
                                        <div class="product-img">
                                            <img src="images/Add4.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3  col-6 mb-4">
                                    <div class="product">
                                        <div class="product-layer">
                                            <div class="recently-img newrecently-img">
                                                <img src="images/add-min4.png" alt="" />
                                            </div>
                                            <p>Luxury Vessels  <br /> and Crafts</p>
                                        </div>
                                        <div class="product-img">
                                            <img src="images/Add6.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row justify-content-center ">
                                <div class="col-md-9">
                                    <div class="row">
                                        <div class="col-md-4  col-6 ">
                                            <div class="product">
                                                <div class="product-layer black-layerproduct">
                                                    <div class="recently-img newrecently-img">
                                                        <img src="images/add-min5.png" alt="" />
                                                    </div>
                                                    <p>Marine and <br /> Offshore Products</p>
                                                </div>
                                                <div class="product-img">
                                                    <img src="images/Add7.jpg" alt="" />
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-md-4  col-6 mb-3 mb-sm-0">
                                            <div class="product">
                                                <div class="product-layer black-layerproduct">
                                                    <div class="recently-img newrecently-img">
                                                        <img src="images/add-min6.png" alt="" />
                                                    </div>
                                                    <p>Marine and <br />  Offshore Sparess</p>
                                                </div>
                                                <div class="product-img">
                                                    <img src="images/Add2.jpg" alt="" />

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4  col-6 ">
                                            <div class="product">
                                                <div class="product-layer black-layerproduct">
                                                    <div class="recently-img newrecently-img">
                                                        <img src="images/add-min7.png" alt="" />
                                                    </div>
                                                    <p>Maintenance <br />  & Support Services</p>
                                                </div>
                                                <div class="product-img">
                                                    <img src="images/Add3.jpg" alt="" />
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

            <section class="py-4 py-sm-5">
                <div class="container">

                    <div class="row ">
                        <div class="col-md-12 text-center">
                            <div class="head-text">
                                <h1>Range Of Products</h1>
                            </div>
                        </div>
                    </div>


                    <div class="row justify-content-center mt-4 ">
                        <div class="col-md-11">

                            <div class="main-box">
                                <div class="boxborder">
                                    <p>Marine Engine MS  <br />  Sulzar</p>
                                </div>
                                <div class="boxborder boxborderblue">
                                    <p>Marine Engine MS  <br />    Sulzar</p>
                                </div>
                                <div class="boxborder">
                                    <p>Marine Engine MS  <br />     Sulzar</p>
                                </div>
                                <div class="boxborder boxborderblue">
                                    <p>Marine Engine MS  <br />    Sulzar</p>
                                </div>
                                <div class="boxborder">
                                    <p>Marine Engine MS  <br />     Sulzar</p>
                                </div>

                                <div class="boxborder boxborderblue">
                                    <p>Marine Engine MS  <br />    Sulzar</p>
                                </div>
                                <div class="boxborder">
                                    <p>Marine Engine MS  <br />     Sulzar</p>
                                </div>
                                <div class="boxborder boxborderblue">
                                    <p>Marine Engine MS  <br />    Sulzar</p>
                                </div>
                                <div class="boxborder">
                                    <p>Marine Engine MS  <br />     Sulzar</p>
                                </div>
                                <div class="boxborder boxborderblue">
                                    <p>Marine Engine MS  <br />    Sulzar</p>
                                </div>

                                <div class="boxborder">
                                    <p>Marine Engine MS  <br />  Sulzar</p>
                                </div>
                                <div class="boxborder boxborderblue">
                                    <p>Marine Engine MS  <br />    Sulzar</p>
                                </div>
                                <div class="boxborder">
                                    <p>Marine Engine MS  <br />     Sulzar</p>
                                </div>
                                <div class="boxborder boxborderblue">
                                    <p>Marine Engine MS  <br />    Sulzar</p>
                                </div>

                                <div class="boxborder">
                                    <p>Marine Engine MS  <br />     Sulzar</p>
                                </div>

                                <div class="boxborder boxborderblue">
                                    <p>Marine Engine MS  <br />    Sulzar</p>
                                </div>

                                <div class="boxborder">
                                    <p>Marine Engine MS  <br />     Sulzar</p>
                                </div>

                                <div class="boxborder boxborderblue">
                                    <p>Marine Engine MS  <br />    Sulzar</p>
                                </div>

                                <div class="boxborder">
                                    <p>Marine Engine MS  <br />     Sulzar</p>
                                </div>

                                <div class="boxborder boxborderblue">
                                    <p>Marine Engine MS  <br />    Sulzar</p>
                                </div>

                                <div class="boxborder">
                                    <p>Marine Engine MS  <br />  Sulzar</p>
                                </div>
                                <div class="boxborder boxborderblue">
                                    <p>Marine Engine MS  <br />    Sulzar</p>
                                </div>
                                <div class="boxborder">
                                    <p>Marine Engine MS  <br />     Sulzar</p>
                                </div>
                                <div class="boxborder boxborderblue">
                                    <p>Marine Engine MS  <br />    Sulzar</p>
                                </div>
                                <div class="boxborder">
                                    <p>Marine Engine MS  <br />     Sulzar</p>
                                </div>

                            </div>

                            <div class="row pt-4  pt-sm-5 justify-content-end ">
                                <div class="col-md-5 col-lg-4 col-12 text-right">

                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination">
                                            <li class="page-item">
                                                <a class="page-link gyar-background " href="#" aria-label="Previous">

                                                    <img src="images/Vector.svg" />

                                                    <span class="sr-only">Previous</span>
                                                </a>
                                            </li>
                                            <li class="page-item"><a class="page-link active" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">...</a></li>
                                            <li class="page-item"><a class="page-link" href="#">9</a></li>
                                            <li class="page-item"><a class="page-link" href="#">10</a></li>
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Next">
                                                    <img src="images/Vector-right.svg" />
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <section class="pb-4 pb-sm-5">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <div class="head-text">
                                <h1>Why Sparess</h1>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-4 mt-sm-5">

                        <div class="col pl-0 pr-0">
                            <div class="why-sparessbox">
                                <div class="why-sparessbox-layer">
                                    <div class="why-sparessboximg">
                                        <img src="images/virified.png" alt="" />
                                    </div>
                                    <h1>Verified Sellers</h1>
                                </div>
                                <div class="why-sparessboxbottomimg">
                                    <img src="images/why-sparess1.png" alt="" />
                                </div>
                            </div>
                        </div>

                        <div class="col pl-0 pr-0">
                            <div class="why-sparessbox">
                                <div class="why-sparessbox-layer">
                                    <div class="why-sparessboximg">
                                        <img src="images/virified2.png" alt="" />
                                    </div>
                                    <h1>Used & New Parts</h1>
                                </div>
                                <div class="why-sparessboxbottomimg">
                                    <img src="images/why-sparess2.png" alt="" />
                                </div>
                            </div>

                        </div>
                        <div class="col pl-0 pr-0">

                            <div class="why-sparessbox">
                                <div class="why-sparessbox-layer">
                                    <div class="why-sparessboximg">
                                        <img src="images/virified3.png" alt="" />
                                    </div>
                                    <h1>Global Reach</h1>
                                </div>
                                <div class="why-sparessboxbottomimg">
                                    <img src="images/why-sparess3.png" alt="" />
                                </div>
                            </div>

                        </div>
                        <div class="col pl-0 pr-0">

                            <div class="why-sparessbox">
                                <div class="why-sparessbox-layer">
                                    <div class="why-sparessboximg">
                                        <img src="images/virified4.png" alt="" />
                                    </div>
                                    <h1>Easy Connectivity</h1>
                                </div>
                                <div class="why-sparessboxbottomimg">
                                    <img src="images/why-sparess4.png" alt="" />
                                </div>
                            </div>

                        </div>
                        <div class="col pl-0 pr-0">

                            <div class="why-sparessbox">
                                <div class="why-sparessbox-layer">
                                    <div class="why-sparessboximg">
                                        <img src="images/virified5.png" alt="" />
                                    </div>
                                    <h1>Extensive Range </h1>
                                </div>
                                <div class="why-sparessboxbottomimg">
                                    <img src="images/whya-sparess5.png" alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section class="pb-4 pb-sm-5">
                <div class="container">
                    <div class="row ">
                        <div class="col-md-12 text-center">
                            <div class="head-text">
                                <h1>Blogs</h1>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-center mb-4">
                        <div class="col-md-10">
                            <div class="row mt-3 mt-sm-5">
                                <div class="col-md-12">

                                    <Tabs
                                        defaultActiveKey="home"
                                        id="uncontrolled-tab-example"
                                        className="mb-2 mb-sm-3"
                                    >
                                        <Tab eventKey="all" title="All Post" className='sadaf'>
                                            <div class="row">
                                                <div class="col-md-4 mb-3 mb-sm-0">
                                                    <div class="blogs-box blogs-boxbottomborder">
                                                        <div class="blogs-imgbox">
                                                            <img src="images/neblog1.png" alt="" />
                                                        </div>

                                                        <div class="padding-box">
                                                            <span class="badge box-btn">Lorem Ipsum</span>
                                                            <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                                                the industry's standard dummy text ever since the 1500s,</p>
                                                        </div>
                                                        <h6><Link to="/Blogs">Read More<img src="images/right-arrowhite.png" class="ml-2" alt="" /></Link></h6>

                                                        <div class="date-boxbordertop">
                                                            <div class="row">
                                                                <div class="col-md-6 col-6 border-right">
                                                                    <h5>Jan,25,22</h5>
                                                                </div>
                                                                <div class="col-md-6 col-6">
                                                                    <h5>Jan,25,22</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 mb-3 mb-sm-0">
                                                    <div class="blogs-box blogs-boxbottomborder ">
                                                        <div class="blogs-imgbox">
                                                            <img src="images/newblog2.png" alt="" />
                                                        </div>

                                                        <div class="padding-box">
                                                            <span class="badge box-btn">Lorem Ipsum</span>
                                                            <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                                                the industry's standard dummy text ever since the 1500s,</p>
                                                        </div>
                                                        <h6><Link to="/Blogs">Read More<img src="images/right-arrowhite.png" class="ml-2" alt="" /></Link></h6>
                                                        <div class="date-boxbordertop">
                                                            <div class="row">
                                                                <div class="col-md-6 col-6 border-right">
                                                                    <h5>Jan,25,22</h5>
                                                                </div>
                                                                <div class="col-md-6 col-6">
                                                                    <h5>Jan,25,22</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="blogs-box blogs-boxbottomborder">

                                                        <div class="blogs-imgbox">
                                                            <img src="images/newblog3.png" alt="" />
                                                        </div>


                                                        <div class="padding-box">
                                                            <span class="badge box-btn">Lorem Ipsum</span>
                                                            <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                                                the industry's standard dummy text ever since the 1500s,</p>
                                                        </div>
                                                        <h6><Link to="/Blogs">Read More<img src="images/right-arrowhite.png" class="ml-2" alt="" /></Link></h6>
                                                        <div class="date-boxbordertop">
                                                            <div class="row">
                                                                <div class="col-md-6 col-6 border-right">
                                                                    <h5>Jan,25,22</h5>
                                                                </div>
                                                                <div class="col-md-6 col-6">
                                                                    <h5>Jan,25,22</h5>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </Tab>

                                        <Tab eventKey="home" title="Industries">
                                            <div class="row">
                                                <div class="col-md-4 mb-3 mb-sm-0">
                                                    <div class="blogs-box blogs-boxbottomborder">
                                                        <div class="blogs-imgbox">
                                                            <img src="images/neblog1.png" alt="" />
                                                        </div>

                                                        <div class="padding-box">
                                                            <span class="badge box-btn">Lorem Ipsum</span>
                                                            <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                                                the industry's standard dummy text ever since the 1500s,</p>
                                                        </div>
                                                        <h6><Link to="/Blogs">Read More<img src="images/right-arrowhite.png" class="ml-2" alt="" /></Link></h6>

                                                        <div class="date-boxbordertop">
                                                            <div class="row">
                                                                <div class="col-md-6 col-6 border-right">
                                                                    <h5>Jan,25,22</h5>
                                                                </div>
                                                                <div class="col-md-6 col-6">
                                                                    <h5>Jan,25,22</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 mb-3 mb-sm-0">
                                                    <div class="blogs-box blogs-boxbottomborder ">
                                                        <div class="blogs-imgbox">
                                                            <img src="images/newblog2.png" alt="" />
                                                        </div>

                                                        <div class="padding-box">
                                                            <span class="badge box-btn">Lorem Ipsum</span>
                                                            <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                                                the industry's standard dummy text ever since the 1500s,</p>
                                                        </div>
                                                        <h6><Link to="/Blogs">Read More<img src="images/right-arrowhite.png" class="ml-2" alt="" /></Link></h6>
                                                        <div class="date-boxbordertop">
                                                            <div class="row">
                                                                <div class="col-md-6 col-6 border-right">
                                                                    <h5>Jan,25,22</h5>
                                                                </div>
                                                                <div class="col-md-6 col-6">
                                                                    <h5>Jan,25,22</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="blogs-box blogs-boxbottomborder">

                                                        <div class="blogs-imgbox">
                                                            <img src="images/newblog3.png" alt="" />
                                                        </div>


                                                        <div class="padding-box">
                                                            <span class="badge box-btn">Lorem Ipsum</span>
                                                            <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                                                the industry's standard dummy text ever since the 1500s,</p>
                                                        </div>
                                                        <h6><Link to="/Blogs">Read More<img src="images/right-arrowhite.png" class="ml-2" alt="" /></Link></h6>
                                                        <div class="date-boxbordertop">
                                                            <div class="row">
                                                                <div class="col-md-6 col-6 border-right">
                                                                    <h5>Jan,25,22</h5>
                                                                </div>
                                                                <div class="col-md-6 col-6">
                                                                    <h5>Jan,25,22</h5>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="profile" title="Business">
                                            <div class="row">
                                                <div class="col-md-4 mb-3 mb-sm-0">
                                                    <div class="blogs-box blogs-boxbottomborder">
                                                        <div class="blogs-imgbox">
                                                            <img src="images/neblog1.png" alt="" />
                                                        </div>

                                                        <div class="padding-box">
                                                            <span class="badge box-btn">Lorem Ipsum</span>
                                                            <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                                                the industry's standard dummy text ever since the 1500s,</p>
                                                        </div>
                                                        <h6><Link to="/Blogs">Read More<img src="images/right-arrowhite.png" class="ml-2" alt="" /></Link></h6>

                                                        <div class="date-boxbordertop">
                                                            <div class="row">
                                                                <div class="col-md-6 col-6 border-right">
                                                                    <h5>Jan,25,22</h5>
                                                                </div>
                                                                <div class="col-md-6 col-6">
                                                                    <h5>Jan,25,22</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 mb-3 mb-sm-0">
                                                    <div class="blogs-box blogs-boxbottomborder ">
                                                        <div class="blogs-imgbox">
                                                            <img src="images/newblog2.png" alt="" />
                                                        </div>

                                                        <div class="padding-box">
                                                            <span class="badge box-btn">Lorem Ipsum</span>
                                                            <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                                                the industry's standard dummy text ever since the 1500s,</p>
                                                        </div>
                                                        <h6><Link to="/Blogs">Read More<img src="images/right-arrowhite.png" class="ml-2" alt="" /></Link></h6>
                                                        <div class="date-boxbordertop">
                                                            <div class="row">
                                                                <div class="col-md-6 col-6 border-right">
                                                                    <h5>Jan,25,22</h5>
                                                                </div>
                                                                <div class="col-md-6 col-6">
                                                                    <h5>Jan,25,22</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="blogs-box blogs-boxbottomborder">

                                                        <div class="blogs-imgbox">
                                                            <img src="images/newblog3.png" alt="" />
                                                        </div>


                                                        <div class="padding-box">
                                                            <span class="badge box-btn">Lorem Ipsum</span>
                                                            <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                                                the industry's standard dummy text ever since the 1500s,</p>
                                                        </div>
                                                        <h6><Link to="/Blogs">Read More<img src="images/right-arrowhite.png" class="ml-2" alt="" /></Link></h6>
                                                        <div class="date-boxbordertop">
                                                            <div class="row">
                                                                <div class="col-md-6 col-6 border-right">
                                                                    <h5>Jan,25,22</h5>
                                                                </div>
                                                                <div class="col-md-6 col-6">
                                                                    <h5>Jan,25,22</h5>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="contact" title="Technology">
                                            <div class="row">
                                                <div class="col-md-4 mb-3 mb-sm-0">
                                                    <div class="blogs-box blogs-boxbottomborder">
                                                        <div class="blogs-imgbox">
                                                            <img src="images/neblog1.png" alt="" />
                                                        </div>

                                                        <div class="padding-box">
                                                            <span class="badge box-btn">Lorem Ipsum</span>
                                                            <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                                                the industry's standard dummy text ever since the 1500s,</p>
                                                        </div>
                                                        <h6><Link to="/Blogs">Read More<img src="images/right-arrowhite.png" class="ml-2" alt="" /></Link></h6>

                                                        <div class="date-boxbordertop">
                                                            <div class="row">
                                                                <div class="col-md-6 col-6 border-right">
                                                                    <h5>Jan,25,22</h5>
                                                                </div>
                                                                <div class="col-md-6 col-6">
                                                                    <h5>Jan,25,22</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 mb-3 mb-sm-0">
                                                    <div class="blogs-box blogs-boxbottomborder ">
                                                        <div class="blogs-imgbox">
                                                            <img src="images/newblog2.png" alt="" />
                                                        </div>

                                                        <div class="padding-box">
                                                            <span class="badge box-btn">Lorem Ipsum</span>
                                                            <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                                                the industry's standard dummy text ever since the 1500s,</p>
                                                        </div>
                                                        <h6><Link to="/Blogs">Read More<img src="images/right-arrowhite.png" class="ml-2" alt="" /></Link></h6>
                                                        <div class="date-boxbordertop">
                                                            <div class="row">
                                                                <div class="col-md-6 col-6 border-right">
                                                                    <h5>Jan,25,22</h5>
                                                                </div>
                                                                <div class="col-md-6 col-6">
                                                                    <h5>Jan,25,22</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="blogs-box blogs-boxbottomborder">

                                                        <div class="blogs-imgbox">
                                                            <img src="images/newblog3.png" alt="" />
                                                        </div>


                                                        <div class="padding-box">
                                                            <span class="badge box-btn">Lorem Ipsum</span>
                                                            <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                                                the industry's standard dummy text ever since the 1500s,</p>
                                                        </div>
                                                        <h6><Link to="/Blogs">Read More<img src="images/right-arrowhite.png" class="ml-2" alt="" /></Link></h6>
                                                        <div class="date-boxbordertop">
                                                            <div class="row">
                                                                <div class="col-md-6 col-6 border-right">
                                                                    <h5>Jan,25,22</h5>
                                                                </div>
                                                                <div class="col-md-6 col-6">
                                                                    <h5>Jan,25,22</h5>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </Tab>

                                    </Tabs>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section class="py-4 py-sm-5 about-sec">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <div class="about-sechead">
                                <h1>Tell us about your experience with Sparess</h1>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div class="col-md-11">
                            <div class="row mt-3 mt-sm-5 tell-slidenew ">
                                <div class="col-md-12">

                                    <Slider className="servslider" {...servicesettings}>
                                        <div>
                                            <div class="userreviwe">
                                                <div class="row align-items-center">
                                                    <div class="col-md-6 mb-2 mb-sm-0">
                                                        <div class="userreviwe-box">
                                                            <div class="userreviwe-boxbg">
                                                                <h1>Andrew <br /> Rathore</h1>
                                                                <p>Executive</p>
                                                                <h6><img src="images/startorange.png" alt="" /> <img src="images/startorange.png" alt="" />
                                                                    <img src="images/startorange.png" alt="" /> <img src="images/startorange.png" alt="" /></h6>
                                                            </div>
                                                            <div class="userreview-img">
                                                                <img src="images/user2.png" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 pl-3 pl-sm-0">
                                                        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="userreviwe">
                                                <div class="row align-items-center">
                                                    <div class="col-md-6 mb-2 mb-sm-0">
                                                        <div class="userreviwe-box">
                                                            <div class="userreviwe-boxbg">
                                                                <h1>Andrew <br /> Rathore</h1>
                                                                <p>Executive</p>
                                                                <h6><img src="images/startorange.png" alt="" /> <img src="images/startorange.png" alt="" />
                                                                    <img src="images/startorange.png" alt="" /> <img src="images/startorange.png" alt="" /></h6>
                                                            </div>
                                                            <div class="userreview-img">
                                                                <img src="images/user1.png" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 pl-3 pl-sm-0">
                                                        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="userreviwe">
                                                <div class="row align-items-center">
                                                    <div class="col-md-6 mb-2 mb-sm-0">
                                                        <div class="userreviwe-box">
                                                            <div class="userreviwe-boxbg">
                                                                <h1>Andrew <br /> Rathore</h1>
                                                                <p>Executive</p>
                                                                <h6><img src="images/startorange.png" alt="" /> <img src="images/startorange.png" alt="" />
                                                                    <img src="images/startorange.png" alt="" /> <img src="images/startorange.png" alt="" /></h6>
                                                            </div>
                                                            <div class="userreview-img">
                                                                <img src="images/user2.png" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 pl-3 pl-sm-0">
                                                        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="userreviwe">
                                                <div class="row align-items-center">
                                                    <div class="col-md-6 mb-2 mb-sm-0">
                                                        <div class="userreviwe-box">
                                                            <div class="userreviwe-boxbg">
                                                                <h1>Andrew <br /> Rathore</h1>
                                                                <p>Executive</p>
                                                                <h6><img src="images/startorange.png" alt="" /> <img src="images/startorange.png" alt="" />
                                                                    <img src="images/startorange.png" alt="" /> <img src="images/startorange.png" alt="" /></h6>
                                                            </div>
                                                            <div class="userreview-img">
                                                                <img src="images/user1.png" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 pl-3 pl-sm-0">
                                                        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="userreviwe">
                                                <div class="row align-items-center">
                                                    <div class="col-md-6 mb-2 mb-sm-0">
                                                        <div class="userreviwe-box">
                                                            <div class="userreviwe-boxbg">
                                                                <h1>Andrew <br /> Rathore</h1>
                                                                <p>Executive</p>
                                                                <h6><img src="images/startorange.png" alt="" /> <img src="images/startorange.png" alt="" />
                                                                    <img src="images/startorange.png" alt="" /> <img src="images/startorange.png" alt="" /></h6>
                                                            </div>
                                                            <div class="userreview-img">
                                                                <img src="images/user2.png" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6  pl-3 pl-sm-0">
                                                        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="text-center btntop-padding">
                        <button type="button" class=" review-btn">Review Sparess</button>
                    </div>
                </div>
            </section>

            <section class="py-4 py-sm-5">
                <div class="container">
                    <div class="row py-4">
                        <div class="col-md-12">
                            <div class="scan-section">
                                <div class="row align-items-center">
                                    <div class="col-md-2 d-none d-sm-block">
                                        <img src="images/scanleft.png" class="img-fluid hand-imgleft" alt="" />
                                    </div>

                                    <div class="col-md-4 pl-3 pl-sm-0">
                                        <div class="scan-sectext">
                                            <h1>Try our Sparess App !!</h1>
                                            <p>Get Connected to Buyers,Sellers & Service  Providers  for your Marine & Offshore Needs,
                                                Anywhere and Anytime with your Mobile</p>
                                        </div>
                                    </div>
                                    <div class="col-md-1"></div>
                                    <div class="col-md-2  col-6  mt-sm-0 mt-2">
                                        <div class="footbtn mb-3 " onClick={handleShows}  >
                                            <div class="row align-items-center">
                                                <div class="col-md-3 pr-0 col-3"><img src="images/play-white.png" alt="" /></div>
                                                <div class="col-md-9 pl-2 col-9"><h5>Get it on <br /> <span>Google Play</span></h5></div>
                                            </div>
                                        </div>

                                        <div class="footbtn" onClick={handleShows}  >
                                            <div class="row align-items-center">
                                                <div class="col-md-3 pr-0 col-3"><img src="images/apple-white.png" alt="" /></div>
                                                <div class="col-md-9 pl-2 col-9"><h5>Get it on <br /> <span>Apple Store</span></h5></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-6  mt-2 mt-sm-0">
                                        <div class="new-qrbox">
                                            <img src="images/scan-about.png" alt="" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            <Footer ></Footer>
            <Modal show={slide} onHide={handleClos} className="qr-popup"
                size="lg"
            >
                <Modal.Header closeButton >
                    <Modal.Title>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div class="row text-center">
                        <div class="col-md-12">
                            <div class="slider-popupimg">
                                <img src="images/slider-2-pop.png" alt="" />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <button type="button" class="btn btn-outline-primary post-btn mr-2">BACK</button>
                    <button type="button" class="btn btn-login">PROCEED TO PAYMENT</button>
                   
                </Modal.Footer> */}
            </Modal>




            <Modal show={slider} onHide={handleClose} className="qr-popup" size="lg" >
                <Modal.Header closeButton >
                    <Modal.Title>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div class="row text-center">
                        <div class="col-md-12">
                            <div class="slider-popupimg">
                                <img src="images/slider-1-pop.png" alt="" />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <button type="button" class="btn btn-outline-primary post-btn mr-2">BACK</button>
                    <button type="button" class="btn btn-login">PROCEED TO PAYMENT</button>
                   
                </Modal.Footer> */}
            </Modal>


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



export default HomeNew;