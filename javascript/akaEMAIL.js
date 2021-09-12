var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
//  var status = document.getElementById("my-form-status");
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for your submission! We will reply within 24 hours.";
    form.reset()
  }).catch(error => {
    status.innerHTML = "There was a problem submitting your form, please try again."
  });
}
form.addEventListener("submit", handleSubmit)