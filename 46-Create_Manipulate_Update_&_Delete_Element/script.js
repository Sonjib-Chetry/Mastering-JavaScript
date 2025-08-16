
const header = document.getElementById("header")

// 1. Create Elements
// You can use document.createElement() to create a new element.

const newDiv = document.createElement("div");   // create a <div>
// header.appendChild(newDiv);              // add it to the body //uncomment code to see result

// 2. Manipulate and Update Elements
// You can change an element's content, attributes, classes, styles, etc.

//Changing Text or HTML:
// newDiv.textContent = "New Text";              // plain text  //uncomment code to see result
// newDiv.innerHTML = "<b>Bold Text</b>";        // HTML content //uncomment code to see result

//Setting Attributes:
// newDiv.setAttribute("id", "myDiv");       // set id     //uncomment code to see result
// newDiv.setAttribute("class", "box");      // set class  //uncomment code to see result

//Changing Styles:
// newDiv.style.color = "blue";             // change text color    //uncomment code to see result
// newDiv.style.backgroundColor = "yellow"; // background color     //uncomment code to see result

//Adding Classes:
// newDiv.classList.add("highlight");        // add a class        //uncomment code to see result
// newDiv.classList.remove("box");           // remove a class     //uncomment code to see result


// Example: All Together
function createBox() {
    const box = document.createElement("div");
    box.textContent = "I am a box!";
    box.style.width = "150px";
    box.style.height = "150px";
    box.style.backgroundColor = "lightgreen";
    box.style.margin = "10px";
    box.setAttribute("id", "box1");

    header.appendChild(box);

    // Update after 2 seconds
    setTimeout(() => {
        box.textContent = "Updated box!";
        box.style.backgroundColor = "orange";
    }, 2000);
}

//createBox()    //call this function in browser consol to see the result

// 2. Delete Elements

// header.remove()  //uncomment code to see result
// document.body.append(header)  //we can restore element if it was saved in a variable, if not it will delete forever.



