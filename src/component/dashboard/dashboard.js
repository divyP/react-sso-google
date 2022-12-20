import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { searchDataFromWiki } from "../actions";
import "./dashboard.css";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
    searchDataFromWiki();
  }, []);

  return (
    <h4 className="dashboard">
      Welcome to dashboard &nbsp;
      {user?.name}
    </h4>
  );
}

export default Dashboard;
