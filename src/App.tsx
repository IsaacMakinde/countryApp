// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import SearchPage from "./components/SearchPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CountryCard from "./components/CountryCard";
import "./App.css";
import "./scss/main.scss";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <Router>
        <SearchPage />
        {/* <Switch>
          <Route path="/country">
            <CountryCard />
          </Route>
        </Switch> */}
      </Router>
    </>
  );
}

export default App;
