import { apiLookup } from "../lookup";

export async function apiGetEmployeeList(callback, nextUrl, department) {
  let endpoint = "/api/employee/list";

  if (nextUrl !== null && nextUrl !== undefined) {
    endpoint = nextUrl;
  }
  apiLookup("GET", endpoint, callback);
}

export async function apiGetDepartments(callback) {
  let endpoint = "/api/employee/departments";
  apiLookup("GET", endpoint, callback);
}

export async function apiGetSalaryStats(callback) {
  let endpoint = "/api/employee/get-salary-stats";

  apiLookup("GET", endpoint, callback);
}

export async function apiGetDepartmentStats(callback) {
  let endpoint = "/api/employee/get-department-stats";

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

export async function apiEditEmployee(callback, data, id) {
  let endpoint = `/api/employee/edit-employee/${id}`;
  console.log(endpoint);
  let formData = new FormData();
  formData.append("id", data.id);
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
