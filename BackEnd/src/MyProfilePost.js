import './index.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link } from "react-router-dom"


function MyProfileTop() {
    return (
        <div className="container-md user_all_post mt-3">
            <div className="card" style={{ borderRadius: "10px" }}>
                <div className="card-body">
                    <div>
                        <img className="img" src="https://scontent-del1-1.xx.fbcdn.net/v/t1.18169-9/23131665_574165876259940_4711835801746709701_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0xI0emgiZV4AX_cEVgF&_nc_ht=scontent-del1-1.xx&oh=a381864a670f9efd894f4893ef8c8bd2&oe=6167ABC2" style={{ borderRadius: "100%" }} width="40px" height="40px" alt="#" />
                        <input className="add_post_input" type="text" placeholder="What's on your mind, Shyam?"
                            data-toggle="modal" data-target="#exampleModalCenter" />
                    </div>
                    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
                        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Create Post</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <form method="POST" encType="multipart/form-data">
                                    <div className="modal-body">
                                        <textarea maxLength="180" rows="6" name="postdescription"
                                            placeholder="What's on your mind, Shyam?"
                                            style={{ fontSize: "24px", width: "100%" }}></textarea>
                                        <li className="list-group-item"><b>Add image </b> <input type="file" name="postimage"
                                            style={{ float: "right", border: "1px solid black" }} /></li>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>Post</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <Link to="#live_btn" className="col-4 text-center live_btn py-2"><button
                            style={{ border: "none", background: "transparent" }}><i className="fa fa-video-camera" style={{ color: "red", fontSize: "20px" }}></i> <br className="br_after_768px" /><span className="live_btn_text">Live
                                Video</span></button></Link>
                        <Link to="#photo_video_btn" className="col-4 text-center photo_video_btn py-2"><button
                            style={{ border: "none", background: "transparent" }}><i className="fa fa-picture-o" style={{ color: "#32CD32", fontSize: "20px" }}></i> <br className="br_after_768px" /><span
                                className="photo_video_btn_text">Photos/Video</span></button></Link>
                        <Link to="#feelings_btn" className="col-4 text-center feelings_btn py-2"><button
                            style={{ border: "none", background: "transparent" }}><i className="fa fa-smile-o" style={{ color: "#BDB76B", fontSize: "20px" }}></i> <br className="br_after_768px" /><span
                                className="feelings_btn_text">Feelings/Activity</span></button></Link>
                    </div>
                </div>
            </div>

            {/* Post 1 with images and description */}
            <div className="card" style={{ borderRadius: "10px", marginTop: "20px" }}>
                <div className="card-body">
                    <div className="post-user-profile">
                        <img className="rounded-circle post-user" alt="#"
                            src="https://scontent-del1-1.xx.fbcdn.net/v/t31.18172-8/13995524_587137478132084_1433850126944083153_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zlhgONanG2QAX-7x3-0&_nc_ht=scontent-del1-1.xx&oh=aeb77dd0a57126f895c632beec714ec2&oe=6170D868" />
                        <h6><Link to='/user_profile'
                            style={{ textDecoration: "none", color: "#000", fontSize: "18px" }}>Akash Dixit</Link>
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
                            src="https://scontent-del1-1.xx.fbcdn.net/v/t31.18172-8/13995524_587137478132084_1433850126944083153_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zlhgONanG2QAX-7x3-0&_nc_ht=scontent-del1-1.xx&oh=aeb77dd0a57126f895c632beec714ec2&oe=6170D868" />
                        <h6><Link to='/user_profile'
                            style={{ textDecoration: "none", color: "#000", fontSize: "18px" }}>Akash Dixit</Link>
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

export default MyProfileTop;

