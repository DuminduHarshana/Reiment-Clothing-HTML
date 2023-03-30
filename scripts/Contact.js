// Get the form element
const form = document.getElementById("loginForm");

// Add a submit event listener to the form
form.addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form fields
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const country = document.getElementById("country").value;
  const subject = document.getElementById("subject").value;

  // Validate the form fields
  if (firstName.trim() === "") {
    alert("Please enter your first name.");
    return;
  }

  if (lastName.trim() === "") {
    alert("Please enter your last name.");
    return;
  }

  if (email.trim() === "") {
    alert("Please enter your email address.");
    return;
  }

  // Regular expression to validate email format
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (country === "") {
    alert("Please select your country.");
    return;
  }

  if (subject.trim() === "") {
    alert("Please enter a subject.");
    return;
  }

  // If all form fields are valid, submit the form using AJAX
  var xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
// Get the message element
    const messageElement = document.getElementById("message");

// Display a success message to the user
    messageElement.textContent = "Form submitted successfully!";
    }
  };
  xhr.send(new FormData(form));
});
