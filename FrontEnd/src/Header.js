import './index.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link } from "react-router-dom"

function Header() {
  return (
    <div className="row fixed-top" id="Header" style={{ paddingTop: '10px' }}>
      <div className="col-6 col-md-3 col-lg-3 col-xl-4 left_sidebar_top">
        <div className="top-left">
          <form>
            &emsp; <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBQC-nXy4cClaRshFPTFjwRSt7ARpP8qRShw&usqp=CAU" height="40px" width="40px" alt="#" style={{ marginTop: '-6px', marginLeft: '-5px' }} /></Link>
            <input type="text" placeholder="&#x1F50D; Search Facebook" className="top_search_box" style={{ marginTop: '-2px', marginLeft: '10px', padding: "8px", border: '1px solid #e6e7e9', background: '#F0F2F5', borderRadius: '20px', fontSize: '15px', height: '39px' }} />
            <button type="button" className="btn py-2 mx-2" id="searchbar_open_btn_after_1199px" style={{ borderRadius: "100%", backgroundColor: "#F0F2F5", marginTop: "-5px" }}>&#x1F50D;</button>
            <Link to="#top_right_sidebar_icon_after_768px" className="col btn" id="top_right_sidebar_icon_after_768px" role="button" style={{ marginTop: "-5px" }}>
              <i className="fa fa-bars" style={{ fontSize: "26px" }}></i>
            </Link>
          </form>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-4 center_sidebar_top text-center mt-1 hide_after_medium_scrn">
        <div className="row">
          <Link to="/" className="col" id="myDiv1" style={window.location.href === 'http://localhost:3000/' ? { borderBottom: "3px solid blue", paddingBottom: "10px" } : { paddingBottom: "10px" }}>
            <svg height="28" width="28">
              <path
                d="M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29">
              </path>
            </svg>
          </Link>
          <Link to="/friend_requests" className="col" id="myDiv2" style={window.location.href === 'http://localhost:3000/friend_requests' ? { borderBottom: "3px solid blue", paddingBottom: "10px" } : { paddingBottom: "10px" }}>
            <svg height="28" width="28">
              <path
                d="M10.5 4.5c-2.272 0-2.75 1.768-2.75 3.25C7.75 9.542 8.983 11 10.5 11s2.75-1.458 2.75-3.25c0-1.482-.478-3.25-2.75-3.25zm0 8c-2.344 0-4.25-2.131-4.25-4.75C6.25 4.776 7.839 3 10.5 3s4.25 1.776 4.25 4.75c0 2.619-1.906 4.75-4.25 4.75zm9.5-6c-1.41 0-2.125.841-2.125 2.5 0 1.378.953 2.5 2.125 2.5 1.172 0 2.125-1.122 2.125-2.5 0-1.659-.715-2.5-2.125-2.5zm0 6.5c-1.999 0-3.625-1.794-3.625-4 0-2.467 1.389-4 3.625-4 2.236 0 3.625 1.533 3.625 4 0 2.206-1.626 4-3.625 4zm4.622 8a.887.887 0 00.878-.894c0-2.54-2.043-4.606-4.555-4.606h-1.86c-.643 0-1.265.148-1.844.413a6.226 6.226 0 011.76 4.336V21h5.621zm-7.122.562v-1.313a4.755 4.755 0 00-4.749-4.749H8.25A4.755 4.755 0 003.5 20.249v1.313c0 .518.421.938.937.938h12.125c.517 0 .938-.42.938-.938zM20.945 14C24.285 14 27 16.739 27 20.106a2.388 2.388 0 01-2.378 2.394h-5.81a2.44 2.44 0 01-2.25 1.5H4.437A2.44 2.44 0 012 21.562v-1.313A6.256 6.256 0 018.25 14h4.501a6.2 6.2 0 013.218.902A5.932 5.932 0 0119.084 14h1.861z">
              </path>
            </svg>
          </Link>
          <Link to="#watch" className="col" id="myDiv3">
            <svg height="28" width="28">
              <path
                d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.163 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.163 11.654C17.612 11.924 17.612 12.575 17.163 12.846ZM21.75 20.25C22.992 20.25 24 19.242 24 18L24 6.5C24 5.258 22.992 4.25 21.75 4.25L6.25 4.25C5.008 4.25 4 5.258 4 6.5L4 18C4 19.242 5.008 20.25 6.25 20.25L21.75 20.25ZM21.75 21.75 6.25 21.75C4.179 21.75 2.5 20.071 2.5 18L2.5 6.5C2.5 4.429 4.179 2.75 6.25 2.75L21.75 2.75C23.821 2.75 25.5 4.429 25.5 6.5L25.5 18C25.5 20.071 23.821 21.75 21.75 21.75Z">
              </path>
            </svg>
          </Link>
          <Link to="#marketplace" className="col" id="myDiv4">
            <svg height="28" width="28">
              <path
                d="M17.5 23.75 21.75 23.75C22.164 23.75 22.5 23.414 22.5 23L22.5 14 22.531 14C22.364 13.917 22.206 13.815 22.061 13.694L21.66 13.359C21.567 13.283 21.433 13.283 21.34 13.36L21.176 13.497C20.591 13.983 19.855 14.25 19.095 14.25L18.869 14.25C18.114 14.25 17.382 13.987 16.8 13.506L16.616 13.354C16.523 13.278 16.39 13.278 16.298 13.354L16.113 13.507C15.53 13.987 14.798 14.25 14.044 14.25L13.907 14.25C13.162 14.25 12.439 13.994 11.861 13.525L11.645 13.35C11.552 13.275 11.419 13.276 11.328 13.352L11.155 13.497C10.57 13.984 9.834 14.25 9.074 14.25L8.896 14.25C8.143 14.25 7.414 13.989 6.832 13.511L6.638 13.351C6.545 13.275 6.413 13.275 6.32 13.351L5.849 13.739C5.726 13.84 5.592 13.928 5.452 14L5.5 14 5.5 23C5.5 23.414 5.836 23.75 6.25 23.75L10.5 23.75 10.5 17.5C10.5 16.81 11.06 16.25 11.75 16.25L16.25 16.25C16.94 16.25 17.5 16.81 17.5 17.5L17.5 23.75ZM3.673 8.75 24.327 8.75C24.3 8.66 24.271 8.571 24.238 8.483L23.087 5.355C22.823 4.688 22.178 4.25 21.461 4.25L6.54 4.25C5.822 4.25 5.177 4.688 4.919 5.338L3.762 8.483C3.729 8.571 3.7 8.66 3.673 8.75ZM24.5 10.25 3.5 10.25 3.5 12C3.5 12.414 3.836 12.75 4.25 12.75L4.421 12.75C4.595 12.75 4.763 12.69 4.897 12.58L5.368 12.193C6.013 11.662 6.945 11.662 7.59 12.193L7.784 12.352C8.097 12.609 8.49 12.75 8.896 12.75L9.074 12.75C9.483 12.75 9.88 12.607 10.194 12.345L10.368 12.2C11.01 11.665 11.941 11.659 12.589 12.185L12.805 12.359C13.117 12.612 13.506 12.75 13.907 12.75L14.044 12.75C14.45 12.75 14.844 12.608 15.158 12.35L15.343 12.197C15.989 11.663 16.924 11.663 17.571 12.197L17.755 12.35C18.068 12.608 18.462 12.75 18.869 12.75L19.095 12.75C19.504 12.75 19.901 12.606 20.216 12.344L20.38 12.208C21.028 11.666 21.972 11.666 22.62 12.207L23.022 12.542C23.183 12.676 23.387 12.75 23.598 12.75 24.097 12.75 24.5 12.347 24.5 11.85L24.5 10.25ZM24 14.217 24 23C24 24.243 22.993 25.25 21.75 25.25L6.25 25.25C5.007 25.25 4 24.243 4 23L4 14.236C2.875 14.112 2 13.158 2 12L2 9.951C2 9.272 2.12 8.6 2.354 7.964L3.518 4.802C4.01 3.563 5.207 2.75 6.54 2.75L21.461 2.75C22.793 2.75 23.99 3.563 24.488 4.819L25.646 7.964C25.88 8.6 26 9.272 26 9.951L26 11.85C26 13.039 25.135 14.026 24 14.217ZM16 23.75 16 17.75 12 17.75 12 23.75 16 23.75Z">
              </path>
            </svg>
          </Link>
          <Link to="#gaming" className="col" id="myDiv5">
            <svg height="28" width="28">
              <path
                d="M23.5 9.5H10.25a.75.75 0 00-.75.75v7c0 .414.336.75.75.75H17v5.5H4.5v-19h19v5zm0 14h-5v-6.25a.75.75 0 00-.75-.75H11V11h12.5v12.5zm1.5.25V4.25C25 3.561 24.439 3 23.75 3H4.25C3.561 3 3 3.561 3 4.25v19.5c0 .689.561 1.25 1.25 1.25h19.5c.689 0 1.25-.561 1.25-1.25z">
              </path>
            </svg>
          </Link>
          <Link to="#top_right_sidebar_icon_after_991px" className="col btn" id="top_right_sidebar_icon_after_991px" role="button" style={{ marginTop: "-5px" }}>
            <i className="fa fa-bars" style={{ fontSize: "26px" }}></i>
          </Link>
        </div>
      </div>
      <div className="col-6 col-md-3 col-lg-3 col-xl-4 right_sidebar_top" style={{ textAlign: "right" }}>
        <Link to="/my_profile" style={window.location.href === 'http://localhost:3000/my_profile' ? { textDecoration: "none", color: "#000", paddingBottom: '12px', paddingTop: '6px', paddingLeft: '3px', borderRadius: "50px", backgroundColor: "#DBE7F2" } : window.location.href === 'http://localhost:3000/my_about/overview' ? { textDecoration: "none", color: "#000", paddingBottom: '12px', paddingTop: '6px', paddingLeft: '3px', borderRadius: "50px", backgroundColor: "#DBE7F2" } : window.location.href === 'http://localhost:3000/my_about/overview' ? { textDecoration: "none", color: "#000", paddingBottom: '12px', paddingTop: '6px', paddingLeft: '3px', borderRadius: "50px", backgroundColor: "#DBE7F2" } : window.location.href === 'http://localhost:3000/my_about/work_and_education' ? { textDecoration: "none", color: "#000", paddingBottom: '12px', paddingTop: '6px', paddingLeft: '3px', borderRadius: "50px", backgroundColor: "#DBE7F2" } : window.location.href === 'http://localhost:3000/my_friends' ? { textDecoration: "none", color: "#000", paddingBottom: '12px', paddingTop: '6px', paddingLeft: '3px', borderRadius: "50px", backgroundColor: "#DBE7F2" } : window.location.href === 'http://localhost:3000/my_about/work_and_education' ? { textDecoration: "none", color: "#000", paddingBottom: '12px', paddingTop: '6px', paddingLeft: '3px', borderRadius: "50px", backgroundColor: "#DBE7F2" } : window.location.href === 'http://localhost:3000/my_about/placed_lived' ? { textDecoration: "none", color: "#000", paddingBottom: '12px', paddingTop: '6px', paddingLeft: '3px', borderRadius: "50px", backgroundColor: "#DBE7F2" } : window.location.href === 'http://localhost:3000/my_about/contact_and_basic_info' ? { textDecoration: "none", color: "#000", paddingBottom: '12px', paddingTop: '6px', paddingLeft: '3px', borderRadius: "50px", backgroundColor: "#DBE7F2" } : window.location.href === 'http://localhost:3000/my_about/family_and_relationship' ? { textDecoration: "none", color: "#000", paddingBottom: '12px', paddingTop: '6px', paddingLeft: '3px', borderRadius: "50px", backgroundColor: "#DBE7F2" } : window.location.href === 'http://localhost:3000/my_about/my_details' ? { textDecoration: "none", color: "#000", paddingBottom: '12px', paddingTop: '6px', paddingLeft: '3px', borderRadius: "50px", backgroundColor: "#DBE7F2" } : window.location.href === 'http://localhost:3000/my_about/life_event' ? { textDecoration: "none", color: "#000", paddingBottom: '12px', paddingTop: '6px', paddingLeft: '3px', borderRadius: "50px", backgroundColor: "#DBE7F2" } : { textDecoration: "none", color: "#000" }} className="top_right_profile_img_with_firstname"><img
          src="https://scontent-del1-1.xx.fbcdn.net/v/t1.18169-9/23131665_574165876259940_4711835801746709701_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0xI0emgiZV4AX_cEVgF&_nc_ht=scontent-del1-1.xx&oh=a381864a670f9efd894f4893ef8c8bd2&oe=6167ABC2" alt="#" height="35px" width="35px"
          style={{ borderRadius: "100%" }} />
          <span style={{ marginLeft: "10px" }}><b>Shyam</b></span>&emsp;
        </Link>
        <span>
          <Link to="#top_right_sidebar_icon_after_1199px" className="btn mx-2" id="top_right_sidebar_icon_after_1199px" style={{ borderRadius: "100%", backgroundColor: "rgb(221, 221, 221)", marginTop: "-5px" }} role="button"><i className="fa fa-bars" style={{ fontSize: "18px" }}></i></Link>
        </span>
        <span>
          <Link to="#menu" className="btn" id="menu" style={{ borderRadius: "100%", background: "rgb(221, 221, 221)" }} role="button"><i className="fa fa-th" style={{ fontSize: "18px" }}></i></Link>
        </span>
        <span>
          <Link to="#menu_with_plus_sign_after_991px" className="btn" id="menu_with_plus_sign_after_991px" style={{ borderRadius: "100%", background: "rgb(221, 221, 221)" }}
            role="button"><i className="fa fa-plus" style={{ fontSize: "18px" }}></i></Link>
        </span>
        <span>
          <Link to="#notify" className="btn" id="notification_bell" style={{ borderRadius: "100%", background: "rgb(221, 221, 221)", marginLeft: "7px" }}
            role="button"><i className="fa fa-bell"
              style={{ fontSize: "18px" }}></i></Link>
          <span className="badge badge-light">1</span>
        </span>
        <Link to="#" className="btn" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
          style={{ borderRadius: "100%", background: "rgb(221, 221, 221)", marginLeft: "-15px", marginRight: "10px" }}
          role="button"><i className="fa fa-arrow-down" style={{ fontSize: "18px" }}></i>
        </Link>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <Link to="/my_profile" className="dropdown-item">👨‍💼 My Profile</Link>
          </li>
          <li>
            <Link to="#setting_and_privacy" className="dropdown-item"><i className="fa fa-cog" style={{ fontSize: "18px" }}></i> Setting and Privacy</Link>
          </li>
          <li>
            <Link to="#logout" className="dropdown-item"><i className="fa fa-sign-out" style={{ fontSize: "18px" }}></i> Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;




