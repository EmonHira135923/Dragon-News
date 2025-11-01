import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUSon = () => {
  return (
    <div className="mb-5 mt-5">
      <h2 className="font-bold text-2xl text-primary mb-5">FIND US ON</h2>
      <div
        className="join join-vertical w-full 
    "
      >
        <button className="btn  bg-base-200 justify-start join-item">
          <FaFacebook size={24} /> Log In With Facebook
        </button>
        <button className="btn  bg-base-200 justify-start join-item">
          <FaTwitter size={24} /> Log In With Twitter
        </button>
        <button
          className="btn  bg-base-200 justify-start
        join-item"
        >
          <FaInstagram size={24} /> Log In With Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUSon;
