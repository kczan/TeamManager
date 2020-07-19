import { apiLookup } from "../lookup";

export async function apiGetEmployeeList(callback, nextUrl) {
  let endpoint = "/api/employee/list";
  if (nextUrl) {
    endpoint = nextUrl.replace("localhost:8000");
  }
  apiLookup("GET", endpoint, callback);
}

export async function apiCreateEmployee(callback, data) {
  let endpoint = "/api/employee/create-employee";
  console.log(data);
  apiLookup("POST", endpoint, callback, data);
}
