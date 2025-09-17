function validateForm() {
  const result = {};

  // Full Name
  const fullName = document.getElementById("full-name");
  result["full-name"] = fullName.value.trim() !== "";

  // Email
  const email = document.getElementById("email");
  result["email"] = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);

  // Order No: starts with 2024 and followed by 6 digits
  const orderNo = document.getElementById("order-no");
  result["order-no"] = /^2024\d{6}$/.test(orderNo.value);

  // Product Code: XX##-X###-XX#
  const productCode = document.getElementById("product-code");
  result["product-code"] = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]{1}\d{3}-[a-zA-Z]{2}\d{1}$/.test(productCode.value);

  // Quantity
  const quantity = document.getElementById("quantity");
  result["quantity"] = /^[1-9]\d*$/.test(quantity.value);

  // Complaints Group
  const complaintsGroup = document.querySelectorAll("#complaints-group input[type='checkbox']");
  result["complaints-group"] = Array.from(complaintsGroup).some(cb => cb.checked);

  // Complaint Description
  const otherComplaint = document.getElementById("other-complaint");
  const complaintDesc = document.getElementById("complaint-description");
  result["complaint-description"] = !otherComplaint.checked || complaintDesc.value.trim().length >= 20;

  // Solutions Group
  const solutionsGroup = document.querySelectorAll("#solutions-group input[type='radio']");
  result["solutions-group"] = Array.from(solutionsGroup).some(rb => rb.checked);

  // Solution Description
  const otherSolution = document.getElementById("other-solution");
  const solutionDesc = document.getElementById("solution-description");
  result["solution-description"] = !otherSolution.checked || solutionDesc.value.trim().length >= 20;

  return result;
}

function isValid(result) {
  return Object.values(result).every(Boolean);
}

// -------------------------------
// UI Feedback for change events
// -------------------------------
function setFieldColor(element, isValid) {
  element.style.borderColor = isValid ? "green" : "red";
}

function handleChange() {
  const result = validateForm();

  setFieldColor(document.getElementById("full-name"), result["full-name"]);
  setFieldColor(document.getElementById("email"), result["email"]);
  setFieldColor(document.getElementById("order-no"), result["order-no"]);
  setFieldColor(document.getElementById("product-code"), result["product-code"]);
  setFieldColor(document.getElementById("quantity"), result["quantity"]);

  const complaintsFieldset = document.getElementById("complaints-group");
  complaintsFieldset.style.borderColor = result["complaints-group"] ? "green" : "red";

  const complaintDesc = document.getElementById("complaint-description");
  if (document.getElementById("other-complaint").checked) {
    setFieldColor(complaintDesc, result["complaint-description"]);
  } else {
    complaintDesc.style.borderColor = "";
  }

  const solutionsFieldset = document.getElementById("solutions-group");
  solutionsFieldset.style.borderColor = result["solutions-group"] ? "green" : "red";

  const solutionDesc = document.getElementById("solution-description");
  if (document.getElementById("other-solution").checked) {
    setFieldColor(solutionDesc, result["solution-description"]);
  } else {
    solutionDesc.style.borderColor = "";
  }
}

// -------------------------------
// Form Submission
// -------------------------------
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const result = validateForm();

  if (!isValid(result)) {
    // Highlight all invalid fields
    handleChange();
  } else {
    alert("Form submitted successfully!");
    // submit logic here
  }
});

// -------------------------------
// Event Listeners
// -------------------------------
["full-name", "email", "order-no", "product-code", "quantity", "complaint-description", "solution-description"]
  .forEach(id => {
    document.getElementById(id).addEventListener("change", handleChange);
  });

document.querySelectorAll("#complaints-group input[type='checkbox']").forEach(cb => {
  cb.addEventListener("change", handleChange);
});

document.querySelectorAll("#solutions-group input[type='radio']").forEach(rb => {
  rb.addEventListener("change", handleChange);
});
