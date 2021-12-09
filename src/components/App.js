import React from "react";
import LoginComponent from "../pages/LoginPage";
import TaskComp from "../pages/TasksPage";
import {Route} from "react-router-dom"

const App = () => (
  <div>
    <Route exact path="/task" component={TaskComp} />
    <Route exact path="/" component={LoginComponent} />
  </div>
);

export default App;
