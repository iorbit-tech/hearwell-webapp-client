import React from "react";
import { Link, Outlet } from "react-router-dom";
import LoginForm from "../../Components/LoginForm/Index";
import "../LoginScreen/Index.scss";
const Profile = () => {
    return (
        <div className="container">
            <div className="title-bar"><h2 style={{ textAlign: 'center' }}>HearWell</h2></div>
            <div className="body-cont">
                <div className="left-box">
                    <>
                        <nav style={{ marginTop: 100, marginLeft: 10 }}>
                            <Link style={{ textDecoration: 'none', display: 'block', fontWeight: '700', color: '#000' }} to="/">Edit Profile</Link>
                            <Link style={{ textDecoration: 'none', display: 'block', marginTop: 20, fontWeight: '700', color: '#000' }} to="/blogs">View Qns</Link>
                            <Link style={{ textDecoration: 'none', display: 'block', marginTop: 20, fontWeight: '700', color: '#000' }} to="/contact">Add FAQ</Link>
                            <Link style={{ textDecoration: 'none', display: 'block', marginTop: 20, fontWeight: '700', color: '#000' }} to="/contact">View Users Hearing Diary</Link>
                        </nav>

                        <Outlet />
                    </>
                </div>
                <div className="right-box">
                    <p>Profile</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
