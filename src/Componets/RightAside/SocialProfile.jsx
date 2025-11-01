import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialProfile = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl text-primary">Login With</h2>
      <div className="flex flex-col gap-5 mt-5">
        <button className="btn w-full btn-outline btn-primary">
          <FcGoogle size={24} /> Log In With Google
        </button>
        <button className="btn w-full btn-outline btn-secondary">
          <FaGithubSquare size={24} /> Log In With Github
        </button>
      </div>
    </div>
  );
};

export default SocialProfile;
