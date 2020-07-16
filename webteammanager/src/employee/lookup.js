import React from "react";

import { apiLookup } from "../lookup";

export async function apiGetEmployeeList(callback, nextUrl) {
  let endpoint = "/api/employee/list";
  if (nextUrl) {
    endpoint = nextUrl.replace("localhost:8000");
  }
  apiLookup("GET", endpoint, callback);
}
