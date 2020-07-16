import React, { useState } from "react";

export function Employee(props) {
  const className = props.className
    ? props.className
    : "col-10 mx-auto col-md-6 bg-light";
  const { employee } = props;
  const [actionTweet, setActionTweet] = useState(
    props.tweet ? props.tweet : null
  );

  const handlePerformAction = (newActionTweet, status) => {
    if (status === 200) {
      setActionTweet(newActionTweet);
    }
  };

  return (
    <div className={className}>
      <div className="d-flex flex-column justify-content-around border p-2 rounded w-100 m-4">
        <div className="d-inline-block text-center pb-2">
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
