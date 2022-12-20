import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location?.pathname === "/") navigate("/login");
  }, []);

  return null;
}

export default App;
