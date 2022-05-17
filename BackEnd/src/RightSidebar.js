import './index.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link } from "react-router-dom"

function RightSidebar() {
    return (
        <div className="right_sidebar_fixed_scrn" style={{ position: "fixed" }}>
            <div className="card frd-requests mb-3"
                style={{ width: "100%", border: "none" }}>
                <div className="card-body">
                    <h5 className="text-secondary mb-3"><sapn className="friends_written">Friend</sapn> Requests
                        <Link to="#see_all" style={{ float: "right", textDecoration: "none", fontSize: "15px" }}>See All</Link>
                    </h5>
                    {/* Request 1 */}
                    <div className="block mb-2">
                        <img className="rounded-circle account-img" alt="#"
                            src="https://scontent-del1-1.xx.fbcdn.net/v/t31.18172-8/13995524_587137478132084_1433850126944083153_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zlhgONanG2QAX-7x3-0&_nc_ht=scontent-del1-1.xx&oh=aeb77dd0a57126f895c632beec714ec2&oe=6170D868" />
                        <h6>
                            <Link to='/user_profile'
                                style={{ textDecoration: "none", color: "#000", fontSize: "16px" }}>Akash Dixit</Link>
                            <span
                                style={{ float: "right" }}>5d</span>
                        </h6>
                        9 mutual friends <br />
                        <Link to="#confirm1" role="button"
                            className="btn btn-primary btn-inline" style={{ marginLeft: "36px", marginRight: "10px" }}>Confirm</Link>
                        <Link to="#block1" role="button"
                            className="btn btn-inline" style={{ background: "#d8d8d8" }}>Block</Link>
                    </div>
                    {/* Request 2 */}
                    <div className="block mb-2">
                        <img className="rounded-circle account-img" alt="#"
                            src="https://scontent-del1-1.xx.fbcdn.net/v/t31.18172-8/13995524_587137478132084_1433850126944083153_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zlhgONanG2QAX-7x3-0&_nc_ht=scontent-del1-1.xx&oh=aeb77dd0a57126f895c632beec714ec2&oe=6170D868" />
                        <h6>
                            <Link to='/user_profile'
                                style={{ textDecoration: "none", color: "#000", fontSize: "16px" }}>Akash Dixit</Link>
                            <span
                                style={{ float: "right" }}>5d</span>
                        </h6>
                        9 mutual friends <br />
                        <Link to="#confirm2" role="button"
                            className="btn btn-primary btn-inline" style={{ marginLeft: "36px", marginRight: "10px" }}>Confirm</Link>
                        <Link to="#block2" role="button"
                            className="btn btn-inline" style={{ background: "#d8d8d8" }}>Block</Link>
                    </div>
                    {/* Request 3 */}
                    <div className="block mb-2">
                        <img className="rounded-circle account-img" alt="#"
                            src="https://scontent-del1-1.xx.fbcdn.net/v/t31.18172-8/13995524_587137478132084_1433850126944083153_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zlhgONanG2QAX-7x3-0&_nc_ht=scontent-del1-1.xx&oh=aeb77dd0a57126f895c632beec714ec2&oe=6170D868" />
                        <h6>
                            <Link to='/user_profile'
                                style={{ textDecoration: "none", color: "#000", fontSize: "16px" }}>Akash Dixit</Link>
                            <span
                                style={{ float: "right" }}>5d</span>
                        </h6>
                        9 mutual friends <br />
                        <Link to="#confirm3" role="button"
                            className="btn btn-primary btn-inline" style={{ marginLeft: "36px", marginRight: "10px" }}>Confirm</Link>
                        <Link to="#block3" role="button"
                            className="btn btn-inline" style={{ background: "#d8d8d8" }}>Block</Link>
                    </div>
                    {/* Request 4 */}
                    <div className="block">
                        <img className="rounded-circle account-img" alt="#"
                            src="https://scontent-del1-1.xx.fbcdn.net/v/t31.18172-8/13995524_587137478132084_1433850126944083153_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zlhgONanG2QAX-7x3-0&_nc_ht=scontent-del1-1.xx&oh=aeb77dd0a57126f895c632beec714ec2&oe=6170D868" />
                        <h6>
                            <Link to='/user_profile'
                                style={{ textDecoration: "none", color: "#000", fontSize: "16px" }}>Akash Dixit</Link>
                            <span
                                style={{ float: "right" }}>5d</span>
                        </h6>
                        9 mutual friends <br />
                        <Link to="#confirm4" role="button"
                            className="btn btn-primary btn-inline" style={{ marginLeft: "36px", marginRight: "10px" }}>Confirm</Link>
                        <Link to="#block4" role="button"
                            className="btn btn-inline" style={{ background: "#d8d8d8" }}>Block</Link>
                    </div>
                </div>
                <hr />
            </div>

            <div className="frd-show">
                <h5 className="text-secondary mb-2">Friends
                    <Link to="#see_all"
                        style={{ float: "right", textDecoration: "none", fontSize: "15px" }}>See All</Link></h5>
                <Link to='/user_profile' style={{ textDecoration: "none", color: "#000" }}>
                    <div className="profile-block  pt-3 pb-2 px-2" style={{ borderRadius: "10px" }}>
                        <img className="rounded-circle friends-profile" alt="#"
                            src="https://scontent-del1-1.xx.fbcdn.net/v/t31.18172-8/13995524_587137478132084_1433850126944083153_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zlhgONanG2QAX-7x3-0&_nc_ht=scontent-del1-1.xx&oh=aeb77dd0a57126f895c632beec714ec2&oe=6170D868" />
                        <h6 style={{ fontSize: "18px" }}>Akash Dixit</h6>
                    </div>
                </Link>
                <Link to='/user_profile' style={{ textDecoration: "none", color: "#000" }}>
                    <div className="profile-block  pt-3 pb-2 px-2" style={{ borderRadius: "10px" }}>
                        <img className="rounded-circle friends-profile" alt="#"
                            src="https://scontent-del1-1.xx.fbcdn.net/v/t31.18172-8/13995524_587137478132084_1433850126944083153_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zlhgONanG2QAX-7x3-0&_nc_ht=scontent-del1-1.xx&oh=aeb77dd0a57126f895c632beec714ec2&oe=6170D868" />
                        <h6 style={{ fontSize: "18px" }}>Akash Dixit</h6>
                    </div>
                </Link>
                <Link to='/user_profile' style={{ textDecoration: "none", color: "#000" }}>
                    <div className="profile-block  pt-3 pb-2 px-2" style={{ borderRadius: "10px" }}>
                        <img className="rounded-circle friends-profile" alt="#"
                            src="https://scontent-del1-1.xx.fbcdn.net/v/t31.18172-8/13995524_587137478132084_1433850126944083153_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zlhgONanG2QAX-7x3-0&_nc_ht=scontent-del1-1.xx&oh=aeb77dd0a57126f895c632beec714ec2&oe=6170D868" />
                        <h6 style={{ fontSize: "18px" }}>Akash Dixit</h6>
                    </div>
                </Link>
                <Link to='/user_profile' style={{ textDecoration: "none", color: "#000" }}>
                    <div className="profile-block  pt-3 pb-2 px-2" style={{ borderRadius: "10px" }}>
                        <img className="rounded-circle friends-profile" alt="#"
                            src="https://i.pinimg.com/600x315/3c/55/90/3c55902d83e5ee0b80b5b86fc26d9bde.jpg" />
                        <h6 style={{ fontSize: "18px" }}>Akash Dixit</h6>
                    </div>
                </Link>
                <Link to='/user_profile' style={{ textDecoration: "none", color: "#000" }}>
                    <div className="profile-block  pt-3 pb-2 px-2" style={{ borderRadius: "10px" }}>
                        <img className="rounded-circle friends-profile" alt="#"
                            src="https://scontent-del1-1.xx.fbcdn.net/v/t31.18172-8/13995524_587137478132084_1433850126944083153_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zlhgONanG2QAX-7x3-0&_nc_ht=scontent-del1-1.xx&oh=aeb77dd0a57126f895c632beec714ec2&oe=6170D868" />
                        <h6 style={{ fontSize: "18px" }}>Akash Dixit</h6>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default RightSidebar;

