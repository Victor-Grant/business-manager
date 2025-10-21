import React from "react";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 150,
          width: 250,
          borderRadius: 10,
          border: "1px solid #e0e0e0",
        }}
      >
        <Link
          style={{ color: "white", backgroundColor: "blue", borderRadius: 7 }}
          to="/home"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Auth;
