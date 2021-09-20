window.addEventListener("DOMContentLoaded", function() {

  //get the form elements defined in your form HTML above
  // THIS NEEDS TO BE 'id' FIELD ON HTML SIDE
  
  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  // THIS NEEDS TO BE 'id' FIELD ON HTML SIDE
  var status = document.getElementById("status");

  //Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    // button.style = "display: none ";
    status.innerHTML = "Thank you!  We will reply back to your email within 24 hours";
  }

  function error() {
    status.innerHTML = "There was a problem submitting your request.  Please try again.";
  }

  // Handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
