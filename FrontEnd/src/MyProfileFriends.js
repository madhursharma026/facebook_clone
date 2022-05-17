import './index.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom"


function MyProfileFriends() {
    return (
        <div>
            <div className="container-md user_all_post mt-4">
                <div className="card" style={{ borderRadius: "10px" }}>
                    <h4><Link to="/my_friends" style={{ textDecoration: "none", color: "black", marginLeft: "20px" }}>Friends</Link></h4>
                    <div className="row">
                        <div className="col-6 text-center"><br />
                            <img src="https://scontent-del1-1.xx.fbcdn.net/v/t31.18172-8/13995524_587137478132084_1433850126944083153_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zlhgONanG2QAX-7x3-0&_nc_ht=scontent-del1-1.xx&oh=aeb77dd0a57126f895c632beec714ec2&oe=6170D868" width="80" height="80" alt="#" /><br />
                            <Link to="/user_profile" style={{ textDecoration: "none", color: "#000" }}>Akash Dixit</Link><br />
                            <Link to="#mutual_frd" className="mutual_frd" style={{ textDecoration: "none", color: "#000" }}>14 Mutal Friend</Link>
                        </div>
                        <div className="col-6 text-center"><br />
                            <img src="https://scontent-del1-1.xx.fbcdn.net/v/t31.18172-8/13995524_587137478132084_1433850126944083153_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zlhgONanG2QAX-7x3-0&_nc_ht=scontent-del1-1.xx&oh=aeb77dd0a57126f895c632beec714ec2&oe=6170D868" width="80" height="80" alt="#" /><br />
                            <Link to="/user_profile" style={{ textDecoration: "none", color: "#000" }}>Akash Dixit</Link><br />
                            <Link to="#mutual_frd" className="mutual_frd" style={{ textDecoration: "none", color: "#000" }}>14 Mutal Friend</Link>
                        </div>
                        <div className="col-6 text-center"><br />
                            <img src="https://scontent-del1-1.xx.fbcdn.net/v/t31.18172-8/13995524_587137478132084_1433850126944083153_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zlhgONanG2QAX-7x3-0&_nc_ht=scontent-del1-1.xx&oh=aeb77dd0a57126f895c632beec714ec2&oe=6170D868" width="80" height="80" alt="#" /><br />
                            <Link to="/user_profile" style={{ textDecoration: "none", color: "#000" }}>Akash Dixit</Link><br />
                            <Link to="#mutual_frd" className="mutual_frd" style={{ textDecoration: "none", color: "#000" }}>14 Mutal Friend</Link>
                        </div>
                        <div className="col-6 text-center"><br />
                            <img src="https://scontent-del1-1.xx.fbcdn.net/v/t31.18172-8/13995524_587137478132084_1433850126944083153_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zlhgONanG2QAX-7x3-0&_nc_ht=scontent-del1-1.xx&oh=aeb77dd0a57126f895c632beec714ec2&oe=6170D868" width="80" height="80" alt="#" /><br />
                            <Link to="/user_profile" style={{ textDecoration: "none", color: "#000" }}>Akash Dixit</Link><br />
                            <Link to="#mutual_frd" className="mutual_frd" style={{ textDecoration: "none", color: "#000" }}>14 Mutal Friend</Link>
                        </div>
                        <div className="col-6 text-center"><br />
                            <img src="https://scontent-del1-1.xx.fbcdn.net/v/t31.18172-8/13995524_587137478132084_1433850126944083153_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zlhgONanG2QAX-7x3-0&_nc_ht=scontent-del1-1.xx&oh=aeb77dd0a57126f895c632beec714ec2&oe=6170D868" width="80" height="80" alt="#" /><br />
                            <Link to="/user_profile" style={{ textDecoration: "none", color: "#000" }}>Akash Dixit</Link><br />
                            <Link to="#mutual_frd" className="mutual_frd" style={{ textDecoration: "none", color: "#000" }}>14 Mutal Friend</Link>
                        </div>
                        <div className="col-6 text-center"><br />
                            <img src="https://scontent-del1-1.xx.fbcdn.net/v/t31.18172-8/13995524_587137478132084_1433850126944083153_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zlhgONanG2QAX-7x3-0&_nc_ht=scontent-del1-1.xx&oh=aeb77dd0a57126f895c632beec714ec2&oe=6170D868" width="80" height="80" alt="#" /><br />
                            <Link to="/user_profile" style={{ textDecoration: "none", color: "#000" }}>Akash Dixit</Link><br />
                            <Link to="#mutual_frd" className="mutual_frd" style={{ textDecoration: "none", color: "#000" }}>14 Mutal Friend</Link>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <br /><br />
        </div >
    );
}

export default MyProfileFriends;

