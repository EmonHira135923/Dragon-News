import React, { use } from "react";
import { NavLink } from "react-router";
import { Authcontexts } from "../../../Contexts/Provider";

const LOGIN = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-300">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-2 rounded-lg hover:from-purple-700 hover:to-indigo-600 transition-all duration-300"
          >
            Login
          </button>

          <p className="text-center text-gray-600 text-sm mt-4">
            Don't have an account?
            <NavLink
              to="/auth/register"
              className="text-purple-600 hover:underline"
            >
              Register
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LOGIN;
