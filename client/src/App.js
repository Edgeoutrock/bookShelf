import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Container from "./components/Container";
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Saved from "./pages/Saved";
import Search from "./pages/Search";

import "./App.css";

class App extends Component {
  render() {
    
    return (
      <Router>
    <Container>
    <ToastContainer
            position="top-center"
            autoClose={5000}
            transition={Zoom}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable={false}
            pauseOnHover
          />

      <NavTabs />
        <Route exact path="/" component={Search} />
        <Route exact path="/placebooks" component={Saved} />
        <Route exact path="/books/:id" component={null} />
        <Route  component={null} />


        </Container>

    </Router>
  );


    };
};


export default App;
