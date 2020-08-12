import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

export function PanelButton(props) {
  const { icon, id, onClick } = props;
  const iconID = Icons[icon];
  return (
    <button className="panel-button" id={id} onClick={onClick}>
      <FontAwesomeIcon icon={iconID} />
    </button>
  );
}
