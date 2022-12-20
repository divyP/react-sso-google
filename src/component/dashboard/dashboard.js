import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchDataFromWiki } from "../actions";
import "./dashboard.css";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [serchStr, setSerchStr] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [resultList, setResultList] = useState(null);

  useEffect(() => {
    if (!user) navigate("/login");
  }, []);

  const serchData = () => {
    if (serchStr.trim().length === 0) {
      setErrMsg("Please enter search string");
    } else {
      searchDataFromWiki(serchStr)
        .then((data) => {
          console.log("data", data);
          setResultList(data?.query?.search);
        })
        .catch((err) => console.log("err", err));
    }
  };

  return (
    <div>
      <h4 className="dashboard">
        Welcome to dashboard &nbsp;
        {user?.name}
      </h4>
      <div className="text-center">
        <input
          type="text"
          placeholder="search here"
          onChange={(e) => {
            setSerchStr(e.target.value);
            setErrMsg("");
          }}
        />
        &nbsp;
        <button title="Search" onClick={() => serchData()}>
          Search
        </button>
      </div>
      {errMsg && <h6 className="err-msg"> {errMsg}</h6>}
     {resultList &&<div>  {resultList?.length === 0 ? (
        <h4 className="text-center">Result not found</h4>
      ) : (
        <ol>
          {resultList.map((e, i) => (
            <div className="flex">
              <di>{i + 1}</di>&nbsp; &nbsp;
              <div>{e.title}</div>&nbsp; &nbsp;
              <div>
                <a
                  href={`https://en.wikipedia.org/wiki?curid=${e.pageid}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  view page
                </a>
              </div>
            </div>
          ))}
        </ol>
      )}</div>}
    </div>
  );
}

export default Dashboard;
