import React from 'react';
import '../css/styles.css';


const TopBar = () => {
    return (
        <div className="top">
            <button id="menu-btn">
                <span className="material-icons-sharp">menu</span>
            </button>
            <div className="theme-toggler">
                <span className="material-icons-sharp active">light_mode</span>
                <span className="material-icons-sharp">dark_mode</span>
            </div>
            <div className="profile">
                <div className="info">
                    <p>Hey, <b>Harold</b></p>
                    <small className="text-muted">Admin</small>
                </div>
                <div className="profile-photo">
                    <img src="..images/harold2.jpg" alt="Harold" />
                </div>
            </div>
        </div>
    );
};

export default TopBar;
