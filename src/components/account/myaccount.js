import React, { Component, useState, useEffect } from "react";
import Web3 from "web3";
import {
    contractAddress,
    contractabi,
} from "../utils/constant";
import './myaccount.css';
import { ToastContainer, toast } from 'react-toastify';

function Myaccount() {
    return (
        <>
            <div className="container-fluid">
                <div className="Navbar">
                    <div className="rightSide">
                        <h1>MY ACCOUNT</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-5 mb-5">
                        <div className="col-sm-4 col-6 mt-3 h-100 justify-content-start  justify-content-center d-flex flex-column">
                            <h4 className="text-start">Account Balance</h4>
                            <div className="d-flex">
                                <h1>265</h1>
                                <p>BSB</p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-6 mt-3  justify-content-center d-flex flex-column">
                            <h4  className="text-start">Account Balance</h4>
                            <div className="d-flex">
                                <h1>265</h1>
                                <p>BSB</p>
                            </div>
                            <button className="btn w-75 fw-bolder p-3 accountBtn btn-warning text-dark">WITHDRAW DIVIDEND</button>
                        </div>
                        <div className="col-sm-4 col-6 mt-3  justify-content-center d-flex flex-column">
                            <h4  className="text-start">Account Balance</h4>
                            <div className="d-flex">
                                <h1>265</h1>
                                <p>BSB</p>
                            </div>
                            <button className="btn w-75 fw-bolder p-3 accountBtn btn-warning text-dark text-uppercase">WITHDRAW Commission</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Myaccount;
