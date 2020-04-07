import React from "react";
import Signin from "../src/components/Signin";
import Signup from "../src/components/Signup";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
