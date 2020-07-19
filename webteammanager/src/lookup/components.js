import axios from "axios";

const csrftoken = getCookie("csrftoken");

const api = axios.create({
  baseURL: `http://localhost:8000`,
  headers: {
    "Content-Type": "application/json",
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
          url: `http://localhost:8000${endpoint}`,
          data: data,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    }
  } catch (error) {
    console.log(error);
  }
}
