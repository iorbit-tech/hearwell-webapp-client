import React from "react";
import Icon from '@mui/material/Icon';
import { Link, Outlet } from "react-router-dom";
import "../LoginScreen/Index.scss";
import Chat from "../Chat";
const Dashboard = () => {
    return (
        <div className="container">
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
            <div className="title-bar">
                <div style={{ flexDirection: 'row', width: '80%' }}>
                    <h2 style={{ marginLeft: '40%', float: "left" }}>HearWell</h2>
                    <Icon style={{ float: 'right' }}>notifications</Icon>
                    <Icon style={{ float: 'right' }}>home</Icon>
                </div>
            </div>
            <div className="body-cont">
                <div className="left-box">
                    <>
                        <nav style={{ marginTop: 100, marginLeft: 10 }}>
                            <Link style={{ textDecoration: 'none', display: 'block', fontWeight: '700', color: '#000' }} to="/profile">Edit Profile</Link>
                            <Link style={{ textDecoration: 'none', display: 'block', marginTop: 20, fontWeight: '700', color: '#000' }} to="/blogs">View Qns</Link>
                            <Link style={{ textDecoration: 'none', display: 'block', marginTop: 20, fontWeight: '700', color: '#000' }} to="/contact">Add FAQ</Link>
                            <Link style={{ textDecoration: 'none', display: 'block', marginTop: 20, fontWeight: '700', color: '#000' }} to="/contact">View Users Hearing Diary</Link>
                        </nav>
                    </>
                </div>
                <div className="right-box">
                    <Chat />
                </div>
            </div>
        </div >
    );
};

export default Dashboard;
