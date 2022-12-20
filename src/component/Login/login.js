import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import "./login.css";
import { loginWithGoogle } from "../actions";
import { useNavigate } from "react-router-dom";

function Login() {
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const verifyToken = (credentialResponse) => {
    setErrMsg("");
    loginWithGoogle({ token: credentialResponse.credential })
      .then((res) => {
        localStorage.clear();
        localStorage.setItem("user", JSON.stringify(res));
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log("errr", err);
        setErrMsg(err);
      });
  };

  return (
    <div className="login">
      <h3 className="text-center"> Login with Google</h3>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          verifyToken(credentialResponse);
        }}
        onError={() => {
          setErrMsg("Something went to wrong.");
          console.log("Login Failed");
        }}
      />
      {errMsg && <h6 className="err-msg"> {errMsg}</h6>}
    </div>
  );
}

export default Login;
