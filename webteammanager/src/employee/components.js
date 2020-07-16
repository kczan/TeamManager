import { apiLookup } from "../lookup";
import { useEffect } from "react";

import { getEmployeeList } from "./lookup";

export function EmployeesList(props) {
  const [employeesInit, setEmployeesInit] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [employeesDidSet, setEmployeesDidSet] = useState(false);

  useEffect(() => {
    const final = [...props.newEmployees].concat(employeesInit);
    if (final.length !== employees.length) {
      setEmployees(final);
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
          const newEmployees = [...tweets].concat(response.results);
          setEmployeesInit(newEmployees);
          setEmployees(newEmployees);
        }
      };
      apiGetEmployeeList(handleLoadNextResponse, nextUrl);
    }
  };

  return (
    <React.Fragment>
      {employees.map((employee) => {
        return <Tweet employee={employee} className="mx-3 py-1 my-3" />;
      })}
      {nextUrl !== null && (
        <button onClick={handleLoadNext} className="btn btn-outline-primary">
          Load next
        </button>
      )}
    </React.Fragment>
  );
}
