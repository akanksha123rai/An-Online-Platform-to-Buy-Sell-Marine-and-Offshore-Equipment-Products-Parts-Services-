import React from 'react';

import Header from '../include/header';
import Footer from '../include/footer';

function Readmore() {

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
                                <h1>Read More</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-4 py-sm-5">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-11">

                            <div className="row ">
                                <div className="col-md-12">
                                    <div class="industries-text">
                                        <div class="row justify-content-center">
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
                                                        <div class="text-right mt-2">
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
                                            
                                        </div>
                                    </div>
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

export default Readmore;