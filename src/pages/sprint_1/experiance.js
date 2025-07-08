// import React from 'react';
import React, { useState } from 'react';
import Slider from "react-slick";
import { Modal } from 'react-bootstrap';
import Header from '../include/header';
import Footer from '../include/footer';
import { Link } from "react-router-dom";

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

function Experience() {

    const [shows, setShows] = useState(false);
    const handleCloses = () => setShows(false);
    const handleShows = () => setShows(true);


    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

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
                                        <h1>Write your Experience with us</h1>
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-2 mt-sm-5">
                                <div class="col-md-5">
                                    <h5 class="what-saytext"> What People saying </h5>
                                    <div class="experiance-left ">
                                        <div class="row ">
                                            <div class="col-md-7">
                                                <div class="experiance-boxpic mb-3">
                                                    <img src="images/user-picexperiance.png" />
                                                </div>
                                                <h1>Saumya Thakkar</h1>
                                            </div>
                                            <div class="col-md-5">
                                                <h5>
                                                    <a href="#"><img src="images/fill-orangestar.png" alt="" /></a>
                                                    <a href="#"><img src="images/fill-orangestar.png" alt="" /></a>
                                                    <a href="#"><img src="images/fill-orangestar.png" alt="" /></a>
                                                    <a href="#"><img src="images/orange-star.png" alt="" /></a>
                                                    <a href="#"><img src="images/orange-star.png" alt="" /></a>
                                                    {/* <a href="#"><img src="images/orange-star.png" alt="" /></a> */}
                                                </h5>

                                               
                                            </div>


                                        </div>

                                        <h6>“ Nice Product ”</h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                                            <h2 className="text-right">5 Jan 2022</h2>

                                        <hr />

                                        <div class="row">
                                            <div class="col-md-7">
                                                <div class="row">
                                                    <div class="col-md-4 col-3">
                                                        <div class="experiance-boxpic">
                                                            <img src="images/user-whatsay2.png" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-8 col-9 pl-0 pr-0">
                                                        <h1>Saumya Thakkar</h1>
                                                        <h2>5 Jan 2022</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-5">
                                                <h5>
                                                    <a href="#"><img src="images/fill-orangestar.png" alt="" /></a>
                                                    <a href="#"><img src="images/fill-orangestar.png" alt="" /></a>
                                                    <a href="#"><img src="images/fill-orangestar.png" alt="" /></a>
                                                    <a href="#"><img src="images/fill-orangestar.png" alt="" /></a>
                                                    <a href="#"><img src="images/orange-star.png" alt="" /></a>
                                                    {/* <a href="#"><img src="images/orange-star.png" alt="" /></a> */}
                                                    {/* <a href="#"><img src="images/orange-star.png" alt="" /></a> */}
                                                </h5>
                                            </div>
                                        </div>
                                        <h6>“ Nice Product ”</h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                                        <div class="row justify-content-end">
                                            <div class="col-md-10">
                                                <div class="row mt-3">
                                                    <div class="col-md-8 col-8 border-leftcolor pr-0 pb-3">
                                                        <h4>Response from Owner</h4>
                                                        <p>Thanks for your valuable feedback</p>
                                                    </div>
                                                    <div class="col-md-4 col-4 pl-0">
                                                        <h3>2 Weeks ago</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-md-7">
                                                <div class="row">
                                                    <div class="col-md-4 col-3">
                                                        <div class="experiance-boxpic">
                                                            <img src="images/user-whatsay3.png" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-8 col-9 pl-0 pr-0">
                                                        <h1>Saumya Thakkarbhn</h1>
                                                        <h2>5 Jan 2022</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-5">
                                                <h5>
                                                    <a href="#"><img src="images/fill-orangestar.png" alt="" /></a>
                                                    <a href="#"><img src="images/fill-orangestar.png" alt="" /></a>
                                                    <a href="#"><img src="images/fill-orangestar.png" alt="" /></a>
                                                    <a href="#"><img src="images/fill-orangestar.png" alt="" /></a>
                                                    <a href="#"><img src="images/orange-star.png" alt="" /></a>
                                                </h5>
                                            </div>
                                        </div>
                                        <h6>“ Nice Product ”</h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                                    </div>
                                </div>

                                <div class="col-md-7">
                                    <div class="row mt-4 experiance-slide ">
                                        <div class="col-md-12 ">
                                            <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}  {...sliderfirstsetting}>
                                                <div>
                                                    <div class="experiance-box">
                                                        <img src="images/topbanner-img.png" alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="experiance-box">
                                                        <img src="images/topbanner-img.png" alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="experiance-box">
                                                        <img src="images/topbanner-img.png" alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="experiance-box">
                                                        <img src="images/topbanner-img.png" alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="experiance-box">
                                                        <img src="images/topbanner-img.png" alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="experiance-box">
                                                        <img src="images/topbanner-img.png" alt="" />
                                                    </div>
                                                </div>
                                            </Slider>
                                        </div>
                                        <div class="col-md-10  new-experiance-slide ">
                                            <Slider asNavFor={nav1}
                                                ref={(slider2) => setNav2(slider2)}
                                                {...slidersecondsetting}
                                            >
                                                <div>
                                                    <div class="experiance">
                                                        <div class="experiance-layer"></div>
                                                        <div class="experiance-img">
                                                            <img src="images/bottom-img.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="experiance">
                                                        <div class="experiance-layer"></div>
                                                        <div class="experiance-img">
                                                            <img src="images/exp-slide2.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="experiance">
                                                        <div class="experiance-layer"></div>
                                                        <div class="experiance-img">
                                                            <img src="images/exp-slide3.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="experiance">
                                                        <div class="experiance-layer"></div>
                                                        <div class="experiance-img">
                                                            <img src="images/exp-slide4.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="experiance">
                                                        <div class="experiance-layer"></div>
                                                        <div class="experiance-img">
                                                            <img src="images/bottom-img.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="experiance">
                                                        <div class="experiance-layer"></div>
                                                        <div class="experiance-img">
                                                            <img src="images/exp-slide2.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Slider>
                                        </div>

                                        <div class="col-md-12">
                                            <hr />
                                            <div class="form-boxcontent">
                                                <h1>Rate your experiance with us  <span> (Require) </span> </h1>
                                                <h5>
                                                    <a href="#"><img src="images/orange-star.png" alt="" /></a>
                                                    <a href="#"><img src="images/orange-star.png" alt="" /></a>
                                                    <a href="#"><img src="images/orange-star.png" alt="" /></a>
                                                    <a href="#"><img src="images/orange-star.png" alt="" /></a>
                                                    <a href="#"><img src="images/orange-star.png" alt="" /></a>
                                                </h5>
                                                <div class="row mt-3">
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label class="new-labelexp"> Upload Photo </label>
                                                            <div class="upload-btn-wrapper newupload-btn-wrapper" >
                                                                <button class="uploadBtn">
                                                                    <img src="images/camera.png" alt="" />
                                                                </button>
                                                                <input type="file" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label class="new-labelexp"> Upload Photo </label>
                                                            <div class="upload-btn-wrapper newupload-btn-wrapper" >
                                                                <button class="uploadBtn">
                                                                    <img src="images/camera.png" alt="" />
                                                                </button>
                                                                <input type="file" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label class="new-labelexp"> Upload Photo </label>
                                                            <div class="upload-btn-wrapper newupload-btn-wrapper" >
                                                                <button class="uploadBtn">
                                                                    <img src="images/camera.png" alt="" />
                                                                </button>
                                                                <input type="file" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label class="new-labelexp"> Upload Photo </label>
                                                            <div class="upload-btn-wrapper newupload-btn-wrapper" >
                                                                <button class="uploadBtn">
                                                                    <img src="images/camera.png" alt="" />
                                                                </button>
                                                                <input type="file" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label class="new-labelexp" >Leave a review <span>(Require)</span> </label>
                                                            <textarea class="form-control textarea-box " rows="4"></textarea>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-8">
                                                        <div class="form-group">
                                                            <label class="new-labelexp" > Give your review a title <span> (Require)</span> </label>
                                                            <input type="number" class="form-control textarea-box" />
                                                            {/* <input type="text" className="form-control" inputmode="numeric"></input> */}
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group">
                                                            <label class="new-labelexp" > Your Name  <span class="new-optional" > (Optional)</span> </label>
                                                            <input type="email" class="form-control textarea-box" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-10">
                                                        <div class="form-group experiance-check">
                                                            <input class="filled-in" type="checkbox" value="" id="Check" />
                                                            <label class="exp-labelcheck exp-label " for="Check">
                                                                I certify that this review is based on my own experience and is my genuine opinion
                                                                of this establishment and that I have no personal or business relationship with this
                                                                establishment, and have not been offered any incentive or payment originating from the
                                                                establishment to write this review.
                                                            </label>
                                                        </div>
                                                        <button type="button" class=" search-btn"> Submit your Review </button>
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

                    <div class="row justify-content-center mb-2 mb-sm-5">
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

export default Experience;