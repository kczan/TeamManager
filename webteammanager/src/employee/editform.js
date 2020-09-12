import React, { createRef, useState } from "react";
import { apiEditEmployee } from "./lookup";
import { ImageUpload } from "./addform";

export function EmployeeEdit(props) {
  const firstNameRef = createRef();
  const lastNameRef = createRef();
  const departmentRef = createRef();
  const positionRef = createRef();
  const salaryRef = createRef();
  const contactNumberRef = createRef();

  const { didEditEmployee, onClick, employee } = props;
  const [pictures, setPictures] = useState([]);

  const handleBackendUpdate = (response, status) => {
    if (status === 201) {
      didEditEmployee(response);
    } else {
      console.log(response);
      alert("An error occured, please try again");
    }
  };

  const handleDrop = (picture) => {
    setPictures(picture);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEmployee = {
      id: employee.id,
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      department: departmentRef.current.value,
      position: positionRef.current.value,
      salary: salaryRef.current.value,
      contact_number: contactNumberRef.current.value,
      image: pictures[0],
    };
    apiEditEmployee(handleBackendUpdate, newEmployee, employee.id);
    onClick();
    setTimeout(function () {
      window.location.reload();
    }, 100);
  };

  const fieldClass = "form-control w-75 p-2 my-2 mx-auto form-text-field";

  return (
    <div className={props.className}>
      <form
        className="w-100 d-flex justify-content-center flex-column align-content-around mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          id="first-name-input"
          ref={firstNameRef}
          required={true}
          type="text"
          className={fieldClass}
          name="first_name"
          placeholder="First name"
          defaultValue={employee.first_name}
        ></input>
        <input
          ref={lastNameRef}
          type="text"
          required={true}
          className={fieldClass}
          name="last_name"
          placeholder="Last name"
          defaultValue={employee.last_name}
        ></input>
        <input
          ref={departmentRef}
          type="text"
          required={true}
          className={fieldClass}
          name="department"
          placeholder="Department"
          defaultValue={employee.department}
        ></input>

        <input
          ref={positionRef}
          required={true}
          className={fieldClass}
          type="text"
          name="position"
          placeholder="Position"
          defaultValue={employee.position}
        ></input>
        <input
          ref={salaryRef}
          required={true}
          className={fieldClass}
          name="salary"
          placeholder="Salary"
          type="number"
          maxLength={8}
          defaultValue={employee.salary}
        ></input>
        <input
          ref={contactNumberRef}
          required={true}
          type="tel"
          className={fieldClass}
          name="contact_number"
          placeholder="Contact number"
          maxLength={10}
          defaultValue={employee.contact_number}
        ></input>

        <div
          className={
            "d-flex flex-column align-items-stretch mx-auto border rounded mt-2 justify-content-around w-75"
          }
        >
          <ImageUpload handleDrop={handleDrop} />
        </div>

        <button type="submit" className="btn btn-primary my-3 w-50 mx-auto">
          Confirm changes
        </button>
      </form>
    </div>
  );
}
