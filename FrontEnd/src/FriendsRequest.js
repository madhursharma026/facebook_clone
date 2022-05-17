import './index.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link } from "react-router-dom"

function FriendsRequest() {
    return (
        <div className="container-md friend_request_card" style={{ marginTop: "100px" }}>
            <div className="p-3 show_friend_request" style={{ backgroundColor: "white", boxShadow: "0 0 4px 0 rgb(212, 212, 212)" }}>
                <h4 className="mb-3">4 Friend Requests</h4>
                <hr />
                {/* Request 1 */}
                <img className="rounded-circle account-img" src="https://scontent-del1-1.xx.fbcdn.net/v/t31.18172-8/13995524_587137478132084_1433850126944083153_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zlhgONanG2QAX-7x3-0&_nc_ht=scontent-del1-1.xx&oh=aeb77dd0a57126f895c632beec714ec2&oe=6170D868" alt="#" />
                <h6><Link to='/user_profile'
                    style={{ textDecoration: "none", color: "#000", fontSize: "18px" }}>Akash Dixit</Link>
                    <span style={{ float: "right" }}>2021-04-14</span>
                </h6>
                9 mutual friends <br />
                <Link to="#accept_friend_request" role="button" className="btn btn-primary btn-inline"
                    style={{ marginLeft: "-10px" }}>Confirm</Link>
                <Link to="#block_friend_request" role="button" className="btn btn-inline mx-2"
                    style={{ background: "#d8d8d8" }}>Block</Link>
                <hr />

                {/* Request 2 */}
                <img className="rounded-circle account-img" src="https://scontent-del1-1.xx.fbcdn.net/v/t31.18172-8/13995524_587137478132084_1433850126944083153_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zlhgONanG2QAX-7x3-0&_nc_ht=scontent-del1-1.xx&oh=aeb77dd0a57126f895c632beec714ec2&oe=6170D868" alt="#" />
                <h6><Link to='/user_profile'
                    style={{ textDecoration: "none", color: "#000", fontSize: "18px" }}>Akash Dixit</Link>
                    <span style={{ float: "right" }}>2021-04-14</span>
                </h6>
                9 mutual friends <br />
                <Link to="#accept_friend_request" role="button" className="btn btn-primary btn-inline"
                    style={{ marginLeft: "-10px" }}>Confirm</Link>
                <Link to="#block_friend_request" role="button" className="btn btn-inline mx-2"
                    style={{ background: "#d8d8d8" }}>Block</Link>
                <hr />

                {/* Request 3 */}
                <img className="rounded-circle account-img" src="https://scontent-del1-1.xx.fbcdn.net/v/t31.18172-8/13995524_587137478132084_1433850126944083153_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zlhgONanG2QAX-7x3-0&_nc_ht=scontent-del1-1.xx&oh=aeb77dd0a57126f895c632beec714ec2&oe=6170D868" alt="#" />
                <h6><Link to='/user_profile'
                    style={{ textDecoration: "none", color: "#000", fontSize: "18px" }}>Akash Dixit</Link>
                    <span style={{ float: "right" }}>2021-04-14</span>
                </h6>
                9 mutual friends <br />
                <Link to="#accept_friend_request" role="button" className="btn btn-primary btn-inline"
                    style={{ marginLeft: "-10px" }}>Confirm</Link>
                <Link to="#block_friend_request" role="button" className="btn btn-inline mx-2"
                    style={{ background: "#d8d8d8" }}>Block</Link>
                <hr />

                {/* Request 4 */}
                <img className="rounded-circle account-img" src="https://scontent-del1-1.xx.fbcdn.net/v/t31.18172-8/13995524_587137478132084_1433850126944083153_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zlhgONanG2QAX-7x3-0&_nc_ht=scontent-del1-1.xx&oh=aeb77dd0a57126f895c632beec714ec2&oe=6170D868" alt="#" />
                <h6><Link to='/user_profile'
                    style={{ textDecoration: "none", color: "#000", fontSize: "18px" }}>Akash Dixit</Link>
                    <span style={{ float: "right" }}>2021-04-14</span>
                </h6>
                9 mutual friends <br />
                <Link to="#accept_friend_request" role="button" className="btn btn-primary btn-inline"
                    style={{ marginLeft: "-10px" }}>Confirm</Link>
                <Link to="#block_friend_request" role="button" className="btn btn-inline mx-2"
                    style={{ background: "#d8d8d8" }}>Block</Link>
                <hr />
                {/* <div className="col-12 text-center">
                    <h4>You have no friend request</h4>
                </div>
                <br /> */}
            </div>
        </div>
    );
}

export default FriendsRequest;

