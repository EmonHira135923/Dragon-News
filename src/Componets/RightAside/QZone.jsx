import React from "react";
import Swim from "../../assets/swimming.png";
import Class from "../../assets/class.png";
import Playground from "../../assets/playground.png";
import BgImg from "../../assets/bg.png";

const QZone = () => {
  return (
    <div>
      <div className="bg-base-300 p-3">
        <h2 className="font-bold text-2xl text-primary mb-5">QZONE</h2>
        <div className="space-y-5">
          <img src={Swim} alt="" />
          <img src={Class} alt="" />
          <img src={Playground} alt="" />
        </div>
      </div>
      <div className="mt-8">
        <img src={BgImg} alt="" />
      </div>
    </div>
  );
};

export default QZone;
