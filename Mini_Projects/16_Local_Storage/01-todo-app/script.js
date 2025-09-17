// Select DOM elements by their IDs for form, buttons, inputs, and tasks container
const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

// Retrieve tasks from localStorage or initialize empty array if none exist
const taskData = JSON.parse(localStorage.getItem("data")) || [];
let currentTask = {}; // Stores task being edited

// Sanitize input by trimming whitespace and removing special characters
const removeSpecialChars = (val) => {
  return val.trim().replace(/[^A-Za-z0-9\-\s]/g, '')
}

// Handle adding new tasks or updating existing ones
const addOrUpdateTask = () => {
  // Validate required title input
  if(!titleInput.value.trim()){
    alert("Please provide a title");
    return;
  }
  
  // Check if task exists in storage for update
  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
  
  // Create task object with sanitized data and unique ID
  const taskObj = {
    id: `${removeSpecialChars(titleInput.value).toLowerCase().split(" ").join("-")}-${Date.now()}`, // Generate unique ID
    title: removeSpecialChars(titleInput.value),
    date: dateInput.value,
    description: removeSpecialChars(descriptionInput.value),
  };

  // Update array and localStorage
  if (dataArrIndex === -1) {
    taskData.unshift(taskObj); // Add new task to beginning of array
  } else {
    taskData[dataArrIndex] = taskObj; // Update existing task
  }

  localStorage.setItem("data", JSON.stringify(taskData));
  updateTaskContainer() // Refresh UI
  reset() // Clear form
};

// Update task display in DOM
const updateTaskContainer = () => {
  tasksContainer.innerHTML = ""; // Clear current tasks

  // Generate HTML for each task with edit/delete buttons
  taskData.forEach(
    ({ id, title, date, description }) => {
        (tasksContainer.innerHTML += `
        <div class="task" id="${id}">
          <p><strong>Title:</strong> ${title}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Description:</strong> ${description}</p>
          <button onclick="editTask(this)" type="button" class="btn">Edit</button>
          <button onclick="deleteTask(this)" type="button" class="btn">Delete</button> 
        </div>
      `)
    }
  );
};

// Delete task from DOM and storage
const deleteTask = (buttonEl) => {
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );

  buttonEl.parentElement.remove(); // Remove task element from DOM
  taskData.splice(dataArrIndex, 1); // Remove from array
  localStorage.setItem("data", JSON.stringify(taskData)); // Update storage
}

// Populate form with task data for editing
const editTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );

  currentTask = taskData[dataArrIndex]; // Set current task

  // Populate form fields
  titleInput.value = currentTask.title;
  dateInput.value = currentTask.date;
  descriptionInput.value = currentTask.description;

  addOrUpdateTaskBtn.innerText = "Update Task"; // Change button text
  taskForm.classList.toggle("hidden"); // Show form
}

// Reset form and UI state
const reset = () => {
  addOrUpdateTaskBtn.innerText = "Add Task";
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  taskForm.classList.toggle("hidden"); // Hide form
  currentTask = {}; // Clear current task
}

// Initial load: display tasks if any exist
if (taskData.length) {
  updateTaskContainer();
}

// Event Listeners
openTaskFormBtn.addEventListener("click", () =>
  taskForm.classList.toggle("hidden") // Toggle form visibility
);

closeTaskFormBtn.addEventListener("click", () => {
  // Check for unsaved changes
  const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;
  const formInputValuesUpdated = titleInput.value !== currentTask.title || 
                                 dateInput.value !== currentTask.date || 
                                 descriptionInput.value !== currentTask.description;

  // Show confirmation dialog if there are unsaved changes
  if (formInputsContainValues && formInputValuesUpdated) {
    confirmCloseDialog.showModal();
  } else {
    reset();
  }
});

cancelBtn.addEventListener("click", () => confirmCloseDialog.close());

discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  reset() // Discard changes and reset form
});

// Handle form submission
taskForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission
  addOrUpdateTask();
});