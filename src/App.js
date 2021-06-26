import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Posts from "./Posts";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Navbar />
        </header>
        <Switch>
          <Route path="/posts">
            <Posts />
          </Route>
        </Switch>
      </Router>
      {/* <Navbar /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
