import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainSearch from "./container/MainSearch/MainSearch";

import MainTodo from "./container/MainTodo/MainTodo";
export default function App() {
  return (
    <BrowserRouter>
      <div className="MainContainer">
        <Switch>
          <Route exact path="/" component={MainTodo} />
          <Route path="/search" component={MainSearch} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
