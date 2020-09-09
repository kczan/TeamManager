import React, { useState } from "react";
import SlidingPane from "react-sliding-pane";
import Modal from "react-modal";
import "react-sliding-pane/dist/react-sliding-pane.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

import { PanelButton } from "./panelButton";

const baseURL = "https://fc-teammanager.herokuapp.com/";

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
    window.location = `${baseURL}${input.value}`;
  }

  return (
    <div>
      <div
        className="top-panel-trigger"
        onMouseEnter={() => setState({ isPaneOpenTop: true })}
        onClick={() => setState({ isPaneOpenTop: true })}
      >
        <FontAwesomeIcon icon={Icons.faChevronCircleDown} />
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
          icon="faUserTie"
          onClick={() => {
            window.location = `${baseURL}`;
          }}
        />
        <PanelButton id="search-employee" onClick={openModal} icon="faSearch" />

        <PanelButton
          icon="faChartBar"
          onClick={() => {
            window.location = `${baseURL}stats`;
          }}
        />
        <PanelButton
          icon="faAt"
          onClick={() => {
            window.location = `${baseURL}about`;
          }}
        />
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
