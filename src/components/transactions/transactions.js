import React, { Component, useState, useEffect } from "react";
import Web3 from "web3";
import { contractAddress, contractabi } from "../utils/constant";
import "./transactions.css";
import { ToastContainer, toast } from "react-toastify";
import calculatorimg from "../../asset/images/calculatoricon.png";

function Transactions() {
  const buybsb = () => {};
  const sellbsb = () => {};
  const withdrawbsb = () => {};

  return (
    <div className="container-fluid">
      <div className="Navbar">
        <div className="rightSide">
          <h1>TRANSACTIONS</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="row">
              <div className="col transactbuy">
                <h3> Buy </h3>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col transactbuy">
                <span>BSB Buy Price</span>
              </div>
            </div>
            <div className="row">
              <div className="col transactbuy">
                <h1>0.35</h1>
              </div>
            </div>
            <div className="row">
              <div className="col transactinput">
                <input placeholder="Enter BNB Amount" onChange={buybsb} />
                <img
                  src={calculatorimg}
                  className="calculatorimg"
                  alt="calculate"
                />
              </div>
            </div>
            <div className="row">
              <div className="col transactrecieve">
                <p>You will receive:</p>
              </div>
            </div>
            <div className="row">
              <div className="col transactrecieve">
                <h1>32</h1>

                <span>BSB</span>
              </div>
            </div>
            <div className="row">
              <div className="col transactrecieve">
                <button className="btn btn-warning">BUY</button>
              </div>
            </div>
          </div>

          {/* Sell Column */}
          <div className="col-md">
            <div className="row">
              <div className="col transactbuy">
                <h3> Sell </h3>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col transactbuy">
                <span>BSB Sell Price</span>
              </div>
            </div>
            <div className="row">
              <div className="col transactbuy">
                <h1>0.325</h1>
              </div>
            </div>
            <div className="row">
              <div className="col transactinput">
                <input placeholder="Enter BNB Amount" onChange={buybsb} />
                <img
                  src={calculatorimg}
                  className="calculatorimg"
                  alt="calculate"
                />
              </div>
            </div>
            <div className="row">
              <div className="col transactrecieve">
                <p>You will receive:</p>
              </div>
            </div>
            <div className="row">
              <div className="col transactrecieve">
                <h1>0</h1> <span>BNB</span>
              </div>
            </div>
            <div className="row">
              <div className="col transactrecieve">
                <button className="btn btn-warning">SELL</button>
              </div>
            </div>
          </div>
        </div>

        {/* Withdraw */}
        <div className="row">
          <div className="col-md">
            <div className="row">
              <div className="col transactbuy">
                <h3> Withdraw </h3>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col transactbuy">
                    <span>BSB Sell Price</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col transactbuy">
                    <h1>0.35</h1>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col transactbuy">
                    <span>BNB Sell Price</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col transactbuy">
                    <h1>0.35</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col transactinput">
                <input placeholder="Enter BNB Amount" onChange={buybsb} />
                <img
                  src={calculatorimg}
                  className="calculatorimg"
                  alt="calculate"
                />
              </div>
            </div>
            <div className="row">
              <div className="col transactrecieve">
                <p>You will receive:</p>
              </div>
            </div>
            <div className="row">
              <div className="col transactrecieve">
                <h1>$32</h1>

                <span>USD</span>
              </div>
            </div>
            <div className="row">
              <div className="col transactrecieve">
                <button className="btn btn-warning">WITHDRAW</button>
              </div>
            </div>
          </div>
        </div>

        {/* Transactions History */}
        <div className="row">
          <div className="accounthistory">
            <h4> Transactions History</h4>
          </div>
          <div className="accounthistory">
            <p> Showing Last 5 Transactions </p>
          </div>
        </div>
        <div className="row accounttransactions">
          <div className="col accounthead">
            <span className="No">No</span>
          </div>
          <div className="col">
            <span>Date</span>
          </div>
          <div className="col">
            <span>Transaction</span>
          </div>
          <div className="col">
            <span>Amount</span>
          </div>
          <div className="col">
            <span>Type</span>
          </div>
          <div className="col">
            <span>Balance</span>
          </div>
          <div className="col">
            <span>Remarks</span>
          </div>
        </div>

        <div className="row accounttransactions">
          <div className="col accounthead">
            <span className="No">No</span>
          </div>
          <div className="col">
            <span>Date</span>
          </div>
          <div className="col">
            <span>Transaction</span>
          </div>
          <div className="col">
            <span>Amount</span>
          </div>
          <div className="col">
            <span>Type</span>
          </div>
          <div className="col">
            <span>Balance</span>
          </div>
          <div className="col">
            <span>Remarks</span>
          </div>
        </div>
        <div className="row" style={{ margin: "3rem" }}></div>
      </div>
    </div>
  );
}

export default Transactions;
