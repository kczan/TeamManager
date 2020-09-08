import React, { useEffect, useState } from "react";
import { process } from "@progress/kendo-data-query";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Window } from "@progress/kendo-react-dialogs";

import "@progress/kendo-theme-default/dist/all.css";

export function DepartmentsDropdown() {
  return (
    <p>
      <DropDownList data={categories} />
    </p>
  );
}
