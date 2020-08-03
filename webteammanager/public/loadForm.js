$(document).ready(function () {
  $("#create-employee").modalForm({
    formURL: "{% url 'create-employee' %}",
  });
});

console.log("loadForm.js executed");
