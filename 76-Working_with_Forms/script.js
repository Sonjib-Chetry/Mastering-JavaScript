/*
🔹 Ways to Validate Forms Using JavaScript

HTML itself gives you basic validation using attributes like:
required
min, max
pattern
type="email", type="number", etc.

But JavaScript allows you to make customized, interactive, and user-friendly validations.

✅ Common JavaScript Validation Methods: 

📌1. Using the Constraint Validation API

checkValidity() → returns true or false if the input passes HTML validation.
reportValidity() → triggers the browser’s default error message.
setCustomValidity(message) → allows you to show a custom error message.

const input = document.querySelector("input");

input.addEventListener("input", (e) => {
  if (!e.target.checkValidity()) {
    e.target.setCustomValidity(
      "You must use a company email address ending in @sampleCompany.com"
    );
  } else {
    e.target.setCustomValidity(""); // clear error if valid
  }
  e.target.reportValidity();
});



📌2. Manual JavaScript Validation

You can directly read values from inputs and write your own validation logic.

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent default submission
  const email = form.querySelector("input").value;

  if (!email.endsWith("@sampleCompany.com")) {
    alert("Please use your company email address.");
  } else {
    alert("Form submitted successfully!");
    form.submit(); // manually submit if valid
  }
});



📌3. Using Regular Expressions (Regex)

Very powerful for validating patterns like phone numbers, passwords, or emails.

const password = document.getElementById("password");

password.addEventListener("input", (e) => {
  const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!regex.test(e.target.value)) {
    password.setCustomValidity("Password must be 8+ chars, 1 uppercase, 1 number");
  } else {
    password.setCustomValidity("");
  }
  password.reportValidity();
});



📌4. Real-Time Feedback

Instead of waiting for form submission, you can check validity while the user types.

const username = document.getElementById("username");
const error = document.getElementById("error");

username.addEventListener("input", () => {
  if (username.value.length < 5) {
    error.textContent = "Username must be at least 5 characters long";
  } else {
    error.textContent = "";
  }
});



🔹 Purpose of e.preventDefault()

Every event has a default action.

For example:
Clicking a link navigates to its href.
Submitting a form reloads the page.
Pressing a key types it into the input.
e.preventDefault() stops that default behavior.

📌 Example with form submission:

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stops page reload
  console.log("Custom validation and handling here");
});


📌 Example with keyboard input:

input.addEventListener("keydown", (e) => {
  e.preventDefault(); // stops characters from being typed
  output.textContent = `You pressed ${e.key}`;
});

👉 Use preventDefault() whenever you want custom control over how events behave.



🔹 How the Submit Event Works with Forms

There are three ways a form can be submitted:
Clicking a <button type="submit">.
Pressing Enter inside a text input.
Calling form.submit() or form.requestSubmit() via JavaScript.

Key Form Attributes:
action → URL where the data is sent.
method → GET (query string in URL) or POST (data in body).
enctype → how form data is encoded (application/x-www-form-urlencoded, multipart/form-data, etc.).

📌 Example with GET:

<form action="/search" method="GET">
  <input name="query" placeholder="Search..." />
  <button type="submit">Search</button>
</form>

➡️ Submits to /search?query=value


📌 Example with POST:

<form action="/register" method="POST">
  <input name="username" />
  <input name="password" type="password" />
  <button type="submit">Register</button>
</form>

➡️ Sends data in request body, not in URL.



✅ In short:
Use HTML attributes for basic validation.
Use JavaScript + Constraint Validation API for advanced, custom, real-time validation.
Use e.preventDefault() when you want to stop the browser’s default action (like reloading after form submit).
The submit event is your main entry point to intercept form submissions and add custom logic.
*/