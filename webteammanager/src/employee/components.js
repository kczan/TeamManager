import React, { useEffect, useState } from "react";

import { apiGetEmployeeList } from "./lookup";
import { Employee } from "./detail";
import { EmployeeCreate } from "./addform";

export function EmployeesListComponent(props) {
  const [employeesInit, setEmployeesInit] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [employeesDidSet, setEmployeesDidSet] = useState(false);

  useEffect(() => {
    if (props.newEmployees) {
      const final = [...props.newEmployees].concat(employeesInit);
      if (final.length !== employees.length) {
        setEmployees(final);
      }
    }
  }, [props.newEmployees, employeesInit, employees]);

  useEffect(() => {
    if (employeesDidSet === false) {
      const handleEmployeeRefresh = (response, status) => {
        if (status === 200) {
          setNextUrl(response.next);
          setEmployeesInit(response.results);
          setEmployeesDidSet(true);
          setEmployees(response.results);
        }
      };
      apiGetEmployeeList(handleEmployeeRefresh);
    }
  }, [employeesInit, setEmployeesDidSet, employeesDidSet]);

  const handleLoadNext = (event) => {
    event.preventDefault();
    if (nextUrl !== null) {
      const handleLoadNextResponse = (response, status) => {
        if (status === 200) {
          setNextUrl(response.next);
          const newEmployees = [...employees].concat(response.results);
          setEmployeesInit(newEmployees);
          setEmployees(newEmployees);
        }
      };
      apiGetEmployeeList(handleLoadNextResponse, nextUrl);
    }
  };

  return (
    <React.Fragment>
      <div className="d-flex flex-wrap">
        {employees.map((employee) => {
          return (
            <Employee employee={employee} className="d-flex m-3 py-1 w-25" />
          );
        })}
      </div>

      {nextUrl !== null && (
        <button onClick={handleLoadNext} className="btn btn-outline-primary">
          Load next
        </button>
      )}
    </React.Fragment>
  );
}

export function CreateEmployeeComponent(props) {
  const [newEmployees, setNewEmployees] = useState([]);
  const handleNewEmployee = (newEmployee) => {
    let tempNewEmployees = [...newEmployees];
    tempNewEmployees.unshift(newEmployee);
    setNewEmployees(tempNewEmployees);
  };
  return (
    <div className={props.className}>
      <React.Fragment>
        <EmployeeCreate
          didAddEmployee={handleNewEmployee}
          className="col-md-4 mx-auto d-flex p-2 justify-content-center"
        />
        <EmployeesListComponent newEmployees={newEmployees} {...props} />
      </React.Fragment>
    </div>
  );
}
