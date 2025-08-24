

// The <dialog> element is an HTML5 feature that provides a native modal dialog implementation. 
// It simplifies the process of creating modals because it has built-in methods 
// for showing and hiding and comes with accessibility features.


// ✅ 1. What is the <dialog> element?

// A semantic HTML element designed for dialogs and popups.
// Has two key methods:

// .show() → Displays the dialog as a non-modal (still interactable with the background).
// .showModal() → Displays the dialog as a modal (blocks interaction with the background).
// .close() → Closes the dialog.


/*
const dialog = document.getElementById("my-modal");
const openButton = document.getElementById("open-modal");

openButton.addEventListener("click", () => {
  dialog.showModal();
});
*/

//If you needed to show a dialog while still allowing interaction with 
// content outside of the dialog, then you can use the show() method:

const dialog = document.getElementById("my-modal");
const openButton = document.getElementById("open-modal");

openButton.addEventListener("click", () => {
  dialog.show();
});


const dialog1 = document.getElementById("my-modal1");
const openButton1 = document.getElementById("open-modal1");
const closeButton1 = document.getElementById("close-modal1");

openButton1.addEventListener("click", () => {
  dialog1.show();
});

closeButton1.addEventListener("click", () => {
  dialog1.close();
});


/*
✅ 7. Form in Dialog (Native Behavior)

The <dialog> element supports a method="dialog" in forms:


<dialog id="loginDialog">
  <form method="dialog">
    <label>Username: <input type="text" name="username"></label><br>
    <menu>
      <button value="cancel">Cancel</button>
      <button value="confirm">Login</button>
    </menu>
  </form>
</dialog>

<button id="showLogin">Login</button>

<script>
const loginDialog = document.getElementById("loginDialog");
const loginBtn = document.getElementById("showLogin");

loginBtn.addEventListener("click", () => loginDialog.showModal());

loginDialog.addEventListener("close", () => {
  console.log("Dialog closed with value:", loginDialog.returnValue);
});
</script>


Key point:

The returnValue property gives the value of the button clicked inside the form.
*/