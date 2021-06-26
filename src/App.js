import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import SearchPosts from "./SearchPosts";

const App = () => {
  return (
    <div>
      {/* <Router>
        <header>
          <Navbar />
        </header>
        <Switch>
          <Route path="/posts">
            <SearchPosts />
          </Route>
        </Switch>
      </Router> */}
      <Navbar />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
