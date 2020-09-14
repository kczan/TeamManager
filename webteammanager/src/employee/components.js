import React, { useEffect, useState } from "react";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import { apiGetEmployeeList } from "./lookup";
import { Employee } from "./detail";
import { sortObjectsArray } from "./utilities";

export function EmployeesListComponent(props) {
  const [employeesInit, setEmployeesInit] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [employeesDidSet, setEmployeesDidSet] = useState(false);
  const [currentOption, setCurrentOption] = useState({ value: "az" });

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

  const options = [
    {
      type: "group",
      name: "Last name",
      items: [
        { value: "az", label: "A-Z" },
        { value: "za", label: "Z-A" },
      ],
    },
    {
      type: "group",
      name: "Salary",
      items: [
        { value: "asc", label: "Ascending" },
        { value: "desc", label: "Descending" },
      ],
    },
  ];

  sortEmployees(currentOption.value, employees);

  return (
    <React.Fragment>
      <Dropdown
        className="sort-dropdown"
        options={options}
        onChange={setCurrentOption}
        placeholder="Sort by:"
      />
      <div className="d-flex flex-wrap ml-3 my-5">
        {employees.map((employee) => {
          return (
            <Employee
              key={employee.id}
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

function sortEmployees(sortOption, employeesArray) {
  switch (sortOption) {
    case "az":
      employeesArray.sort(sortObjectsArray("last_name"));
      break;
    case "za":
      employeesArray.sort(sortObjectsArray("-last_name"));
      break;
    case "asc":
      employeesArray.sort(sortObjectsArray("salary", true));
      break;
    case "desc":
      employeesArray.sort(sortObjectsArray("-salary", true));
      break;
    default:
      employeesArray("last_name");
  }
  return employeesArray;
}
