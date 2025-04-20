import LoginPanel from "./components/Login/Login"
import { Routes, Route } from "react-router-dom";
import React from 'react';

function App() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/register" component={Register} />
            {/* Define other routes here */}
            <Route path="/" exact>
              <h1>Welcome to the Home Page</h1>
              {/* Add home page content or component */}
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
export default App;
