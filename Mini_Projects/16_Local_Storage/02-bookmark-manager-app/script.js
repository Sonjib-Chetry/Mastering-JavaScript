
// 1. getBookmarks function
function getBookmarks() {
  try {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    if (Array.isArray(bookmarks) && bookmarks.every(b => b.name && b.category && b.url)) {
      return bookmarks;
    }
    return [];
  } catch {
    return [];
  }
}

// 2. displayOrCloseForm function
function displayOrCloseForm() {
  document.querySelector("#main-section").classList.toggle("hidden");
  document.querySelector("#form-section").classList.toggle("hidden");
}

// 3. displayOrHideCategory function
function displayOrHideCategory() {
  document.querySelector("#main-section").classList.toggle("hidden");
  document.querySelector("#bookmark-list-section").classList.toggle("hidden");
}

// Event: Add bookmark button click
document.querySelector("#add-bookmark-button").addEventListener("click", () => {
  const categoryValue = document.querySelector("#category-dropdown").value;
  document.querySelector(".category-name").innerText = categoryValue;
  displayOrCloseForm();
});

// Event: Close form button
document.querySelector("#close-form-button").addEventListener("click", () => {
  displayOrCloseForm();
});

// Event: Add bookmark from form
document.querySelector("#add-bookmark-button-form").addEventListener("click", () => {
  const name = document.querySelector("#name").value.trim();
  const category = document.querySelector("#category-dropdown").value;
  const url = document.querySelector("#url").value.trim();

  let bookmarks = getBookmarks();
  bookmarks.push({ name, category, url });
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  document.querySelector("#name").value = "";
  document.querySelector("#url").value = "";
  displayOrCloseForm();
});

// Event: View category button
document.querySelector("#view-category-button").addEventListener("click", () => {
  const categoryValue = document.querySelector("#category-dropdown").value;
  document.querySelector(".category-name").innerText = categoryValue;

  const categoryListEl = document.querySelector("#category-list");
  categoryListEl.innerHTML = ""; // clear before adding new items

  const bookmarks = getBookmarks().filter(b => b.category === categoryValue);

  if (bookmarks.length === 0) {
    categoryListEl.innerHTML = "<p>No Bookmarks Found</p>";
  } else {
    bookmarks.forEach(b => {
      const id = b.name;

      categoryListEl.innerHTML += `
        <div>
          <input type="radio" id="${id}" name="bookmark" value="${b.name}">
          <label for="${id}">
            <a href="${b.url}" target="_blank">${b.name}</a>
          </label>
        </div>
      `;
    });
  }

  displayOrHideCategory();
});

// Event: Close list button
document.querySelector("#close-list-button").addEventListener("click", () => {
  displayOrHideCategory();
});

// Event: Delete bookmark button
document.querySelector("#delete-bookmark-button").addEventListener("click", () => {
  const selectedRadio = document.querySelector("input[name='bookmark']:checked");
  if (!selectedRadio) return;

  const bookmarkName = selectedRadio.value;
  const category = document.querySelector(".category-name").innerText;

  let bookmarks = getBookmarks().filter(
    b => !(b.name === bookmarkName && b.category === category)
  );

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  // Refresh category list
  const categoryListEl = document.querySelector("#category-list");
  categoryListEl.innerHTML = "";

  const filtered = bookmarks.filter(b => b.category === category);
  if (filtered.length === 0) {
    categoryListEl.innerHTML = "<p>No Bookmarks Found</p>";
  } else {
    filtered.forEach(b => {
      const id = b.name;
      categoryListEl.innerHTML += `
        <div>
          <input type="radio" id="${id}" name="bookmark" value="${b.name}">
          <label for="${id}">
            <a href="${b.url}" target="_blank">${b.name}</a>
          </label>
        </div>
      `;
    });
  }
});
