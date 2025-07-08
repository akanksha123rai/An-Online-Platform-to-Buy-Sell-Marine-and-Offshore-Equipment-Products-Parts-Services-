import React from 'react';
import { Link } from "react-router-dom";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Header from '../include/header';
import Footer from '../include/footer';

function Blogs() {

    return (
        <>
           
        <div class="innerheader">
           <Header></Header>
        </div>

            <section class="services-sectop blog-tophead">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="services-tophead">
                                <h1>BLOGS</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-4 py-sm-5">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-11">

                            <div class="row mt-2 mt-sm-3 blogs-tab">
                                <div class="col-md-12 ">
                                    <div class="socialnew-images mb-3 mb-sm-0 text-center text-sm-right">
                                        <a href="#"><img src="images/facebook.png" alt="" /></a>
                                        <a href="#"><img src="images/linkedin.png" alt="" /></a>
                                        <a href="#"><img src="images/twitter.png" alt="" /></a>
                                        <a href="#"><img src="images/youtube.png" alt="" /></a>
                                        <a href="#"><img src="images/instagram.png" alt="" /></a>
                                    </div>

                                    <Tabs
                                        defaultActiveKey="home"
                                        id="uncontrolled-tab-example"
                                        className="mb-2 mb-sm-3 "
                                    >
                                        <Tab  eventKey="all-blog" id="firsttab-content" title="All Post">
                                            <div class="industries-text">
                                                <div class="row">
                                                    <div class="col-md-6 mb-3 mb-sm-0">
                                                        <div class="Industriesblog-leftimg mb-3">
                                                            <img src="images/blogleft-img.png" alt="" />
                                                        </div>

                                                        <h1>Lorem Ipsum is simply dummy text of the printing</h1>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy text ever since the 1500s,</p>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy text ever since the 1500s,</p>

                                                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                                            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                                                            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum passages,
                                                            and more recently </h6>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="row">
                                                            <div class="col-md-6 mb-2 mb-sm-4">
                                                                <div class="Industriesblog-rightimg">
                                                                    <img src="images/blogright1.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 mb-2 mb-sm-4">
                                                                <h3>Lorem Ipsum is simply </h3>
                                                                <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                                                <h4><a href="Readmore">Read more <i class="fa fa-arrow-right" aria-hidden="true"></i>  </a>
                                                                </h4>
                                                                <div class="text-right">

                                                                    <button type="button" class="btn share-btn">Share</button>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 mb-2 mb-sm-4">
                                                                <div class="Industriesblog-rightimg">
                                                                    <img src="images/blogright2.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 mb-2 mb-sm-4">
                                                                <h3>Lorem Ipsum is simply </h3>
                                                                <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                                                <h4><a href="Readmore">Read more <i class="fa fa-arrow-right" aria-hidden="true"></i>   </a>
                                                                </h4>
                                                                <div class="text-right">

                                                                    <button type="button" class="btn share-btn">Share</button>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 mb-2 mb-sm-0">
                                                                <div class="Industriesblog-rightimg">
                                                                    <img src="images/new-blogimg.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 mb-2 mb-sm-0">
                                                                <h3>Lorem Ipsum is simply </h3>
                                                                <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                                                <h4><a href="Readmore">Read more <i class="fa fa-arrow-right" aria-hidden="true"></i> </a>
                                                                   
                                                                </h4>
                                                                <div class="text-right">
                                                                    <button type="button" class="btn share-btn">Share</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="red-border"></div>

                                                        <h6 class="mt-2 mt-sm-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                                                            content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                                                            as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions
                                                            have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</h6>


                                                    </div>
                                                    <div class="col-md-12 mt-2">
                                                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                                            type specimen book. It has survived not only five centuries,Lorem Ipsum is simply dummy text of the printing and
                                                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                                            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book. It has survived not only five centuries,</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab>

                                        <Tab eventKey="home" title="Industries">
                                            <div class="industries-text">
                                                <div class="row">
                                                    <div class="col-md-6 mb-3 mb-sm-0">
                                                        <div class="Industriesblog-leftimg mb-3">
                                                            <img src="images/blogleft-img.png" alt="" />
                                                        </div>

                                                        <h1>Lorem Ipsum is simply dummy text of the printing</h1>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy text ever since the 1500s,</p>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy text ever since the 1500s,</p>

                                                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                                            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                                                            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum passages,
                                                            and more recently </h6>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="row">
                                                            <div class="col-md-6 mb-2 mb-sm-4">
                                                                <div class="Industriesblog-rightimg">
                                                                    <img src="images/blogright1.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 mb-2 mb-sm-4">
                                                                <h3>Lorem Ipsum is simply </h3>
                                                                <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                                                <h4><a href="Readmore">Read more <i class="fa fa-arrow-right" aria-hidden="true"></i>  </a>
                                                                </h4>
                                                                <div class="text-right">

                                                                    <button type="button" class="btn share-btn">Share</button>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 mb-2 mb-sm-4">
                                                                <div class="Industriesblog-rightimg">
                                                                    <img src="images/blogright2.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 mb-2 mb-sm-4">
                                                                <h3>Lorem Ipsum is simply </h3>
                                                                <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                                                <h4><a href="Readmore">Read more <i class="fa fa-arrow-right" aria-hidden="true"></i>   </a>
                                                                </h4>
                                                                <div class="text-right">

                                                                    <button type="button" class="btn share-btn">Share</button>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 mb-2 mb-sm-0">
                                                                <div class="Industriesblog-rightimg">
                                                                    <img src="images/new-blogimg.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 mb-2 mb-sm-0">
                                                                <h3>Lorem Ipsum is simply </h3>
                                                                <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                                                <h4><a href="Readmore">Read more <i class="fa fa-arrow-right" aria-hidden="true"></i> </a>
                                                                   
                                                                </h4>
                                                                <div class="text-right">
                                                                    <button type="button" class="btn share-btn">Share</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="red-border"></div>

                                                        <h6 class="mt-2 mt-sm-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                                                            content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                                                            as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions
                                                            have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</h6>


                                                    </div>
                                                    <div class="col-md-12 mt-2">
                                                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                                            type specimen book. It has survived not only five centuries,Lorem Ipsum is simply dummy text of the printing and
                                                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                                            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book. It has survived not only five centuries,</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="profile" title="Business">
                                            <div class="industries-text">
                                                <div class="row">
                                                    <div class="col-md-6 mb-3 mb-sm-0">
                                                        <div class="Industriesblog-leftimg mb-3">
                                                            <img src="images/blogleft-img.png" alt="" />
                                                        </div>

                                                        <h1>Lorem Ipsum is simply dummy text of the printing</h1>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy text ever since the 1500s,</p>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy text ever since the 1500s,</p>

                                                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                                            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                                                            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum passages,
                                                            and more recently </h6>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="row">
                                                            <div class="col-md-6 mb-2 mb-sm-4">
                                                                <div class="Industriesblog-rightimg">
                                                                    <img src="images/blogright1.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 mb-4">
                                                                <h3>Lorem Ipsum is simply </h3>
                                                                <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                                                <h4><a href="Readmore">Read more <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
    
                                                                </h4>
                                                                <div class="text-right">

                                                                    <button type="button" class="btn share-btn">Share</button>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 mb-4">
                                                                <div class="Industriesblog-rightimg">
                                                                    <img src="images/blogright2.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 mb-4">
                                                                <h3>Lorem Ipsum is simply </h3>
                                                                <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                                                <h4><a href="Readmore">Read more <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                                                               
                                                                </h4>
                                                                <div class="text-right">

                                                                    <button type="button" class="btn share-btn">Share</button>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="Industriesblog-rightimg">
                                                                    <img src="images/new-blogimg.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <h3>Lorem Ipsum is simply </h3>
                                                                <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                                                <h4><a href="Readmore">Read more <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                                                                   
                                                                </h4>
                                                                <div class="text-right">

                                                                    <button type="button" class="btn share-btn">Share</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="red-border"></div>

                                                        <h6 class="mt-2 mt-sm-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                                                            content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                                                            as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions
                                                            have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</h6>


                                                    </div>
                                                    <div class="col-md-12 mt-2">
                                                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                                            type specimen book. It has survived not only five centuries,Lorem Ipsum is simply dummy text of the printing and
                                                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                                            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book. It has survived not only five centuries,</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="contact" title="Technology">
                                            <div class="industries-text">
                                                <div class="row">
                                                    <div class="col-md-6 mb-3 mb-sm-0">
                                                        <div class="Industriesblog-leftimg mb-3">
                                                            <img src="images/blogleft-img.png" alt="" />
                                                        </div>

                                                        <h1>Lorem Ipsum is simply dummy text of the printing</h1>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy text ever since the 1500s,</p>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy text ever since the 1500s,</p>

                                                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                                            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                                                            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum passages,
                                                            and more recently </h6>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="row">
                                                            <div class="col-md-6 mb-2 mb-sm-4">
                                                                <div class="Industriesblog-rightimg">
                                                                    <img src="images/blogright1.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 mb-4">
                                                                <h3>Lorem Ipsum is simply </h3>
                                                                <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                                                <h4><a href="Readmore">Read more <i class="fa fa-arrow-right" aria-hidden="true"></i> </a>
                                                                   
                                                                </h4>
                                                                <div class="text-right">

                                                                    <button type="button" class="btn share-btn">Share</button>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 mb-4">
                                                                <div class="Industriesblog-rightimg">
                                                                    <img src="images/blogright2.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 mb-4">
                                                                <h3>Lorem Ipsum is simply </h3>
                                                                <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                                                <h4><a href="Readmore">Read more <i class="fa fa-arrow-right" aria-hidden="true"></i> </a>
                                                                   
                                                                </h4>
                                                                <div class="text-right">

                                                                    <button type="button" class="btn share-btn">Share</button>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="Industriesblog-rightimg">
                                                                    <img src="images/new-blogimg.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <h3>Lorem Ipsum is simply </h3>
                                                                <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                                                <h4><a href="Readmore">Read more <i class="fa fa-arrow-right" aria-hidden="true"></i> </a>
                                                                   
                                                                </h4>
                                                                <div class="text-right">

                                                                    <button type="button" class="btn share-btn">Share</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="red-border"></div>

                                                        <h6 class="mt-2 mt-sm-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                                                            content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                                                            as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions
                                                            have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</h6>


                                                    </div>
                                                    <div class="col-md-12 mt-2">
                                                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                                            type specimen book. It has survived not only five centuries,Lorem Ipsum is simply dummy text of the printing and
                                                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                                            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book. It has survived not only five centuries,</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                                <div class="col-md-12"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="pb-sm-5 pb-4">
                <div class="container">

                    <div class="row justify-content-center">
                        <div class="col-md-11">
                            <div class="industries-text">
                                <div class="row">
                                    <div class="col-md-12 mb-3 mb-sm-5">
                                        <h1>Lorem Ipsum is simply dummy text of the printing</h1>
                                    </div>

                                    <div class="col-md-4 mb-3 mb-sm-4">
                                        <div class="blogs-newimgbox">
                                            <img src="images/new-blog1.png" alt="" />
                                        </div>
                                        <h5>Lorem Ipsum</h5>
                                        <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                        <h3 class="mt-2 mb-lg-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h3>
                                        <h4><a href="Readmore">Read more <i class="fa fa-arrow-right" aria-hidden="true"></i>  </a>
                                           
                                        </h4>
                                        <div class="text-right">
                                            <button type="button" class="btn share-btn">Share</button>
                                        </div>
                                    </div>

                                    <div class="col-md-4 mb-3 mb-sm-4">
                                        <div class="blogs-newimgbox">
                                            <img src="images/new-blog2.png" alt="" />
                                        </div>
                                        <h5>Lorem Ipsum</h5>
                                        <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                        <h3 class="mt-2 mb-lg-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h3>
                                        <h4><a href="Readmore">Read more <i class="fa fa-arrow-right" aria-hidden="true"></i>  </a>
                                           
                                        </h4>
                                        <div class="text-right">
                                            <button type="button" class="btn share-btn">Share</button>
                                        </div>
                                    </div>

                                    <div class="col-md-4 mb-3 mb-sm-4">
                                        <div class="blogs-newimgbox">
                                            <img src="images/blogs-bottom.png" alt="" />
                                        </div>
                                        <h5>Lorem Ipsum</h5>
                                        <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                        <h3 class="mt-2 mb-lg-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h3>
                                        <h4><a href="Readmore">Read more <i class="fa fa-arrow-right" aria-hidden="true"></i> </a>
                                           
                                        </h4>
                                        <div class="text-right">
                                            <button type="button" class="btn share-btn">Share</button>
                                        </div>
                                    </div>

                                    <div class="col-md-4 mb-3 mb-sm-0">
                                        <div class="blogs-newimgbox">
                                            <img src="images/nw-blog4.png" alt="" />
                                        </div>
                                        <h5>Lorem Ipsum</h5>
                                        <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                        <h3 class="mt-2 mb-lg-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h3>
                                        <h4><a href="Readmore">Read more <i class="fa fa-arrow-right" aria-hidden="true"></i>  </a>
                                           
                                        </h4>
                                        <div class="text-right">
                                            <button type="button" class="btn share-btn">Share</button>
                                        </div>
                                    </div>

                                    <div class="col-md-4  mb-3 mb-sm-0">
                                        <div class="blogs-newimgbox">
                                            <img src="images/new-blog5.png" alt="" />
                                        </div>
                                        <h5>Lorem Ipsum</h5>
                                        <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                        <h3 class="mt-2 mb-lg-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h3>
                                        <h4><a href="Readmore">Read more <i class="fa fa-arrow-right" aria-hidden="true"></i>  </a>
                                           
                                        </h4>
                                        <div class="text-right">
                                            <button type="button" class="btn share-btn">Share</button>
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="blogs-newimgbox">
                                            <img src="images/new-blog6.png" alt="" />
                                        </div>
                                        <h5>Lorem Ipsum</h5>
                                        <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                                        <h3 class="mt-2 mb-lg-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h3>
                                        <h4><a href="Readmore">Read more <i class="fa fa-arrow-right" aria-hidden="true"></i> </a>
                                          
                                        </h4>
                                        <div class="text-right">
                                            <button type="button" class="btn share-btn">Share</button>
                                        </div>
                                    </div>

                                </div>
                            </div> </div>
                    </div>

                </div>
            </section>

            <section class="pb-sm-5 pb-4">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-11">
                            <div class="row text-center">
                                <div class="col-md-12">
                                    <div class="head-text">
                                        <h1 class="montserrat">Advertize Here</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-5">
                                <div class="col-md-6 mb-3 mb-sm-0">
                                    <img src="images/Component-blog1.png" alt="" />
                                </div>
                                <div class="col-md-6">
                                    <img src="images/Component-blog2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer></Footer>

        

        </>
    );
}

export default Blogs;