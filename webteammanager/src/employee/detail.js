import React from "react";

export function Employee(props) {
  const className = props.className
    ? props.className
    : "col-10 mx-auto col-md-6 bg-light";
  const { employee } = props;

  const imgSrc = employee.image.split("?")[0];
  return (
    <div className={className}>
      <div className="d-flex flex-column justify-content-around border p-2 rounded w-100 m-4">
        <div className="d-flex m-3 justify-content-center ">
          <img
            src={imgSrc}
            width="150px"
            height="150px"
            className="rounded-circle"
            alt={`${employee.first_name}${employee.last_name}`}
          ></img>
        </div>
        <div className="d-inline-block text-center pb-2 font-weight-bold">
          {employee.first_name} {employee.last_name}
        </div>
        <div className="font-italic p-1">
          {employee.position} in {employee.department} Department
        </div>
        <div className="p-1">Salary: {employee.salary}</div>
        <div className="bg-light border rounded p-3 text-center">
          Contact:
          <div>Phone number: {employee.contact_number} </div>
          <div>
            Email: {(employee.first_name[0] + employee.last_name).toLowerCase()}
            @wuphf.com
          </div>
        </div>
      </div>
    </div>
  );
}
