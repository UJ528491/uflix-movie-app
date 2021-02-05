import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import Tv from "Routes/TV/index";
import Search from "Routes/Search/index";
import Header from "Components/Header";
import Detail from "Routes/Detail";

const routerJS = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={Tv} />
      <Route path="/search" exact component={Search} />
      <Route path="/movie/:id" component={Detail} />
      <Route path="/show/:id" component={Detail} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

export default routerJS;
