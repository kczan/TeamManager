import React, { useState, useEffect } from "react";
import { Employee } from "./detail";
import { apiSearchResults } from "./lookup";

export function SearchResults(props) {
  const { keyword } = props;

  const [employeesInit, setEmployeesInit] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [employeesDidSet, setEmployeesDidSet] = useState(false);

  useEffect(() => {
    if (employeesDidSet === false) {
      const handleEmployeesRefresh = (response, status) => {
        if (status === 200) {
          setNextUrl(response.next);
          setEmployeesDidSet(true);
          setEmployeesInit(response.results);
        }
      };
      apiSearchResults(handleEmployeesRefresh, keyword);
    }
  }, [setEmployeesDidSet, employeesDidSet, setEmployeesInit, keyword]);

  const handleLoadNext = (event) => {
    event.preventDefault();
    if (nextUrl !== null) {
      const handleLoadNextResponse = (response, status) => {
        if (status === 200) {
          setNextUrl(response.next);
          setEmployees(employees);
        }
      };
      apiSearchResults(handleLoadNextResponse, keyword, nextUrl);
    }
  };

  if (employeesInit.length === 0) {
    return (
      <div className="mx-auto col-10 text-center text-large">
        <h2>Sorry, couldn't find anything!</h2>
      </div>
    );
  }

  return (
    <React.Fragment>
      {employeesInit.map((employee) => {
        return <Employee employee={employee} />;
      })}
      {nextUrl !== null && (
        <button onClick={handleLoadNext} className="btn btn-outline-primary">
          Load next
        </button>
      )}
    </React.Fragment>
  );
}
