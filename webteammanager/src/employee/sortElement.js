import React from "react";

export function sortElement() {
  return (
    <div>
      <select name="sort-dropdown">
        <option value="az">Alphabetical A-Z</option>
        <option value="za">Alphabetical Z-A</option>
        <option value="salaryAsc">Salary ascending</option>
        <option value="salaryDesc">Salary descending</option>
      </select>
    </div>
  );
}
