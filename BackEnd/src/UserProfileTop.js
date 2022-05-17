import './index.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link } from "react-router-dom"


function UserProfileTop() {
    return (
        <div style={{ marginTop: "53px" }}>
            <div style={{ backgroundColor: "#CAC2BB" }}>
                <div className="container-md cover-profile">
                    <div className="cover" style={{ backgroundImage: "url(https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-9/p180x540/155809141_1769613029884517_8034307439240671465_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=vnF_HZu7nbcAX9Oll6E&tn=hSTYuB326lD4g9mT&_nc_ht=scontent-del1-1.xx&oh=be2c3f8dabb68c528b356918ebd2c1bb&oe=61703443)", backgroundRepeat: 'no-repeat', backgroundAttachment: 'cover', backgroundSize: '100% auto', borderRadius: '10px', textAlign: 'center' }}>
                        <Link to="#profile_image">
                            <img className="profile" src="https://scontent-del1-1.xx.fbcdn.net/v/t31.18172-1/p200x200/13995524_587137478132084_1433850126944083153_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=zlhgONanG2QAX-7x3-0&_nc_ht=scontent-del1-1.xx&oh=bc94651203914fb353079660c0041c33&oe=61723B86" width="180px"
                                height="180px" alt="#" /></Link>
                    </div>
                    <h2 className="username text-center mb-4"><b>Akash Dixit</b></h2>
                    <hr />
                    <div style={{ marginTop: "-10px" }}>
                        <Link to="/user_profile" className="btn profile_menu_btn1" style={window.location.href === 'http://localhost:3000/user_profile' ? { borderBottom: "3px solid blue", paddingBottom: "7px", color: "blue" } : { paddingBottom: "10px" }}><b>Post</b></Link>
                        <Link to="/user_about/overview" className="btn profile_menu_btn2" style={window.location.href === 'http://localhost:3000/user_about/overview' ? { borderBottom: "3px solid blue", paddingBottom: "7px", color: "blue" } : window.location.href === 'http://localhost:3000/user_about/work_and_education' ? { borderBottom: "3px solid blue", paddingBottom: "7px", color: "blue" } : window.location.href === 'http://localhost:3000/user_about/placed_lived' ? { borderBottom: "3px solid blue", paddingBottom: "7px", color: "blue" } : window.location.href === 'http://localhost:3000/user_about/contact_and_basic_info' ? { borderBottom: "3px solid blue", paddingBottom: "7px", color: "blue" } : window.location.href === 'http://localhost:3000/user_about/family_and_relationship' ? { borderBottom: "3px solid blue", paddingBottom: "7px", color: "blue" } : window.location.href === 'http://localhost:3000/user_about/user_details' ? { borderBottom: "3px solid blue", paddingBottom: "7px", color: "blue" } : window.location.href === 'http://localhost:3000/user_about/life_event' ? { borderBottom: "3px solid blue", paddingBottom: "7px", color: "blue" } : { paddingBottom: "10px" }}><b>About</b></Link>
                        <Link to="/user_friends" className="btn profile_menu_btn3" style={window.location.href === 'http://localhost:3000/user_friends' ? { borderBottom: "3px solid blue", paddingBottom: "7px", color: "blue" } : { paddingBottom: "10px" }}><b>Friends</b></Link>
                        <Link to="#add_friend" style={{ float: "right" }} className="btn btn-secondary profile_menu_btn5 mx-2">Add Friends</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfileTop;




