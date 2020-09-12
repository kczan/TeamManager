import axios from "axios";

const csrftoken = getCookie("csrftoken");

const baseURL = "https://fc-teammanager.herokuapp.com";
// const baseURL = "http://localhost:8000";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "X-CSRFToken": csrftoken,
  },
});

function getCookie(name) {
  // gets csrf cookie
  var cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

export async function apiLookup(method, endpoint, callback, data) {
  try {
    if (method === "GET") {
      api.get(`${endpoint}`).then((response) => {
        callback(response.data, response.status);
      });
    } else if (method === "POST") {
      axios(
        {
          method: "post",
          url: `${baseURL}${endpoint}`,
          data: data,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } else if (method === "DELETE") {
      axios.delete(`${baseURL}${endpoint}`);
    }
  } catch (error) {
    console.log(error);
  }
}
