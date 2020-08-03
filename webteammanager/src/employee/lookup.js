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

  console.log(formData);
  apiLookup("POST", endpoint, callback, formData);
}
