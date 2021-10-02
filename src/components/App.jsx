import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Post from "./Post";

const App = () => {      // Route decides for a given path this particular component is to be returned.
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />   
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/:postID" component={Post} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
