import React, { useRef, useState, useEffect } from "react";
import Particles from "react-particles-js";
import { toast } from "react-toastify";
import "./header.css";
import VerticalBar from "./VerticalBar";
function Header() {
  const [bnb, setBNB] = useState("+0.45%");

  const [copySuccess, setCopySuccess] = useState("");
  const [privateKey0, setprivateKey0] = useState(
    "ba8bacab1e7b6ce164bad3dea393bcb9a0a026081273460eaee60fdbbc28d44a"
  );
  const [privateKey1, setprivateKey1] = useState(
    "89c4098103efc3e5ac312a2eb03781409b30b2e2366469be93094bb39bfedd4d"
  );
  // const textAreaRef = useRef(null);
  const [textAreaRef, settextAreaRef] = useState("");
  const [account, setaccount] = useState(
    "0x2313C8D0D6757E1bd44bDabe7225be31EC20D85D"
  );

  function copyToClipboard(e) {
    // textAreaRef.current.select();
    let get = document.getElementById("textAreaRef").select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    toast.success("copied!");
    // setCopySuccess('Copied!');
  }
  const getUrl = () => {
    var url = window.location.href;
    settextAreaRef(url);
  };
  useEffect(() => {
    setInterval(() => {
      getUrl();
    }, 1000);
  }, []);

  return (
    <>
      <Particles
        style={{
          position: "absolute",
          position: "absolute",
          left: "0px",
          zIndex: "-3",
        }}
        height="140%"
        width="100%"
        params={{
          particles: {
            color: { value: "#000000" },
            line_linked: { color: { value: "#bdbdbd" } },
            number: { value: 50 },
            size: { value: 3 },
          },
        }}
      />
      <div className=" container w-100 headerDiv ">
        <div className="">
          <div className="d-flex mt-4 mb-5 flex-column">
            <h2>Grow your savings easily with Crypto</h2>
            <p>Convenient access to cryptocurrency in minutes</p>
            <div className="d-flex flex-sm-wrap flex-md-nowrap flex-lg-nowrap flex-wrap align-items-center btnInpo_head_div">
              <button className="btn btn-warning text-black fw-bolder">
                My Referral Link
              </button>
              <div className="border border-warning d-flex justify-content-center align-items-center">
                <input
                  id="textAreaRef"
                  value={`${window.location.protocol}//${window.location.host}/login?ref=${account}`}
                  className=" border-0 bg-transparent inpoClass"
                  placeholder="Enter ..."
                  type="text"
                />
                <i
                  onClick={copyToClipboard}
                  class="far fa-copy"
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
            </div>
            <p className="text-center text-success">{copySuccess}</p>
          </div>

          <div class="container mt-5">
            <div class="row mt-5">
              <div class="col-12 mobileMargin_for_c2 col_1 col-md-3 mt-sm-5 order-1 order-sm-last align-self-center order-md-0">
                <div className="d-flex justify-content-between">
                  <h6>BNB</h6>
                  <h6>{bnb}</h6>
                </div>
                <div className="d-flex">
                  <h4>$0.35</h4>
                  <p>USD</p>
                </div>
                <div className="mt-4">
                  <p className="text-start">BNB Circulation Supply</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="fw-bold fs-3">644,326</p>
                    <p>BNB</p>
                  </div>
                </div>
                <div className="mt-4 ">
                  <p className="text-start">BNB Market Cap Value</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="fw-bold fs-3">$ 436,752</p>
                    <p>USD</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-start">BNB Market Cap</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="fw-bold fs-3">644,326</p>
                    <p>BSB</p>
                  </div>
                </div>
              </div>
              <div class="col-12 col_2 col-md-8 order-0 mt-sm-5 mb-sm-5 order-md-1 order-sm-first">
                <VerticalBar />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h4 className=" fs-1">Market Watch</h4>
            <div className="mt-4 d-flex justify-content-between text-start flex-wrap">
              <div className="d-flex footersmallcard flex-column ">
                <div className="d-flex justify-content-sm-between fontWeightSmall">
                  <p>ADA/BUSD </p>
                  <p className="text-danger" style={{ marginLeft: "10px" }}>
                    -0.37%
                  </p>
                </div>
                <h5 style={{ marginTop: "-10px" }}>1.345</h5>
                <p className="fontWeightSmall">$1.34</p>
              </div>

              <div className="d-flex flex-column  footersmallcard text-start">
                <div className="d-flex justify-content-sm-between fontWeightSmall">
                  <p>ADA/BUSD </p>
                  <p className="text-danger" style={{ marginLeft: "10px" }}>
                    -0.37%
                  </p>
                </div>
                <h5 style={{ marginTop: "-10px" }}>1.345</h5>
                <p className="fontWeightSmall">$1.34</p>
              </div>

              <div className="d-flex mb-5 flex-column footersmallcard text-start">
                <div className="d-flex justify-content-sm-between fontWeightSmall">
                  <p>ADA/BUSD </p>
                  <p className="text-danger" style={{ marginLeft: "10px" }}>
                    -0.37%
                  </p>
                </div>
                <h5 style={{ marginTop: "-10px" }}>1.345</h5>
                <p className="fontWeightSmall">$1.34</p>
              </div>

              <div className="d-flex flex-column  footersmallcard text-start">
                <div className="d-flex justify-content-sm-between fontWeightSmall">
                  <p>ADA/BUSD </p>
                  <p className="text-danger" style={{ marginLeft: "10px" }}>
                    -0.37%
                  </p>
                </div>
                <h5 style={{ marginTop: "-10px" }}>1.345</h5>
                <p className="fontWeightSmall">$1.34</p>
              </div>

              <div className="d-flex flex-column  text-start footersmallcard ">
                <div className="d-flex justify-content-sm-between fontWeightSmall">
                  <p>ADA/BUSD </p>
                  <p className="text-danger" style={{ marginLeft: "10px" }}>
                    -0.37%
                  </p>
                </div>
                <h5 style={{ marginTop: "-10px" }}>1.345</h5>
                <p className="fontWeightSmall">$1.34</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
