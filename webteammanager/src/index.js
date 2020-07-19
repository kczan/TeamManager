import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { EmployeesListComponent } from "./employee";

const reactElement = React.createElement;

const employeesElement = document.getElementById("employees");

if (employeesElement) {
  const MyEmployeesComponent = reactElement(
    EmployeesListComponent,
    employeesElement.dataset
  );
  ReactDOM.render(MyEmployeesComponent, employeesElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
