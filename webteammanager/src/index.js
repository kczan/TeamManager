import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import {
  EmployeesListComponent,
  SearchResults,
  SalaryStats,
  DepartmentStats,
  ImageUpload,
} from "./employee";
import { SidePanel, TopPanel, About } from "./main";

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

const topBarElement = document.getElementById("topBar");

if (topBarElement) {
  const MyTopBarComponent = reactElement(TopPanel, topBarElement.dataset);
  ReactDOM.render(MyTopBarComponent, topBarElement);
}

const searchElement = document.getElementById("employee-search-results");

if (searchElement) {
  const MySearchComponent = reactElement(SearchResults, searchElement.dataset);
  ReactDOM.render(MySearchComponent, searchElement);
}

const salaryStatsElement = document.getElementById("chartdiv1");
if (salaryStatsElement) {
  const MySalaryStatsComponent = reactElement(
    SalaryStats,
    salaryStatsElement.dataset
  );
  ReactDOM.render(MySalaryStatsComponent, salaryStatsElement);
}

const departmentStatsElement = document.getElementById("chartdiv2");
if (departmentStatsElement) {
  const MyDepartmentStatsComponent = reactElement(
    DepartmentStats,
    departmentStatsElement.dataset
  );
  ReactDOM.render(MyDepartmentStatsComponent, departmentStatsElement);
}

const aboutElement = document.getElementById("about");
if (aboutElement) {
  const MyAboutComponent = reactElement(About, aboutElement.dataset);
  ReactDOM.render(MyAboutComponent, aboutElement);
}

const uploadElement = document.getElementById("fileupload");
if (uploadElement) {
  const MyUploadComponent = reactElement(ImageUpload, uploadElement.dataset);
  ReactDOM.render(MyUploadComponent, uploadElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
