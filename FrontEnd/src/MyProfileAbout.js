import './index.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom"


function MyProfileAbout() {
    return (
        <div>
            <div className="container-md user_all_post mt-3">
                <div className="card" style={{ borderRadius: "10px" }}>
                    <div className="row">
                        <div className="col-md-4 options">
                            <b className="about_heading">About</b>
                            <Link to="/my_about/overview" type="button" className="option_block" style={window.location.href === 'http://localhost:3000/my_about/overview' ? { backgroundColor: "#e9e8fa" } : {}}>OverView</Link>
                            <Link to="/my_about/work_and_education" type="button" className="option_block" style={window.location.href === 'http://localhost:3000/my_about/work_and_education' ? { backgroundColor: "#e9e8fa" } : {}}>Work and Education</Link>
                            <Link to="/my_about/placed_lived" type="button" className="option_block" style={window.location.href === 'http://localhost:3000/my_about/placed_lived' ? { backgroundColor: "#e9e8fa" } : {}}>Places lived</Link>
                            <Link to="/my_about/contact_and_basic_info" type="button" className="option_block" style={window.location.href === 'http://localhost:3000/my_about/contact_and_basic_info' ? { backgroundColor: "#e9e8fa" } : {}}>Contact and basic info</Link>
                            <Link to="/my_about/family_and_relationship" type="button" className="option_block" style={window.location.href === 'http://localhost:3000/my_about/family_and_relationship' ? { backgroundColor: "#e9e8fa" } : {}}>Family and relationship</Link>
                            <Link to="/my_about/my_details" type="button" className="option_block" style={window.location.href === 'http://localhost:3000/my_about/my_details' ? { backgroundColor: "#e9e8fa" } : {}}>My Details</Link>
                            <Link to="/my_about/life_event" type="button" className="option_block" style={window.location.href === 'http://localhost:3000/my_about/life_event' ? { backgroundColor: "#e9e8fa" } : {}}>Life event</Link>
                            <br /><br /><br className="br_before_768px" />
                        </div>
                        <div className="col-md-8 output mt-3">
                            <Route path="/my_about/overview">
                                <div id="overview_output">
                                    <p style={{ color: "grey" }} className="mt-4 mx-4"><i className="fa fa-briefcase" style={{ fontSize: "24px" }}></i>&ensp;No workplace to show</p>
                                    <p style={{ color: "grey" }} className="mt-4 mx-4"><i className="fa fa-graduation-cap" style={{ fontSize: "24px" }}></i>&nbsp; No schools/universities to show</p>
                                    <p style={{ color: "grey" }} className="mt-4 mx-4"><i className="fa fa-home" style={{ fontSize: "24px" }}></i>&ensp; Lives in <Link to="#agra" style={{ color: "grey" }}>Agra, Uttar Pradesh</Link></p>
                                    <p style={{ color: "grey" }} className="mt-4 mx-4">&nbsp;<i className="fa fa-map-marker" style={{ fontSize: "24px" }}></i>&ensp;&nbsp; From <Link to="#agra" style={{ color: "grey" }}>Agra, Uttar Pradesh</Link></p>
                                    <p style={{ color: "grey" }} className="mt-4 mx-4"><i className="fa fa-heart" style={{ fontSize: "24px" }}></i>&ensp; No relationship info to show</p>
                                </div>
                            </Route>
                            <Route path="/my_about/work_and_education">
                                <div id="work_and_education_output">
                                    <h5 className="mx-3" style={{ color: "black" }}>Work</h5>
                                    <p style={{ color: "grey" }} className="mt-2 mx-3"><i className="fa fa-briefcase" style={{ fontSize: "24px" }}></i>&ensp; No workplace to show</p>
                                    <h5 className="mt-4 mx-3" style={{ color: "black" }}>University</h5>
                                    <p style={{ color: "grey" }} className="mt-2 mx-3"><i className="fa fa-graduation-cap" style={{ fontSize: "24px" }}></i>&nbsp; No schools/universities to show</p>
                                    <h5 className="mt-4 mx-3" style={{ color: "black" }}>High School</h5>
                                    <p style={{ color: "grey" }} className="mt-2 mx-3"><i className="fa fa-graduation-cap" style={{ fontSize: "24px" }}></i>&nbsp; No schools/universities to show</p>
                                </div>
                            </Route>
                            <Route path="/my_about/placed_lived">
                                <div id="place_lived_output" className="mx-3">
                                    <h5 style={{ color: "black" }}>Placed Lived</h5>
                                    <p style={{ float: "left" }}><img alt="#" style={{ borderRadius: "100%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY33GaW3Jfvib_qEwbSB8KIaKs2_l6hH4p9855AXKYWA6HKslHr90d8-sn-pjVQHMcnAY&usqp=CAU" height="40px" width="40px" /></p>
                                    <p><Link to="#" style={{ color: "black", textDecoration: "none" }}> &ensp; Agra, Uttar Pradesh</Link><br /> &ensp; Current town/city</p>
                                    <br />
                                    <p style={{ float: "left" }}><img alt="#" style={{ borderRadius: "100%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY33GaW3Jfvib_qEwbSB8KIaKs2_l6hH4p9855AXKYWA6HKslHr90d8-sn-pjVQHMcnAY&usqp=CAU" height="40px" width="40px" /></p>
                                    <p><Link to="#" style={{ color: "black", textDecoration: "none" }}> &ensp; Agra, Uttar Pradesh</Link><br /> &ensp; Home Town</p>
                                </div>
                            </Route>
                            <Route path="/my_about/contact_and_basic_info">
                                <h5 className="mx-3" style={{ color: "black" }}>Contact info</h5>
                                <p style={{ color: "grey" }} className="mt-2 mx-3"><i className="fa fa-address-card" style={{ fontSize: "24px" }}></i>&ensp; No contact info to show</p>
                                <h5 className="mt-4 mx-3" style={{ color: "black" }}>Websites and social links</h5>
                                <p style={{ color: "grey" }} className="mt-2 mx-3"><i className="fa fa-link" style={{ fontSize: "24px" }} aria-hidden="true"></i>&nbsp; No links to show</p>
                                <h5 className="mt-4 mx-3" style={{ color: "black" }}>Basic info</h5>
                                <p style={{ float: "left", color: "grey" }} className="mt-2 mx-3"><i className="fa fa-user" style={{ fontSize: "24px" }}></i></p>
                                <p style={{ fontSize: "small", color: "grey" }}>Male<br />Gender</p> <br />
                                <p style={{ float: "left", color: "grey" }} className="mt-2 mx-3"><i className="fa fa-birthday-cake" style={{ fontSize: "24px" }}></i></p>
                                <p style={{ fontSize: "small", color: "grey" }}>12 July<br />Birthday</p>
                            </Route>
                            <Route path="/my_about/family_and_relationship">
                                <div id="relationship_output">
                                    <h5 className="mx-3" style={{ color: "black" }}>Relationship</h5>
                                    <p style={{ color: "grey" }} className="mt-2 mx-3"><i className="fa fa-heart" style={{ fontSize: "24px" }}></i>&ensp;
                                        No relationship info to show</p>
                                    <h5 className="mt-4 mx-3" style={{ color: "black" }}>Family members</h5>
                                    <p style={{ color: "grey" }} className="mt-2 mx-3"><i className="fa fa-tree" style={{ fontSize: "24px" }}></i>&nbsp; No
                                        family members to show</p>
                                </div>
                            </Route>
                            <Route path="/my_about/my_details">
                                <div id="my_details">
                                    <h5 className="mx-3" style={{ color: "black" }}>About Shyam</h5>
                                    <p style={{ color: "grey" }} className="mt-2 mx-3">Melody Khao khud jaan jaao :P</p>
                                    <h5 className="mt-4 mx-3" style={{ color: "black" }}>Name pronunciation</h5>
                                    <p style={{ color: "grey" }} className="mt-2 mx-3"><i className="fa fa-headphones"
                                        style={{ fontSize: "24px" }}></i>&nbsp; No name pronunciation to show</p>
                                    <h5 className="mt-4 mx-3" style={{ color: "black" }}>Other names</h5>
                                    <p style={{ color: "grey" }} className="mt-2 mx-3"><i className="fa fa-user-circle-o"
                                        style={{ fontSize: "24px" }}></i>&nbsp; No other names to show</p>
                                    <h5 className="mt-4 mx-3" style={{ color: "black" }}>Favourite Quotes</h5>
                                    <p style={{ color: "grey" }} className="mt-2 mx-3"><i className="fa fa-quote-left"
                                        style={{ fontSize: "24px" }}></i>&nbsp; No favourite quotes to show</p>
                                </div>
                            </Route>
                            <Route path="/my_about/life_event">
                                <h5 className="mx-3" style={{ color: "black" }}>Life events</h5>
                                <p style={{ color: "grey" }} className="mt-2 mx-3"><i className="fa fa-star" style={{ fontSize: "24px" }}></i>&nbsp; No
                                    life events to show</p>
                            </Route>
                        </div >
                    </div>
                </div >
            </div >
            <br /><br /><br /><br /><br /><br />
        </div >
    );
}

export default MyProfileAbout;

