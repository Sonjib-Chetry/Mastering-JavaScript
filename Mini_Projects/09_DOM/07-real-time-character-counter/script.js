const textarea = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textarea.addEventListener("input", () => {
  let currentText = textarea.value;


  if (currentText.length > 50) {
    textarea.value = currentText.slice(0, 50);
    currentText = textarea.value;
  }

  const currentLength = currentText.length;


  charCount.textContent = `Character Count: ${currentLength}/50`;


  if (currentLength === 50) {
    charCount.classList.add("red");
  } else {
    charCount.classList.remove("red");
  }
});
