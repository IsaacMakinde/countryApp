// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import SearchPage from "./components/HomePage";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./scss/main.scss";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <Router>
        <SearchPage />
      </Router>
    </>
  );
}
export default App;
