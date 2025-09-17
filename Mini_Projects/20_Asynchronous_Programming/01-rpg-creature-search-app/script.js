// DOM element references: Selecting HTML elements by their IDs to manipulate later
const creatureID = document.getElementById("creature-id");         // Creature ID display element
const creatureName = document.getElementById("creature-name");     // Creature name display
const specialName = document.getElementById("special-name");       // Special ability name
const specialDescription = document.getElementById("special-description"); // Ability description
const types = document.getElementById("types");                    // Container for creature types
const height = document.getElementById("height");                  // Height display
const weight = document.getElementById("weight");                  // Weight display
const hp = document.getElementById("hp");                          // Health points stat
const attack = document.getElementById("attack");                  // Attack stat
const defense = document.getElementById("defense");                // Defense stat
const specialAttack = document.getElementById("special-attack");   // Special attack stat
const specialDefense = document.getElementById("special-defense"); // Special defense stat
const speed = document.getElementById("speed");                    // Speed stat
const searchForm = document.getElementById("search-form");         // Search form element
const searchInput = document.getElementById("search-input");       // Search input field

// Async function to fetch and display creature data from API
const getCreature = async () => {
  try {
    // Get search value and convert to lowercase for API consistency
    const creatureNameOrId = searchInput.value.toLowerCase();
    
    // Fetch creature data from API endpoint
    const response = await fetch(
      `https://rpg-creature-api.freecodecamp.rocks/api/creature/${creatureNameOrId}`
    );
    // Parse JSON response into JavaScript object
    const data = await response.json();

    // Update DOM with basic creature information
    creatureName.textContent = `${data.name.toUpperCase()}`;        // Display name in uppercase
    creatureID.textContent = `#${data.id}`;                        // Display formatted ID
    weight.textContent = `Weight: ${data.weight}`;                 // Display weight
    height.textContent = `Height: ${data.height}`;                 // Display height
    specialName.textContent = data.special.name;                   // Display special ability name
    specialDescription.textContent = data.special.description;     // Display ability description

    // Update stat elements from stats array
    hp.textContent = data.stats[0].base_stat;          // HP (index 0)
    attack.textContent = data.stats[1].base_stat;      // Attack (index 1)
    defense.textContent = data.stats[2].base_stat;     // Defense (index 2)
    specialAttack.textContent = data.stats[3].base_stat;   // Special Attack (index 3)
    specialDefense.textContent = data.stats[4].base_stat;  // Special Defense (index 4)
    speed.textContent = data.stats[5].base_stat;       // Speed (index 5)

    // Generate type badges and insert into types container
    types.innerHTML = data.types
      // Map each type object to HTML span element with CSS class
      .map((obj) => `<span class="type ${obj.name}">${obj.name}</span>`)
      .join("");  // Convert array to single string

    // Create subtle "pop" animation on the container
    document.querySelector(".container").animate(
      [
        { transform: "translateY(0)", opacity: 1 },       // Start position
        { transform: "translateY(-10px)", opacity: 0.7 }, // Mid animation
        { transform: "translateY(0)", opacity: 1 }        // End position
      ],
      {
        duration: 300,    // Animation length in ms
        easing: "ease-out" // Smooth ending animation curve
      }
    );
  } catch (err) {
    // Handle errors (e.g., creature not found)
    resetDisplay();                  // Clear existing data
    alert("Creature not found");     // User notification
    console.log(`Creature not found: ${err}`); // Error logging
  }
};

// Clear all displayed creature data
const resetDisplay = () => {
  // Reset text content for all data display elements
  creatureName.textContent = "";
  creatureID.textContent = "";
  height.textContent = "";
  weight.textContent = "";
  types.innerHTML = "";              // Clear inner HTML
  specialName.innerHTML = "";
  specialDescription.innerHTML = "";
  hp.textContent = "";
  attack.textContent = "";
  defense.textContent = "";
  specialAttack.textContent = "";
  specialDefense.textContent = "";
  speed.textContent = "";
};

// Form submission handler
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();     // Prevent page reload on submit
  getCreature();          // Trigger creature data fetch
});

// Initialize page with default creature on load
window.addEventListener("DOMContentLoaded", () => {
  searchInput.value = "Pyrolynx";  // Set default search value
  getCreature();                   // Load default creature
});