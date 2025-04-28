import LoginPanel from "./components/Login/Login"
import { Routes, Route } from "react-router-dom";
import React from 'react';
import Dealers from './components/Dealers/Dealers';
import Dealer from "./components/Dealers/Dealer";
import PostReview from "./components/Dealers/PostReview"

function App() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/register" component={Register} />
            {/* Define other routes here */}
            <Route path="/dealers" element={<Dealers/>} />
            <Route path="/dealer/:id" element={<Dealer/>} />
            <Route path="/postreview/:id" element={<PostReview/>} />
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
