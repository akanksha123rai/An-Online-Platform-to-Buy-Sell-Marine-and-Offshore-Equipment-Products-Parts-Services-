import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

import Header from '../include/header';

import Footer from '../include/footer';
// import { Container } from 'react-bootstrap';
// import { Link } from "react-router-dom";

// import Carousel from 'react-bootstrap/Carousel';
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
// import Sonnet from '../../components/Sonnet';



function MyWishlist() {

    

    const [shows, setShows] = useState(false);
    const handleCloses = () => setShows(false);
    const handleShows = () => setShows(true);

    return (
        <>


         <div class="innerheader">
           <Header></Header>
        </div>

        <div class="head-bottoimg" >
           <img src="images/head-myexp.png" />
        </div>
            

            <section class="py-4 py-sm-5">
                <div class="container">

                    <div class="row justify-content-center">
                        <div class="col-md-11">
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <div class="head-textblack">
                                        <h1>My Wishlist</h1>
                                        <p>6 Items in your Wishlist</p>
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-5">
                                <div class="col-md-3 mb-4">
                                    <div class="my-wishlistbox">
                                        <div class="cross-img">
                                            <img src="images/orange-cross.png" alt="" />
                                        </div>
                                        <div class="wishlist-imgbox">
                                            <img src="images/wishlist1.png" alt="" />
                                        </div>
                                        <div class="my-wishlistboxcontent">
                                            <div class="row">
                                                <div class="col-md-7 col-6">
                                                    <p>Marine Engine MS Sulzar</p>

                                                </div>
                                                <div class="col-md-5 col-6">
                                                    <h6>49.00$</h6>
                                                    <h5><a href="#"><img src="images/orange-star.png" alt="" /></a>
                                                        <a href="#"><img src="images/orange-star.png" alt="" /></a>
                                                        <a href="#"><img src="images/orange-star.png" alt="" /></a></h5>

                                                </div>
                                            </div>
                                            <h4>Delta Separation</h4>
                                            <div class="text-center pt-3">
                                                <button type="button" class=" review-btn">Contact Seller</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="col-md-3 mb-4">
                                    <div class="my-wishlistbox">
                                        <div class="cross-img">
                                            <img src="images/orange-cross.png" alt="" />
                                        </div>
                                        <div class="wishlist-imgbox">
                                            <img src="images/wishlist2.png" alt="" />
                                        </div>
                                        <div class="my-wishlistboxcontent">
                                            <div class="row">
                                                <div class="col-md-7 col-6">
                                                    <p>Marine Engine MS Sulzar</p>

                                                </div>
                                                <div class="col-md-5 col-6">
                                                    <h6>49.00$</h6>
                                                    <h5><a href="#"><img src="images/orange-star.png" alt="" /></a>
                                                        <a href="#"><img src="images/orange-star.png" alt="" /></a>
                                                        <a href="#"><img src="images/orange-star.png" alt="" /></a></h5>

                                                </div>
                                            </div>
                                            <h4>Delta Separation</h4>
                                            <div class="text-center pt-3">
                                                <button type="button" class=" review-btn">Contact Seller</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="col-md-3 mb-4">
                                    <div class="my-wishlistbox">
                                        <div class="cross-img">
                                            <img src="images/orange-cross.png" alt="" />
                                        </div>
                                        <div class="wishlist-imgbox">
                                            <img src="images/wishlist3.png" alt="" />
                                        </div>
                                        <div class="my-wishlistboxcontent">
                                            <div class="row">
                                                <div class="col-md-7 col-6">
                                                    <p>Marine Engine MS Sulzar</p>

                                                </div>
                                                <div class="col-md-5 col-6">
                                                    <h6>49.00$</h6>
                                                    <h5><a href="#"><img src="images/orange-star.png" alt="" /></a>
                                                        <a href="#"><img src="images/orange-star.png" alt="" /></a>
                                                        <a href="#"><img src="images/orange-star.png" alt="" /></a></h5>

                                                </div>
                                            </div>
                                            <h4>Delta Separation</h4>
                                            <div class="text-center pt-3">
                                                <button type="button" class=" review-btn">Contact Seller</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="col-md-3 mb-4">
                                    <div class="my-wishlistbox">
                                        <div class="cross-img">
                                            <img src="images/orange-cross.png" alt="" />
                                        </div>
                                        <div class="wishlist-imgbox">
                                            <img src="images/wishlist5.png" alt="" />
                                        </div>
                                        <div class="my-wishlistboxcontent">
                                            <div class="row">
                                                <div class="col-md-7 col-6">
                                                    <p>Marine Engine MS Sulzar</p>

                                                </div>
                                                <div class="col-md-5 col-6">
                                                    <h6>49.00$</h6>
                                                    <h5><a href="#"><img src="images/orange-star.png" alt="" /></a>
                                                        <a href="#"><img src="images/orange-star.png" alt="" /></a>
                                                        <a href="#"><img src="images/orange-star.png" alt="" /></a></h5>

                                                </div>
                                            </div>
                                            <h4>Delta Separation</h4>
                                            <div class="text-center pt-3">
                                                <button type="button" class=" review-btn">Contact Seller</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="col-md-3 mb-4">
                                    <div class="my-wishlistbox">
                                        <div class="cross-img">
                                            <img src="images/orange-cross.png" alt="" />
                                        </div>
                                        <div class="wishlist-imgbox">
                                            <img src="images/wishlist6.png" alt="" />
                                            <div class="out-stock">
                                                <p>OUT OF STOCK</p>
                                            </div>
                                        </div>
                                        <div class="my-wishlistboxcontent">
                                            <div class="row">
                                                <div class="col-md-7 col-6">
                                                    <p>Marine Engine MS Sulzar</p>

                                                </div>
                                                <div class="col-md-5 col-6">
                                                    <h6>49.00$</h6>
                                                    <h5><a href="#"><img src="images/orange-star.png" alt="" /></a>
                                                        <a href="#"><img src="images/orange-star.png" alt="" /></a>
                                                        <a href="#"><img src="images/orange-star.png" alt="" /></a></h5>

                                                </div>
                                            </div>
                                            <h4>Delta Separation</h4>
                                            <div class="text-center pt-3">
                                                <button type="button" class=" review-btn">Contact Seller</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="col-md-3 mb-4">
                                    <div class="my-wishlistbox">
                                        <div class="cross-img">
                                            <img src="images/orange-cross.png" alt="" />
                                        </div>
                                        <div class="wishlist-imgbox">
                                            <img src="images/wishlist7.png" alt="" />

                                            <div class="out-stock">
                                                <p>OUT OF STOCK</p>
                                            </div>

                                        </div>
                                        <div class="my-wishlistboxcontent">
                                            <div class="row">
                                                <div class="col-md-7 col-6">
                                                    <p>Marine Engine MS Sulzar</p>

                                                </div>
                                                <div class="col-md-5 col-6">
                                                    <h6>49.00$</h6>
                                                    <h5><a href="#"><img src="images/orange-star.png" alt="" /></a>
                                                        <a href="#"><img src="images/orange-star.png" alt="" /></a>
                                                        <a href="#"><img src="images/orange-star.png" alt="" /></a></h5>

                                                </div>
                                            </div>
                                            <h4>Delta Separation</h4>
                                            <div class="text-center pt-3">
                                                <button type="button" class=" review-btn">Contact Seller</button>
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

                <div class="row justify-content-center pt-0 pt-sm-4 mb-2 mb-sm-5">
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


            <Footer></Footer>

           

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

export default MyWishlist;