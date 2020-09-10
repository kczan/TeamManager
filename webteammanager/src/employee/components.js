import React, { useEffect, useState } from "react";

import { apiGetEmployeeList } from "./lookup";
import { Employee } from "./detail";

export function EmployeesListComponent(props) {
  const [employeesInit, setEmployeesInit] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [employeesDidSet, setEmployeesDidSet] = useState(false);

  let department = "";
  if (props.department) {
    department = props.department;
  }

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
  }, [employeesInit, setEmployeesDidSet, employeesDidSet, department]);

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
      <div className="d-flex flex-wrap ml-3 my-5">
        {employees.map((employee) => {
          return (
            <Employee
              employee={employee}
              className="d-flex my-3 py-1 employee-container"
            />
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
