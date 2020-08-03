import React, { useState } from "react";
import SlidingPane from "react-sliding-pane";
import Modal from "react-modal";
import "react-sliding-pane/dist/react-sliding-pane.css";

import { EmployeeCreate } from "../employee";

function PanelButton(props) {
  const { icon, id, onClick } = props;
  return (
    <button className="panel-button" id={id} onClick={onClick}>
      {icon}
    </button>
  );
}

export function SidePanel() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [newEmployees, setNewEmployees] = useState([]);
  const handleNewEmployee = (newEmployee) => {
    let tempNewEmployees = [...newEmployees];
    tempNewEmployees.unshift(newEmployee);
    setNewEmployees(tempNewEmployees);
  };
  const [state, setState] = useState({
    isPaneOpenLeft: false,
    isOpen: false,
  });

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setState({ isPaneOpenLeft: false });
  }

  return (
    <div>
      <div
        className="left-panel-trigger"
        onMouseEnter={() => setState({ isPaneOpenLeft: true })}
        onClick={() => setState({ isPaneOpenLeft: true })}
      >
        +
      </div>

      <SlidingPane
        className="left-panel"
        isOpen={state.isPaneOpenLeft}
        from="left"
        width="120px"
        onRequestClose={() => setState({ isPaneOpenLeft: false })}
        hideHeader={true}
      >
        <PanelButton icon="+" id="create-employee" onClick={openModal} />
        <PanelButton icon="asd" id="random-employee" />
        <PanelButton icon="$" id="example-db" />
        <PanelButton icon="C" id="clear-employees" />
      </SlidingPane>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Add employee"
        >
          <EmployeeCreate
            didAddEmployee={handleNewEmployee}
            onClick={closeModal}
          />
          <button
            className="btn btn-secondary mx-auto px-auto"
            onClick={closeModal}
          >
            Close
          </button>
        </Modal>
      </div>
    </div>
  );
}
