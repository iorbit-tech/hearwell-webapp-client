import React from "react";
import Icon from '@mui/material/Icon';
import { Link, Outlet } from "react-router-dom";
import "../LoginScreen/Index.scss";
import Chat from "../Chat";
const Dashboard = () => {
    return (
        <div className="container" style={{ height: '100%' }}>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
            <div className="title-bar">
                <div style={{ width: '80%' }}>
                    <h1 style={{ position: 'relative', marginLeft: '40%', top: 20, float: "left", }}>HearWell</h1>
                    <div style={{ top: 60, position: 'relative', }}>
                        <Icon style={{ float: 'right' }}>notifications</Icon>
                        <Icon style={{ paddingRight: 10, float: 'right' }}>home</Icon>
                    </div>
                </div>
            </div>
            <div className="body-cont">
                <div className="left-box">
                    <>
                        <nav style={{ marginTop: 100, marginLeft: 10 }}>
                            <Link style={{ textDecoration: 'none', display: 'block', fontWeight: '700', color: '#000' }} to="/profile">Edit Profile</Link>
                            <Link style={{ textDecoration: 'none', display: 'block', marginTop: 20, fontWeight: '700', color: '#000' }} to="/addquestions">View Qns</Link>
                            <Link style={{ textDecoration: 'none', display: 'block', marginTop: 20, fontWeight: '700', color: '#000' }} to="/contact">Add FAQ</Link>
                            <Link style={{ textDecoration: 'none', display: 'block', marginTop: 20, fontWeight: '700', color: '#000' }} to="/contact">View Users Hearing Diary</Link>
                            <Link style={{ textDecoration: 'none', display: 'block', marginTop: 20, fontWeight: '700', color: '#000' }} to="/tellus">Tellus More</Link>

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
