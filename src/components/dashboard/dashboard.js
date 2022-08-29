import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { contractAddress, contractabi } from "../utils/constant";
import "./dashboard.css";
import { ToastContainer, toast } from "react-toastify";

import copy from "../../asset/images/documentscopy.png";

function Dashboard() {
  let accountAd;
  const [account, setAccount] = useState("Register");
  const copyReferralLink = () => {
    try {
      let get = document.getElementById("refer").select();
      document.execCommand("copy");
    } catch (e) {
      console.log(e);
    }
  };
  const gettimer = () => {
    try {
      let Currenttimestamp = Date.now();
      let block = new Date(1626459784 * 1000);
      let diff = block - Currenttimestamp;

      let hours = Math.floor(diff / 1000 / 3600); // get hours
      let minutes = Math.floor((diff / 1000 - hours * 3600) / 60); // get minutes
      let seconds = Math.floor(diff / 1000 - hours * 3600 - minutes * 60); // get seconds
      // let remMinutes = remHours
    } catch (e) {
      console.log(e);
    }
  };

  const getreferralAddress = () => {
    try {
      let url = window.location.href;
      if (url.includes("?ref=")) {
        let getAddress = window.location.href.split("?ref=")[1];
        let final = getAddress.slice(0, 42);
        // getDirectFromUrl = final;
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    setInterval(() => {
      gettimer();
    }, 2000);
  }, []);

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-8 dashheading">
            <h1> Grow your savings easily with Crypto. </h1>
            <p>Convenient access to cryptocurrency in minutes</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-3 dashreferral">
                <span className="referral-title"> My Referral Link </span>
              </div>
              <div className="col-sm-9 dashreferral">
                <input
                  id="refer"
                  value={`${window.location.protocol}//${window.location.host}/login?ref=${account}`}
                  style={{
                    fontWeight: "600",
                  }}
                />
                <a onClick={copyReferralLink}>
                  <img src={copy} className="copy" title="copy" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4 dashdetail">
                <div className="row">
                  <div className="col-sm-2 dashtext">BSB</div>
                  <div
                    className="col-sm-2 dashtext"
                    style={{ color: "greenyellow" }}
                  >
                    +45%
                  </div>
                </div>
                <div className="row">
                  <div className="col dashnumebr">0.34</div>
                </div>
              </div>
              <div className="col-md-5 dashdetail">
                <div className="row">
                  <div className="col dashtext">BSB Market Cap</div>
                </div>
                <div className="row">
                  <div className="col dashnumebr">1,284,566</div>
                  <div
                    className="col dashtext"
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      padding: "5px 1px",
                      margin: "0",
                    }}
                  >
                    BSB
                  </div>
                </div>
              </div>
              <div className="col-md-3 dashdetail">
                <div className="row">
                  <div className="col dashtext">BSB Circulation Supply</div>
                </div>
                <div className="row">
                  <div className="col dashnumebr">644,326</div>
                  <div
                    className="col dashtext"
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      padding: "5px 1px",
                    }}
                  >
                    BSB
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col dashdmarket">
            <p>Market Watch</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10">
            <div className="row dashrates">
              <div className="col-md">
                <div className="row">
                  <span className="col-sm-5">ADA/BUSD</span>
                  <span className="col-sm-3" style={{ color: "red" }}>
                    -0.37%
                  </span>
                </div>
                <div className="row">
                  <p className="col">1.3427</p>
                </div>
                <div className="row">
                  <span className="col">$1.34</span>
                </div>
              </div>
              <div className="col-md">
                <div className="row">
                  <span className="col-sm-5">ADA/BUSD</span>
                  <span className="col-sm-3" style={{ color: "red" }}>
                    -0.37%
                  </span>
                </div>
                <div className="row">
                  <p className="col">1.3427</p>
                </div>
                <div className="row">
                  <span className="col">$1.34</span>
                </div>
              </div>{" "}
              <div className="col-md">
                <div className="row">
                  <span className="col-sm-5">ADA/BUSD</span>
                  <span className="col-sm-3" style={{ color: "red" }}>
                    -0.37%
                  </span>
                </div>
                <div className="row">
                  <p className="col">1.3427</p>
                </div>
                <div className="row">
                  <span className="col">$1.34</span>
                </div>
              </div>{" "}
              <div className="col-md">
                <div className="row">
                  <span className="col-sm-5">ADA/BUSD</span>
                  <span className="col-sm-3" style={{ color: "red" }}>
                    -0.37%
                  </span>
                </div>
                <div className="row">
                  <p className="col">1.3427</p>
                </div>
                <div className="row">
                  <span className="col">$1.34</span>
                </div>
              </div>{" "}
              <div className="col-md">
                <div className="row">
                  <span className="col-sm-5">ADA/BUSD</span>
                  <span className="col-sm-3" style={{ color: "red" }}>
                    -0.37%
                  </span>
                </div>
                <div className="row">
                  <p className="col">1.3427</p>
                </div>
                <div className="row">
                  <span className="col">$1.34</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
