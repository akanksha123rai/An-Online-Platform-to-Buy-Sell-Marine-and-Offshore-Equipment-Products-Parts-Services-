import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Modal } from 'react-bootstrap';

function BuyForm() {

    const [lgShow, setLgShow] = useState(false);

    const [slide, setslide] = useState(false);
    const handleClos = () => setslide(false);
    const handleslide = () => setslide(true);

    const [slider, setslider] = useState(false);
    const handleClose = () => setslider(false);
    const handleslider = () => setslider(true);

    return (

        <>
            <section class="pb-4 pb-sm-5 pt-4 buy-section ">
                <div class="container">

                    <div class="row justify-content-center">
                        <div class="col-md-11">
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="buy-formtext">
                                        <h1>Buy your Advertisement space Here</h1>
                                        <div class="heading-seperator heading-seperator2"><span></span></div>
                                    </div>
                                </div>
                                <div class="col-md-4 text-left text-sm-right">
                                    <img src="images/black-logo.png"
                                        class="buy-logo"
                                        alt="" />
                                </div>
                            </div>

                            <div class="row justify-content-center mt-3 mt-sm-5">
                                <div class="col-md-10">
                                    <div class="row ">
                                        <div class="col-md-12 pb-5">
                                            <Tabs
                                                defaultActiveKey="home"
                                                id="uncontrolled-tab-example"
                                                className="mb-0 mb-sm-3 buy-tabs justify-content-center "
                                            >
                                                <Tab eventKey="home" title={
                                                    <React.Fragment>
                                                        <div class="d-flex align-items-center buy-boxcontent"  >
                                                            <p>1</p>
                                                            <h6> Add Details </h6>
                                                            <img src="images/arrow-rightblack.png" alt="" />
                                                        </div>
                                                    </React.Fragment>}>
                                                    <div class="row mt-2 mt-ms-4">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="buys-label" >Type Of Advertisement</label>
                                                                <select class="form-control buy-select " >
                                                                    <option>Banner</option>
                                                                    <option>Banner</option>
                                                                    <option>Banner</option>
                                                                    <option>Banner</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="buys-label" >Timeline</label>
                                                                <select class="form-control buy-select " >
                                                                    <option>30 days</option>
                                                                    <option>20 days</option>
                                                                    <option>40 days</option>
                                                                    <option>50 days</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label class="buys-label" > Attach Banner </label>
                                                            <div class="input-group">
                                                                <input type="text" class="form-control buy-select " placeholder="Choose File" />
                                                                <div class="input-group-append">
                                                                    <span class="input-group-text upload-btnpadding " >
                                                                        <div class="upload-btn-wrapper ">
                                                                            <button class="uploadBtn">
                                                                                Browse
                                                                            </button>
                                                                            <input type="file" />
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <small class="maximum-uploadedtext" > Maximum 4 file can be uploaded. </small>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label class="buys-label" >Attach Video</label>
                                                            <div class="input-group">
                                                                <input type="text" class="form-control buy-select " placeholder="Choose File" />
                                                                <div class="input-group-append">
                                                                    <span class="input-group-text upload-btnpadding "  >

                                                                        <div class="upload-btn-wrapper ">
                                                                            <button class="uploadBtn">
                                                                                Browse
                                                                            </button>
                                                                            <input type="file" />
                                                                        </div>

                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <small class="maximum-uploadedtext" > Maximum 4 file can be uploaded .</small>
                                                        </div>
                                                    </div>
                                                    <div class="text-center mt-5">
                                                        <button type="button" data-target="#home" data-toggle="tab" class="btn  plan-outlinebtn  mr-2">Back</button>
                                                        <button type="button" class="btn basic-btn " >Preview</button>
                                                    </div>
                                                </Tab>

                                                <Tab eventKey="profile" title={
                                                    <React.Fragment>
                                                        <div class="d-flex align-items-center buy-boxcontent " >
                                                            <p>2</p>
                                                            <h6> Preview </h6>
                                                            <img src="images/arrow-rightblack.png" alt="" />
                                                        </div>
                                                    </React.Fragment>} >
                                                    <div class="Advertisement-box mt-2">

                                                    <div className="row justify-content-center">
                                                        <div className="col-md-7">

                                                        <div class="row">
                                                            <div class="col-md-8 mb-3 mb-sm-0 pl-3 pl-sm-0">
                                                                <h1>Type of Advertisement</h1>
                                                                <p>Banner & Video</p>
                                                                <div class="row mt-3 mt-sm-5">
                                                                    <div class="col-md-12 mb-3">
                                                                        <h1>Banner</h1>
                                                                    </div>
                                                                    <div class="col-md-6 col-4">
                                                                        <div class="secound-buybox" onClick={handleslide} >
                                                                            <img src="images/buy-advertise.png" class="first-buyimg" />
                                                                            <img src="images/buy-cross.png" class="cross-img" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <h1>Timeline</h1>
                                                                <p>Video</p>

                                                                <div class="row mt-3 mt-sm-5">
                                                                    <div class="col-md-12 mb-3">
                                                                        <h1>Video</h1>
                                                                    </div>
                                                                    <div class="col-md-11 col-4">
                                                                        <div class="secound-buybox" onClick={handleslider} >
                                                                            <img src="images/buy-advertise4.png" class="first-buyimg" />
                                                                            <img src="images/buy-cross.png" class="cross-img" />
                                                                        </div>
                                                                    </div>
                                                                   

                                                                </div>
                                                            </div>
                                                        </div>

                                                        </div>
                                                    </div>
                                                        
                                                    </div>
                                                    <div class="text-center mt-5">
                                                        <button type="button" data-target="#home" data-toggle="tab" class="btn  plan-outlinebtn  mr-2">Back</button>
                                                        <button type="button" class="btn basic-btn " >Payment</button>
                                                    </div>
                                                </Tab>

                                                <Tab eventKey="contact" title={
                                                    <React.Fragment>
                                                        <div class="d-flex align-items-center buy-boxcontent buy-boxcontentnew"  >
                                                            <p>3</p>
                                                            <h6> Payment </h6>
                                                        </div>
                                                    </React.Fragment>} >
                                                    <div class="row mt-2 mt-sm-4">
                                                        <div class="col-md-6">
                                                            <label class="buys-label" > Card Number </label>
                                                            <div class="form-group">
                                                                <input type="text" class="form-control buy-select " placeholder="Banner" />
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <label class="buys-label" > Street </label>
                                                            <div class="form-group">
                                                                <input type="text" class="form-control buy-select " placeholder="30 days" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label class="buys-label" > Apartment, Suit, etc. (Optional) </label>
                                                            <div class="form-group">
                                                                <input type="text" class="form-control buy-select " placeholder="Banner" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label class="buys-label" > City </label>
                                                            <div class="form-group">
                                                                <input type="text" class="form-control buy-select " placeholder="30 days" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label class="buys-label" > State </label>
                                                            <div class="form-group">
                                                                <input type="text" class="form-control buy-select " placeholder="Banner" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label class="buys-label" > Zip Code </label>
                                                            <div class="form-group">
                                                                <input type="text" class="form-control buy-select " placeholder="30 days" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="text-center mt-4">
                                                        <button type="button" data-target="#profile" data-toggle="tab" class="btn  plan-outlinebtn  mr-2">Back</button>
                                                        <button type="button" class="btn basic-btn" onClick={() => setLgShow(true)} >Pay</button>
                                                    </div>
                                                </Tab>

                                            </Tabs>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* const myElement =   "<h1>React is {5 + 5} times better with JSX</h1>"; */}

                    {/* <div class="custom-file">
                        <input type="file" class="custom-file-input" id="customFile" />
                        <label class="custom-file-label" for="customFile">Choose file</label>
                    </div> */}

                </div>
            </section>

            <Modal
                className=" scroll-pop "

                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg" >
                <Modal.Header closeButton >
                  <div className="row">
                    <div className="col-md-8"></div>
                  </div>

                    {/* <h1 className="new-pophead">Subscription Acceptance Page </h1> */}
                </Modal.Header>
                <Modal.Body className="p-4">
                    <div className="payment-contentpop">
                        <div className="row mb-4">
                            <div className="col-md-12 text-center">
                               <img src="images/payment-success.gif" />
                                <h1>Transaction Successful</h1>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>

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
                                <img src="images/new.png" alt="" />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <button type="button" class="btn btn-outline-primary post-btn mr-2">BACK</button>
                    <button type="button" class="btn btn-login">PROCEED TO PAYMENT</button>
                   
                </Modal.Footer> */}
            </Modal>

            <Modal show={slider} onHide={handleClose} className="qr-popup"
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
                                <img src="images/youtube-play.png" alt="" />
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

export default BuyForm;