import './index.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link } from "react-router-dom"


function UserProfileTop() {
    return (
        <div className="container-md user_all_post mt-3">

            {/* Post 1 with images and description */}
            <div className="card" style={{ borderRadius: "10px", marginTop: "20px" }}>
                <div className="card-body">
                    <div className="post-user-profile">
                        <img className="rounded-circle post-user" alt="#"
                            src="https://scontent-del1-1.xx.fbcdn.net/v/t1.18169-9/23131665_574165876259940_4711835801746709701_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0xI0emgiZV4AX_cEVgF&_nc_ht=scontent-del1-1.xx&oh=a381864a670f9efd894f4893ef8c8bd2&oe=6167ABC2" />
                        <h6><Link to='/my_profile'
                            style={{ textDecoration: "none", color: "#000", fontSize: "18px" }}>Shyam Sharma</Link>
                        </h6>
                        <p style={{ marginTop: "-7px" }}>2021-09-16</p>
                        <Link to="#post_description" style={{ textDecoration: "none", color: "#000" }}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia saepe voluptatem numquam ut obcaecati maiores, ea iste dicta itaque, temporibus nesciunt eos non? Officiis vel, optio,</p>
                        </Link>
                    </div>
                    <Link to="#post_image">
                        <img alt="#"
                            src="http://alleecreative.com/wp-content/uploads/2013/11/blog-11.jpg" width="100%"
                            height="auto" />
                    </Link>
                    <div>
                        <div className="row">
                            <div className="col-6" style={{ float: "left" }}>
                                <h6 style={{ marginTop: "10px" }}>
                                    <Link to="#liked_user"
                                        style={{ textDecoration: "none", color: "#000" }}>
                                        🥰❤️🥰【1】
                                    </Link>
                                </h6>
                            </div>
                            <div className="col-6" style={{ float: "right" }}>
                                <h6><Link to="#comment_user"
                                    style={{ textDecoration: "none", color: "#000", float: "right" }}>
                                    【1】Comment
                                </Link>
                                </h6>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <Link to="#like_btn" className="col-4 text-center reaction" role="button"
                                style={{ border: "none", textDecoration: "none", color: "#000" }}>
                                <i className="fa fa-thumbs-o-up" style={{ fontSize: "18px" }}></i> Like</Link>
                            <Link to="#comment_btn" className="col-4 text-center reaction"
                                role="button" style={{ border: "none", textDecoration: "none", color: "black" }}><i
                                    className="fa fa-edit" style={{ fontSize: "18px" }}></i> Comment</Link>
                            <Link to="#share" className="col-4 text-center reaction" role="button"
                                style={{ border: "none", textDecoration: "none", color: "black" }}><i className="fa fa-share-square-o"
                                    style={{ fontSize: "18px" }}></i> Share</Link>
                        </div>
                        <hr />
                        <form method="POST">
                            <img className="img" width="40px" height="40px" alt="#" src="https://scontent-del1-1.xx.fbcdn.net/v/t1.18169-9/23131665_574165876259940_4711835801746709701_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0xI0emgiZV4AX_cEVgF&_nc_ht=scontent-del1-1.xx&oh=a381864a670f9efd894f4893ef8c8bd2&oe=6167ABC2" style={{ borderRadius: "100%" }} />
                            <input className="user_post_comment" name="comment_data" type="text"
                                placeholder="Write a comment..." />
                        </form>
                    </div>
                </div>
            </div>
            {/* Post 2 With Description only! */}
            <div className="card" style={{ borderRadius: "10px", marginTop: "20px" }}>
                <div className="card-body">
                    <div className="post-user-profile">
                        <img className="rounded-circle post-user" alt="#"
                            src="https://scontent-del1-1.xx.fbcdn.net/v/t1.18169-9/23131665_574165876259940_4711835801746709701_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0xI0emgiZV4AX_cEVgF&_nc_ht=scontent-del1-1.xx&oh=a381864a670f9efd894f4893ef8c8bd2&oe=6167ABC2" />
                        <h6><Link to='/my_profile'
                            style={{ textDecoration: "none", color: "#000", fontSize: "18px" }}>Shyam Sharma</Link>
                        </h6>
                        <p style={{ marginTop: "-7px" }}>2021-09-16</p>
                        <Link to="#post_description" style={{ textDecoration: "none", color: "#000" }}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia saepe voluptatem numquam ut obcaecati maiores, ea iste dicta itaque, temporibus nesciunt eos non? Officiis vel, optio,</p>
                        </Link>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-6" style={{ float: "left" }}>
                                <h6 style={{ marginTop: "10px" }}>
                                    <Link to="#liked_user"
                                        style={{ textDecoration: "none", color: "#000" }}>
                                        🥰❤️🥰【1】
                                    </Link>
                                </h6>
                            </div>
                            <div className="col-6" style={{ float: "right" }}>
                                <h6><Link to="#comment_user"
                                    style={{ textDecoration: "none", color: "#000", float: "right" }}>
                                    【1】Comment
                                </Link>
                                </h6>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <Link to="#like_btn" className="col-4 text-center reaction" role="button"
                                style={{ border: "none", textDecoration: "none", color: "#000" }}>
                                <i className="fa fa-thumbs-o-up" style={{ fontSize: "18px" }}></i> Like</Link>
                            <Link to="#comment_btn" className="col-4 text-center reaction"
                                role="button" style={{ border: "none", textDecoration: "none", color: "black" }}><i
                                    className="fa fa-edit" style={{ fontSize: "18px" }}></i> Comment</Link>
                            <Link to="#share" className="col-4 text-center reaction" role="button"
                                style={{ border: "none", textDecoration: "none", color: "black" }}><i className="fa fa-share-square-o"
                                    style={{ fontSize: "18px" }}></i> Share</Link>
                        </div>
                        <hr />
                        <form method="POST">
                            <img className="img" width="40px" height="40px" alt="#" src="https://scontent-del1-1.xx.fbcdn.net/v/t1.18169-9/23131665_574165876259940_4711835801746709701_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0xI0emgiZV4AX_cEVgF&_nc_ht=scontent-del1-1.xx&oh=a381864a670f9efd894f4893ef8c8bd2&oe=6167ABC2" style={{ borderRadius: "100%" }} />
                            <input className="user_post_comment" name="comment_data" type="text"
                                placeholder="Write a comment..." />
                        </form>
                    </div>
                </div>
            </div>
            {/* Post with no data found */}
            <div className="card" style={{ borderRadius: "10px", marginTop: "20px" }}>
                <div className="card-body text-center">
                    <h4>*---- No post found ----*</h4>
                </div>
            </div>

            <br /><br />
        </div>
    );
}

export default UserProfileTop;

