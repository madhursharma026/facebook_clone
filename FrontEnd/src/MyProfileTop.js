import './index.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link } from "react-router-dom"


function MyProfileTop() {
    return (
        <div style={{ marginTop: "53px" }}>
            <div style={{ backgroundColor: "#CAC2BB" }}>
                <div className="container-md cover-profile">
                    <div className="cover" style={{ backgroundImage: "url(https://i.pinimg.com/originals/45/3d/dc/453ddc2419a3d0661726be733219cafa.jpg)", backgroundRepeat: 'no-repeat', backgroundAttachment: 'cover', backgroundSize: '100% auto', borderRadius: '10px', textAlign: 'center' }}>
                        <Link to="#profile_image">
                            <img className="profile" src="https://scontent-del1-1.xx.fbcdn.net/v/t1.18169-9/23131665_574165876259940_4711835801746709701_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=1xcf_E5a5MUAX-lKTi5&_nc_ht=scontent-del1-1.xx&oh=30105879b905b5c6680d73f8d740133f&oe=616F94C2" width="180px"
                                height="180px" alt="#" /></Link>
                    </div>
                    <h2 className="username text-center mb-4"><b>Shyam Sharma</b></h2>
                    <hr />
                    <div style={{ marginTop: "-10px" }}>
                        <Link to="/my_profile" className="btn profile_menu_btn1" style={window.location.href === 'http://localhost:3000/my_profile' ? { borderBottom: "3px solid blue", paddingBottom: "7px", color: "blue" } : { paddingBottom: "10px" }}><b>Post</b></Link>
                        <Link to="/my_about/overview" className="btn profile_menu_btn2" style={window.location.href === 'http://localhost:3000/my_about/overview' ? { borderBottom: "3px solid blue", paddingBottom: "7px", color: "blue" } : window.location.href === 'http://localhost:3000/my_about/work_and_education' ? { borderBottom: "3px solid blue", paddingBottom: "7px", color: "blue" } : window.location.href === 'http://localhost:3000/my_about/placed_lived' ? { borderBottom: "3px solid blue", paddingBottom: "7px", color: "blue" } : window.location.href === 'http://localhost:3000/my_about/contact_and_basic_info' ? { borderBottom: "3px solid blue", paddingBottom: "7px", color: "blue" } : window.location.href === 'http://localhost:3000/my_about/family_and_relationship' ? { borderBottom: "3px solid blue", paddingBottom: "7px", color: "blue" } : window.location.href === 'http://localhost:3000/my_about/my_details' ? { borderBottom: "3px solid blue", paddingBottom: "7px", color: "blue" } : window.location.href === 'http://localhost:3000/my_about/life_event' ? { borderBottom: "3px solid blue", paddingBottom: "7px", color: "blue" } : { paddingBottom: "10px" }}><b>About</b></Link>
                        <Link to="/my_friends" className="btn profile_menu_btn3" style={window.location.href === 'http://localhost:3000/my_friends' ? { borderBottom: "3px solid blue", paddingBottom: "7px", color: "blue" } : { paddingBottom: "10px" }}><b>Friends</b></Link>
                        <Link to="#edit_profile" style={{ float: "right" }} className="btn btn-secondary profile_menu_btn5 mx-2">Edit Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProfileTop;

