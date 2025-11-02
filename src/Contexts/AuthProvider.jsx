import React from "react";
import { Authcontexts } from "./Provider";

const AuthProvider = ({ children }) => {
  const userinfo = {};
  return <Authcontexts value={userinfo}> {children} </Authcontexts>;
};

export default AuthProvider;
