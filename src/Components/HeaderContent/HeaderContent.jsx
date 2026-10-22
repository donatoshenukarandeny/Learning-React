import React from 'react';
import './HeaderContent.css';
import MenuLink from '../MenuLink/MenuLink'; 

function HeaderContent() {
    return (
        <div className="header-container">
            <div className="logo-section">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                    alt="React Logo" 
                    className="react-logo"
                />
            </div>

            <div className="nav-links">
                <MenuLink linkName="Home" url="#home"/> 
                <MenuLink linkName="About" url="#about"/> 
                <MenuLink linkName="Contact" url="#contact"/> 
                <MenuLink linkName="Login" url="#login"/> 
            </div>
        </div>
    );
};

export default HeaderContent;