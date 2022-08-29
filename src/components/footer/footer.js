import React, { Component, useState, useEffect } from "react";
import Web3 from "web3";
import {
    contractAddress,
    contractabi,
} from "../utils/constant";
import './footer.css';
import { ToastContainer, toast } from 'react-toastify';

import logo from "../../asset/images/bsblogo.png";

function Footer() {
    return (
        <div className="container-fluid">
            <div className="Navbar row" style={{ position: "relative", zIndex: "1" }}>
                <div className="rightSide col">
                    <span href="#home">
                        <img className="logo" src={logo} alt="Logo" style={{ padding: "0px 10px" }} />
                    </span>
                    <span className="footer-title">BINANCE SMARTBANK</span>
                </div>
                <div className="leftSide col">
                    <div>
                        <span href="#">
                            All Rights Reserved 2021, Binance Smartbank
                        </span>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Footer;