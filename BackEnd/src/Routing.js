import './index.css';
import React from 'react'
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import MainContent from './MainContent';
import RightSidebar from './RightSidebar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import FriendsRequest from './FriendsRequest';
import MyProfileTop from './MyProfileTop';
import MyProfilePost from './MyProfilePost';
import MyProfileAbout from './MyProfileAbout';
import MyProfileFriends from './MyProfileFriends';
import UserProfileTop from './UserProfileTop';
import UserProfilePost from './UserProfilePost';
import UserProfileAbout from './UserProfileAbout';
import UserProfileFriends from './UserProfileFriends';



function Routing() {
    return (
        <div className="Routing">
            <Router>
                <Route exact path="/">
                    <Header />
                    <div className="row px-2" style={{ paddingTop: "72px" }}>
                        <div className="col-lg-3 col-xl-3 left_sidebar" style={{ position: "fixed" }}>
                            <LeftSidebar />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-6 main_content">
                            <MainContent />
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 right_sidebar">
                            <RightSidebar />
                        </div>
                    </div>
                </Route>

                <Route exact path="/friend_requests">
                    <Header />
                    <FriendsRequest />
                </Route>

                <Route exact path="/my_profile">
                    <Header />
                    <MyProfileTop />
                    <MyProfilePost />
                </Route>

                <Route exact path="/my_friends">
                    <Header />
                    <MyProfileTop />
                    <MyProfileFriends />
                </Route>

                <Route exact path="/my_about/overview">
                    <Header />
                    <MyProfileTop />
                    <MyProfileAbout />
                </Route>
                <Route exact path="/my_about/work_and_education">
                    <Header />
                    <MyProfileTop />
                    <MyProfileAbout />
                </Route>
                <Route exact path="/my_about/placed_lived">
                    <Header />
                    <MyProfileTop />
                    <MyProfileAbout />
                </Route>
                <Route exact path="/my_about/contact_and_basic_info">
                    <Header />
                    <MyProfileTop />
                    <MyProfileAbout />
                </Route>
                <Route exact path="/my_about/family_and_relationship">
                    <Header />
                    <MyProfileTop />
                    <MyProfileAbout />
                </Route>
                <Route exact path="/my_about/my_details">
                    <Header />
                    <MyProfileTop />
                    <MyProfileAbout />
                </Route>
                <Route exact path="/my_about/life_event">
                    <Header />
                    <MyProfileTop />
                    <MyProfileAbout />
                </Route>

                <Route exact path="/user_profile">
                    <Header />
                    <UserProfileTop />
                    <UserProfilePost />
                </Route>

                <Route exact path="/user_friends">
                    <Header />
                    <UserProfileTop />
                    <UserProfileFriends />
                </Route>

                <Route exact path="/user_about/overview">
                    <Header />
                    <UserProfileTop />
                    <UserProfileAbout />
                </Route>
                <Route exact path="/user_about/work_and_education">
                    <Header />
                    <UserProfileTop />
                    <UserProfileAbout />
                </Route>
                <Route exact path="/user_about/placed_lived">
                    <Header />
                    <UserProfileTop />
                    <UserProfileAbout />
                </Route>
                <Route exact path="/user_about/contact_and_basic_info">
                    <Header />
                    <UserProfileTop />
                    <UserProfileAbout />
                </Route>
                <Route exact path="/user_about/family_and_relationship">
                    <Header />
                    <UserProfileTop />
                    <UserProfileAbout />
                </Route>
                <Route exact path="/user_about/user_details">
                    <Header />
                    <UserProfileTop />
                    <UserProfileAbout />
                </Route>
                <Route exact path="/user_about/life_event">
                    <Header />
                    <UserProfileTop />
                    <UserProfileAbout />
                </Route>

            </Router>
        </div>
    );
}
export default Routing;