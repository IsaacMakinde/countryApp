import SearchPage from "./components/SearchPage";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./scss/main.scss";

function App() {
  return (
    <>
      <Router>
        <SearchPage />
      </Router>
    </>
  );
}

export default App;
