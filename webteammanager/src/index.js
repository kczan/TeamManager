import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { EmployeesListComponent } from "./employee";
import { SidePanel } from "./main";
const reactElement = React.createElement;

const employeesElement = document.getElementById("employees");

if (employeesElement) {
  const MyEmployeesComponent = reactElement(
    EmployeesListComponent,
    employeesElement.dataset
  );
  ReactDOM.render(MyEmployeesComponent, employeesElement);
}

const sidebarElement = document.getElementById("sidebar");

if (sidebarElement) {
  const MySidebarComponent = reactElement(SidePanel, sidebarElement.dataset);
  ReactDOM.render(MySidebarComponent, sidebarElement);
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
