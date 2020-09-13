import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import DashBoard from "./components/dashboard/dashboard";
import Login from "./components/login/login";
import { MovieProvider } from "./components/moviecontext/movieContext";
import MovieList from "./components/movies";
import Nav from "./components/nav/nav";

const App = () => {
  return (
    <BrowserRouter>
      <MovieProvider>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={MovieList}></Route>
            <Route path="/movies" component={MovieList}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/dashboard" component={DashBoard}></Route>
          </Switch>
        </div>
      </MovieProvider>
    </BrowserRouter>
  );
};

export default App;
