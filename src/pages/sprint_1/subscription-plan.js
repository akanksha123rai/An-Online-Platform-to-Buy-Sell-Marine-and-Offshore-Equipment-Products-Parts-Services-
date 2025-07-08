import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Modal } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';


function SubscriptionPlan() {
    
    const [shows, setShows] = useState(false);
    const handleShows = () => setShows(true);
    const handleCloses = () => setShows(false);

    const [lgShow, setLgShow] = useState(false);

    return (

        <>
            <section class="py-4   plan-section ">
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
                                    <img src="images/new-logoplan.png" alt="" />
                                </div>
                            </div>

                            <div class="row mt-3 pb-5 justify-content-center">

                                <div class="col-md-6 mb-2 mb-sm-0">
                                    <div class="planprice-box subscription-plan-box">

                                        <div class="d-flex justify-content-between px-3 align-items-center">
                                            <div class="subs-plan-head">
                                                <h1> <img src="images/plan-top.png" class="mr-2"  alt="" /> Standard Plan</h1>
                                                <div class="heading-seperator heading-seperator4"><span></span></div>
                                            </div>
                                            <button onClick={handleShows} type="button" class="btn  basic-btn pop-btn">*Subscription Acceptance Plan</button>
                                        </div>

                                        <hr />
                                        <div class="planprice-boxcontent">
                                            <div class="row justify-content-center">
                                                <div class="col-md-10">
                                                    <h6 class="py-2">Plan Includes in your 30 Days Free Trial :</h6>
                                                    <div class="free-trial">
                                                        <p>1 - Period</p>
                                                        <h6>Monthly</h6>
                                                    </div>
                                                    <div class="free-trial">
                                                        <p>2 - No of Days</p>
                                                        <h6>31</h6>
                                                    </div>
                                                    <div class="free-trial">
                                                        <p>3 - Plan Cost</p>
                                                        <h6>15$</h6>
                                                    </div>
                                                    <div class="free-trial">
                                                        <p>4 - No. of Posting allowed</p>
                                                        <h6>25</h6>
                                                    </div>
                                                    <div class="free-trial">
                                                        <p>5 - No. of notification Allowed Per Week</p>
                                                        <h6>1</h6>
                                                    </div>
                                                    <div class="free-trial">
                                                        <p>6 - No of Photos Allowed per Item</p>
                                                        <h6>2</h6>
                                                    </div>
                                                    <div class="free-trial">
                                                        <p>7 - Get Connected with all Std. Users(To Buy & Sell)</p>
                                                        <h6>---</h6>
                                                    </div>
                                                    <div class="free-trial">
                                                        <p>8 - Easy Connectivity via Audio & Messaging</p>
                                                        <h6>---</h6>
                                                    </div>
                                                    <div class="free-trial">
                                                        <p>9 - Additional Benefits</p>
                                                        <h6>----</h6>
                                                    </div>
                                                    <div class="free-trial">
                                                        <ul>
                                                            <li>
                                                                <p>Get Access to Product Posting at Minimal Cost (Even After End of the plan)</p>
                                                            </li>
                                                        </ul>
                                                        <h6>----</h6>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="text-center pb-4">
                                                <Link to="/BuyForm"><button type="button" class="btn  basic-btn ">Activate Your Plan</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </section>

            <Modal show={shows} onHide={handleCloses} className="overview-btn-pop">
                <Modal.Header>
                    <Modal.Title>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="text-right upload-pop-icon">
                                <img src="images/oarabge-eyesnew.png" className="mr-2" onClick={() => setLgShow(true)} alt="/" />
                                <img src="images/orange-download.png"  alt="/" />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal
                className=" scroll-pop "
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg" >
                <Modal.Header closeButton >
                    <h1 className="new-pophead">Subscription Acceptance Page </h1>
                </Modal.Header>
                <Modal.Body className="p-4">
                    <div className="overscroll-datatable pr-1">
                        <div className="table-responsive" >
                            <Table bordered className="new-tableyes" >
                                <tbody>
                                    <tr>
                                        <th className="text-center" >Sl. No</th>
                                        <th className="text-center" >Description</th>
                                        <th className="text-center" colSpan={2} >Standard</th>
                                        <th className="text-center" colSpan={2} >Premium</th>
                                    </tr>

                                    <tr>
                                        <td>1</td>
                                        <td>Period</td>
                                        <td className="text-center">Monthly </td>
                                        <td className="text-center">Annual </td>
                                        <td className="text-center">Monthly</td>
                                        <td className="text-center">Annual</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Number of Days</td>
                                        <td className="text-center">30</td>
                                        <td className="text-center">365</td>
                                        <td className="text-center">30</td>
                                        <td className="text-center">365</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Users Connectivity</td>
                                        <td className="text-center">Standard</td>
                                        <td className="text-center">Standard</td>
                                        <td className="text-center">Standard and Premium</td>
                                        <td className="text-center">Standard and Premium</td>
                                    </tr>

                                    <tr>
                                        <td>4</td>
                                        <td>Period</td>
                                        <td className="text-center">Monthly </td>
                                        <td className="text-center">Annual </td>
                                        <td className="text-center">Monthly</td>
                                        <td className="text-center">Annual</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Number of Days</td>
                                        <td className="text-center">30</td>
                                        <td className="text-center">365</td>
                                        <td className="text-center">30</td>
                                        <td className="text-center">365</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Period</td>
                                        <td className="text-center">Monthly </td>
                                        <td className="text-center">Annual </td>
                                        <td className="text-center">Monthly</td>
                                        <td className="text-center">Annual</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Number of Days</td>
                                        <td className="text-center">30</td>
                                        <td className="text-center">365</td>
                                        <td className="text-center">30</td>
                                        <td className="text-center">365</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Users Connectivity</td>
                                        <td className="text-center">Standard</td>
                                        <td className="text-center">Standard</td>
                                        <td className="text-center">Standard and Premium</td>
                                        <td className="text-center">Standard and Premium</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Period</td>
                                        <td className="text-center" >Monthly </td>
                                        <td className="text-center">Annual </td>
                                        <td className="text-center">Monthly</td>
                                        <td className="text-center">Annual</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Period</td>
                                        <td className="text-center">Monthly </td>
                                        <td className="text-center">Annual </td>
                                        <td className="text-center">Monthly</td>
                                        <td className="text-center">Annual</td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>Period</td>
                                        <td className="text-center">Monthly </td>
                                        <td className="text-center">Annual </td>
                                        <td className="text-center">Monthly</td>
                                        <td className="text-center">Annual</td>
                                    </tr>
                                    <tr>
                                        <td>12</td>
                                        <td>Period</td>
                                        <td className="text-center">Monthly </td>
                                        <td className="text-center">Annual </td>
                                        <td className="text-center">Monthly</td>
                                        <td className="text-center">Annual</td>
                                    </tr>
                                    <tr>
                                        <td>13</td>
                                        <td>Period</td>
                                        <td  className="text-center" >Monthly </td>
                                        <td  className="text-center" >Annual </td>
                                        <td  className="text-center" >Monthly</td>
                                        <td  className="text-center" >Annual</td>
                                    </tr>
                                    <tr>
                                        <td>14</td>
                                        <td>Period</td>
                                        <td  className="text-center" >Monthly </td>
                                        <td  className="text-center" >Annual </td>
                                        <td  className="text-center" >Monthly</td>
                                        <td  className="text-center" >Annual</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>


        </>
    );
}

export default SubscriptionPlan;