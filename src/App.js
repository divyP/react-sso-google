import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("location", location);
    if (location?.pathname === "/") navigate("/login");
  }, []);

  return null;
}

export default App;
