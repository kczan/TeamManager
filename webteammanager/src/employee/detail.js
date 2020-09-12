import React, { useState } from "react";
import { apiDeleteEmployee } from "./lookup";
import { EmployeeEdit } from "./editform";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

import Modal from "react-modal";

export function Employee(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const className = props.className
    ? props.className
    : "col-10 mx-auto col-md-6";
  const { employee } = props;
  const [deleteEmployee, didDeleteEmployee] = useState(false);
  const [newEmployees, setNewEmployees] = useState([]);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const handleDelete = () => {
    apiDeleteEmployee(handleBackendUpdate, employee.id);
  };

  const handleBackendUpdate = (response, status) => {
    if (status === 200) {
      didDeleteEmployee(true);
    } else {
      alert("Error occured while deleting employee info");
    }
  };
  let imgSrc;
  if (employee) {
    imgSrc = employee.image.split("?")[0];
  } else {
    imgSrc = "";
  }

  const handleNewEmployee = (newEmployee) => {
    let tempNewEmployees = [...newEmployees];
    tempNewEmployees.unshift(newEmployee);
    setNewEmployees(tempNewEmployees);
  };

  return (
    <div className={className}>
      <div className="d-flex flex-column justify-content-around border p-2 rounded w-100 m-4 employee-card">
        <div className="employee-buttons">
          <button className="delete-employee-button" onClick={handleDelete}>
            X
          </button>
          <button className="edit-employee-button" onClick={openModal}>
            <FontAwesomeIcon icon={Icons.faUserEdit} />
          </button>
        </div>

        <div className="d-flex m-3 justify-content-center ">
          <img
            src={imgSrc}
            className="rounded-circle emp-photo"
            alt={`${employee.first_name}${employee.last_name}`}
          ></img>
        </div>
        <div className="d-inline-block text-center font-weight-bold pt-1">
          <h5>
            {employee.first_name} {employee.last_name}
          </h5>
        </div>
        <div className="font-weight-light px-1 text-center">
          {employee.position} in {employee.department} Department
        </div>
        <hr className="w-75" />
        <div className="p-2 d-flex justify-content-between">
          <span className="font-weight-bold">Salary</span>{" "}
          <span className="text-align-right font-weight-light">
            ${employee.salary}
          </span>
        </div>
        <div className="p-2 d-flex justify-content-between align-items-start">
          <span className="font-weight-bold">Contact</span>{" "}
          <div className="d-flex flex-column text-right font-weight-light">
            {" "}
            <div> &#9742; {employee.contact_number} </div>
            <div>
              <p className="text-nowrap">
                &#9993;
                {(employee.first_name[0] + employee.last_name).toLowerCase()}
                @wuphf.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"
        contentLabel="Edit employee"
      >
        <EmployeeEdit
          didEditEmployee={handleNewEmployee}
          onClick={closeModal}
          employee={employee}
        />
        <button
          className="btn btn-secondary mx-auto px-auto"
          onClick={closeModal}
        >
          Close
        </button>
      </Modal>
    </div>
  );
}
