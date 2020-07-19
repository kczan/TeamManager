import React, { createRef } from "react";
import { apiCreateEmployee } from "./lookup";

export function EmployeeCreate(props) {
  const firstNameRef = createRef();
  const lastNameRef = createRef();
  const departmentRef = createRef();
  const positionRef = createRef();
  const salaryRef = createRef();
  const contactNumberRef = createRef();
  const imageRef = createRef();

  const { didAddEmployee } = props;
  const handleBackendUpdate = (response, status) => {
    if (status === 201) {
      didAddEmployee(response);
    } else {
      console.log(response);
      alert("An error occured, please try again");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEmployee = {
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      department: departmentRef.current.value,
      position: positionRef.current.value,
      salary: salaryRef.current.value,
      contact_number: contactNumberRef.current.value,
      image: imageRef.current.files[0],
    };
    apiCreateEmployee(handleBackendUpdate, newEmployee);
  };

  const fieldClass = "form-control w-75 p-2 my-2 mx-auto";

  return (
    <div className={props.className}>
      <form
        className="w-100 d-flex justify-content-center flex-column align-content-around mx-auto"
        onSubmit={handleSubmit}
      >
        <textarea
          ref={firstNameRef}
          required={true}
          className={fieldClass}
          name="first_name"
          placeholder="First name"
        ></textarea>
        <textarea
          ref={lastNameRef}
          required={true}
          className={fieldClass}
          name="last_name"
          placeholder="Last name"
        ></textarea>
        <textarea
          ref={departmentRef}
          required={true}
          className={fieldClass}
          name="department"
          placeholder="Department"
        ></textarea>
        <textarea
          ref={positionRef}
          required={true}
          className={fieldClass}
          name="position"
          placeholder="Position"
        ></textarea>
        <textarea
          ref={salaryRef}
          required={true}
          className={fieldClass}
          name="salary"
          placeholder="Salary"
        ></textarea>
        <textarea
          ref={contactNumberRef}
          required={true}
          className={fieldClass}
          name="contact_number"
          placeholder="Contact number"
        ></textarea>
        <input
          type="file"
          ref={imageRef}
          required={false}
          className={fieldClass}
          placeholder="Photo"
        ></input>

        <button type="submit" className="btn btn-primary my-3 w-50 mx-auto">
          Add new employee
        </button>
      </form>
    </div>
  );
}
