import './index.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link } from "react-router-dom"

function LeftSidebar() {
    return (
        <div>
            <Link to="/my_profile" style={{ textDecoration: "none", color: "black", fontWeight: "600", borderRadius: "10px", padding: "10px", width: "100%", display: "block", fontSize: "15px" }}
                className="left_sidebar_menu"><img src="https://scontent-del1-1.xx.fbcdn.net/v/t1.18169-9/23131665_574165876259940_4711835801746709701_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0xI0emgiZV4AX_cEVgF&_nc_ht=scontent-del1-1.xx&oh=a381864a670f9efd894f4893ef8c8bd2&oe=6167ABC2" alt="#"
                    height="35px" width="35px" style={{ borderRadius: "100%" }} />&nbsp;&nbsp;Shyam Sharma</Link>
            <Link to="/my_friends" style={{ textDecoration: "none", color: "black", fontWeight: "600", borderRadius: "10px", padding: "10px", width: "100%", display: "block", fontSize: "15px" }}
                className="left_sidebar_menu"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png" alt="#"
                    height="35px" width="35px" style={{ borderRadius: "100%" }} />&nbsp;&nbsp;Friends</Link>
            <Link to="#watch" style={{ textDecoration: "none", color: "black", fontWeight: "600", borderRadius: "10px", padding: "10px", width: "100%", display: "block", fontSize: "15px" }}
                className="left_sidebar_menu"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png" alt="#"
                    height="35px" width="35px" style={{ borderRadius: "100%" }} />&nbsp;&nbsp;Watch</Link>
            <Link to="#memories" style={{ textDecoration: "none", color: "black", fontWeight: "600", borderRadius: "10px", padding: "10px", width: "100%", display: "block", fontSize: "15px" }}
                className="left_sidebar_menu"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/VPndBxotRgH.png" alt="#"
                    height="35px" width="35px" style={{ borderRadius: "100%" }} />&nbsp;&nbsp;Menories</Link>
            <Link to="#groups" style={{ textDecoration: "none", color: "black", fontWeight: "600", borderRadius: "10px", padding: "10px", width: "100%", display: "block", fontSize: "15px" }}
                className="left_sidebar_menu"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" alt="#"
                    height="35px" width="35px" style={{ borderRadius: "100%" }} />&nbsp;&nbsp;Groups</Link>
            <Link to="#marketplace" style={{ textDecoration: "none", color: "black", fontWeight: "600", borderRadius: "10px", padding: "10px", width: "100%", display: "block", fontSize: "15px" }}
                className="left_sidebar_menu"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png" alt="#"
                    height="35px" width="35px" style={{ borderRadius: "100%" }} />&nbsp;&nbsp;Marketplace</Link>
            <Link to="#saved" style={{ textDecoration: "none", color: "black", fontWeight: "600", borderRadius: "10px", padding: "10px", width: "100%", display: "block", fontSize: "15px" }}
                className="left_sidebar_menu"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png" alt="#"
                    height="35px" width="35px" style={{ borderRadius: "100%" }} />&nbsp;&nbsp;Saved</Link>
            <Link to="#pages" style={{ textDecoration: "none", color: "black", fontWeight: "600", borderRadius: "10px", padding: "10px", width: "100%", display: "block", fontSize: "15px" }}
                className="left_sidebar_menu"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png" alt="#"
                    height="35px" width="35px" style={{ borderRadius: "100%" }} />&nbsp;&nbsp;Pages</Link>
            <Link to="#events" style={{ textDecoration: "none", color: "black", fontWeight: "600", borderRadius: "10px", padding: "10px", width: "100%", display: "block", fontSize: "15px" }}
                className="left_sidebar_menu"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png" alt="#"
                    height="35px" width="35px" style={{ borderRadius: "100%" }} />&nbsp;&nbsp;Events</Link>
            <Link to="#jobs" style={{ textDecoration: "none", color: "black", fontWeight: "600", borderRadius: "10px", padding: "10px", width: "100%", display: "block", fontSize: "15px" }}
                className="left_sidebar_menu"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/DO-SN-shaZL.png" alt="#"
                    height="35px" width="35px" style={{ borderRadius: "100%" }} />&nbsp;&nbsp;Jobs</Link>
            <Link to="#most_recent" style={{ textDecoration: "none", color: "black", fontWeight: "600", borderRadius: "10px", padding: "10px", width: "100%", display: "block", fontSize: "15px" }}
                className="left_sidebar_menu"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/w-vdKCGzCy1.png" alt="#"
                    height="35px" width="35px" style={{ borderRadius: "100%" }} />&nbsp;&nbsp;Most recent</Link>
        </div>
    );
}

export default LeftSidebar;

