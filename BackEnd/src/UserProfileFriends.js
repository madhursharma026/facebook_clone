import './index.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom"


function UserProfileFriends() {
    return (
        <div>
            <div className="container-md user_all_post mt-4">
                <div className="card" style={{ borderRadius: "10px" }}>
                    <h4><Link to="/user_friends" style={{ textDecoration: "none", color: "black", marginLeft: "20px" }}>Friends</Link></h4>
                    <div className="row">
                        <div className="col-6 text-center"><br />
                            <img src="https://scontent-del1-1.xx.fbcdn.net/v/t1.18169-9/23131665_574165876259940_4711835801746709701_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0xI0emgiZV4AX_cEVgF&_nc_ht=scontent-del1-1.xx&oh=a381864a670f9efd894f4893ef8c8bd2&oe=6167ABC2" width="80" height="80" alt="#" /><br />
                            <Link to="/my_profile" style={{ textDecoration: "none", color: "#000" }}>Shyam Sharma</Link><br />
                            <Link to="#mutual_frd" className="mutual_frd" style={{ textDecoration: "none", color: "#000" }}>14 Mutal Friend</Link>
                        </div>
                        <div className="col-6 text-center"><br />
                            <img src="https://scontent-del1-1.xx.fbcdn.net/v/t1.18169-9/23131665_574165876259940_4711835801746709701_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0xI0emgiZV4AX_cEVgF&_nc_ht=scontent-del1-1.xx&oh=a381864a670f9efd894f4893ef8c8bd2&oe=6167ABC2" width="80" height="80" alt="#" /><br />
                            <Link to="/my_profile" style={{ textDecoration: "none", color: "#000" }}>Shyam Sharma</Link><br />
                            <Link to="#mutual_frd" className="mutual_frd" style={{ textDecoration: "none", color: "#000" }}>14 Mutal Friend</Link>
                        </div>
                        <div className="col-6 text-center"><br />
                            <img src="https://scontent-del1-1.xx.fbcdn.net/v/t1.18169-9/23131665_574165876259940_4711835801746709701_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0xI0emgiZV4AX_cEVgF&_nc_ht=scontent-del1-1.xx&oh=a381864a670f9efd894f4893ef8c8bd2&oe=6167ABC2" width="80" height="80" alt="#" /><br />
                            <Link to="/my_profile" style={{ textDecoration: "none", color: "#000" }}>Shyam Sharma</Link><br />
                            <Link to="#mutual_frd" className="mutual_frd" style={{ textDecoration: "none", color: "#000" }}>14 Mutal Friend</Link>
                        </div>
                        <div className="col-6 text-center"><br />
                            <img src="https://scontent-del1-1.xx.fbcdn.net/v/t1.18169-9/23131665_574165876259940_4711835801746709701_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0xI0emgiZV4AX_cEVgF&_nc_ht=scontent-del1-1.xx&oh=a381864a670f9efd894f4893ef8c8bd2&oe=6167ABC2" width="80" height="80" alt="#" /><br />
                            <Link to="/my_profile" style={{ textDecoration: "none", color: "#000" }}>Shyam Sharma</Link><br />
                            <Link to="#mutual_frd" className="mutual_frd" style={{ textDecoration: "none", color: "#000" }}>14 Mutal Friend</Link>
                        </div>
                        <div className="col-6 text-center"><br />
                            <img src="https://scontent-del1-1.xx.fbcdn.net/v/t1.18169-9/23131665_574165876259940_4711835801746709701_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0xI0emgiZV4AX_cEVgF&_nc_ht=scontent-del1-1.xx&oh=a381864a670f9efd894f4893ef8c8bd2&oe=6167ABC2" width="80" height="80" alt="#" /><br />
                            <Link to="/my_profile" style={{ textDecoration: "none", color: "#000" }}>Shyam Sharma</Link><br />
                            <Link to="#mutual_frd" className="mutual_frd" style={{ textDecoration: "none", color: "#000" }}>14 Mutal Friend</Link>
                        </div>
                        <div className="col-6 text-center"><br />
                            <img src="https://scontent-del1-1.xx.fbcdn.net/v/t1.18169-9/23131665_574165876259940_4711835801746709701_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0xI0emgiZV4AX_cEVgF&_nc_ht=scontent-del1-1.xx&oh=a381864a670f9efd894f4893ef8c8bd2&oe=6167ABC2" width="80" height="80" alt="#" /><br />
                            <Link to="/my_profile" style={{ textDecoration: "none", color: "#000" }}>Shyam Sharma</Link><br />
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

export default UserProfileFriends;

