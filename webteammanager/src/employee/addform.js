import React, { createRef, useState } from "react";
import { apiCreateEmployee } from "./lookup";
import ImageUploader from "react-images-upload";

export function ImageUpload(props) {
  const { handleDrop } = props;
  const fieldClass =
    "d-flex p-2 my-2 mx-auto form-text-field file-upload-section";

  const handleImage = (picture) => {
    handleDrop(picture);
  };

  return (
    <ImageUploader
      {...props}
      withIcon={false}
      onChange={handleImage}
      imgExtension={[".jpg", ".png", ".jpeg"]}
      maxFileSize={52428800}
      className={fieldClass}
      label={"Max file size: 320kB."}
      buttonText={"Choose image"}
      withPreview={true}
    />
  );
}

export function EmployeeCreate(props) {
  const firstNameRef = createRef();
  const lastNameRef = createRef();
  const departmentRef = createRef();
  const positionRef = createRef();
  const salaryRef = createRef();
  const contactNumberRef = createRef();

  const { didAddEmployee, onClick } = props;
  const [pictures, setPictures] = useState([]);

  const handleBackendUpdate = (response, status) => {
    if (status === 201) {
      didAddEmployee(response);
    } else {
      console.log(response);
      alert("An error occured, please try again");
    }
  };

  const handleDrop = (picture) => {
    setPictures(picture);
    console.log(picture);
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
      image: pictures[0],
    };
    apiCreateEmployee(handleBackendUpdate, newEmployee);
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
          ref={firstNameRef}
          required={true}
          type="text"
          className={fieldClass}
          name="first_name"
          placeholder="First name"
        ></input>
        <input
          ref={lastNameRef}
          type="text"
          required={true}
          className={fieldClass}
          name="last_name"
          placeholder="Last name"
        ></input>
        <input
          ref={departmentRef}
          type="text"
          required={true}
          className={fieldClass}
          name="department"
          placeholder="Department"
        ></input>

        <input
          ref={positionRef}
          required={true}
          className={fieldClass}
          type="text"
          name="position"
          placeholder="Position"
        ></input>
        <input
          ref={salaryRef}
          required={true}
          className={fieldClass}
          name="salary"
          placeholder="Salary"
          type="number"
          maxLength={8}
        ></input>
        <input
          ref={contactNumberRef}
          required={true}
          type="tel"
          className={fieldClass}
          name="contact_number"
          placeholder="Contact number"
          maxLength={10}
        ></input>

        <div
          className={
            "d-flex flex-column align-items-stretch mx-auto border rounded mt-2 justify-content-around w-75"
          }
        >
          <ImageUpload handleDrop={handleDrop} />
        </div>

        <button type="submit" className="btn btn-primary my-3 w-50 mx-auto">
          Add new employee
        </button>
      </form>
    </div>
  );
}
