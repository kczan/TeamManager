import { apiLookup } from "../lookup";

export async function apiGetEmployeeList(callback, nextUrl) {
  let endpoint = "/api/employee/list";
  if (nextUrl !== null && nextUrl !== undefined) {
    endpoint = nextUrl;
  }
  apiLookup("GET", endpoint, callback);
}

export async function apiGetSalaryStats(callback) {
  let endpoint = "/api/employee/get-stats";

  apiLookup("GET", endpoint, callback);
}

export async function apiCreateEmployee(callback, data) {
  let endpoint = "/api/employee/create-employee";
  let formData = new FormData();
  formData.append("first_name", data.first_name);
  formData.append("last_name", data.last_name);
  formData.append("department", data.department);
  formData.append("position", data.position);
  formData.append("salary", data.salary);
  formData.append("contact_number", data.contact_number);
  if (data.image) {
    formData.append("image", data.image);
  }

  apiLookup("POST", endpoint, callback, formData);
}

export async function apiRandomEmployee(callback) {
  let endpoint = "/api/employee/random-employee";
  apiLookup("POST", endpoint, callback);
  setTimeout(function () {
    window.location.reload();
  }, 100);
}

export async function apiDeleteEmployee(callback, id) {
  let endpoint = `/api/employee/delete-employee/${id}`;
  apiLookup("DELETE", endpoint, callback);
  setTimeout(function () {
    window.location.reload();
  }, 100);
}

export async function apiSearchResults(callback, keyword, nextUrl) {
  let endpoint = `/api/employee/search/${keyword}`;
  if (nextUrl !== null && nextUrl !== undefined) {
    endpoint = nextUrl;
  }
  apiLookup("GET", endpoint, callback);
}
