import React, { useState } from "react";
import SlidingPane from "react-sliding-pane";
import Modal from "react-modal";
import "react-sliding-pane/dist/react-sliding-pane.css";

import { PanelButton } from "./sideBar";

export function TopPanel() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [state, setState] = useState({
    isPaneOpenTop: false,
    isOpen: false,
  });

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setState({ isPaneOpenTop: false });
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    const input = document.getElementById("search-bar");
    window.location = `http://localhost:8000/search/${input.value}`;
  }

  return (
    <div>
      <div
        className="top-panel-trigger"
        onMouseEnter={() => setState({ isPaneOpenTop: true })}
        onClick={() => setState({ isPaneOpenTop: true })}
      >
        +
      </div>

      <SlidingPane
        className="top-panel"
        isOpen={state.isPaneOpenTop}
        from="top"
        width="500px"
        onRequestClose={() => setState({ isPaneOpenTop: false })}
        hideHeader={true}
      >
        <PanelButton
          icon="Home"
          onClick={() => {
            window.location = "http://localhost:8000";
          }}
        />
        <PanelButton icon="S" id="create-employee" onClick={openModal} />
        <PanelButton
          icon="Stats"
          onClick={() => {
            window.location = "http://localhost:8000/stats";
          }}
        />
        <PanelButton icon="X" />
      </SlidingPane>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Search for employees"
          className="search-box"
        >
          <form className="p-1 d-flex" onSubmit={handleSearchSubmit}>
            <input
              className="form-control my-3"
              type="text"
              id="search-bar"
              placeholder="Search..."
            ></input>
            <button type="submit" className="btn btn-primary my-3 ml-1">
              Search
            </button>
          </form>
          <button
            className="btn btn-secondary mx-auto  align-bottom"
            onClick={closeModal}
          >
            Close
          </button>
        </Modal>
      </div>
    </div>
  );
}
