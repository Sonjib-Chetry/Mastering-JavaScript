
const countriesCardContainer = document.querySelector(".countries-cards-container");
const filterByRegion = document.querySelector(".filter-by-region");
const filterBySearchInput = document.querySelector(".input-field input");
const themeChanger = document.querySelector(".theme-changer")
const themeText = document.querySelector("#theme-changer-text")

let countriesData = [];

async function loadCountries() {
  try {
    const [independentTrueRes, independentFalseRes] = await Promise.all([
      fetch("https://restcountries.com/v3.1/independent?status=true"),
      fetch("https://restcountries.com/v3.1/independent?status=false")
    ]);

    const independentTrueData = await independentTrueRes.json();
    const independentFalseData = await independentFalseRes.json();

    countriesData = [...independentTrueData, ...independentFalseData];
    // console.log(countriesData);

    displayCountries(countriesData);
  } catch (error) {
    console.error("Something Went Wrong", error);
  }
}

function displayCountries(data) {
  countriesCardContainer.innerHTML = '';

  data.forEach((country) => {
    const countryCard = document.createElement('a');
    countryCard.href = `country.html?countryName=${country.name.common}`;
    countryCard.innerHTML = `
      <div class="country-card">
        <img class="country-flag" src="${country.flags.svg}" alt="${country.name.common} Flag" />
        <p class="country-name">${country.name.common}</p>
        <p class="country-population"><b>Population :</b> &nbsp;${country.population.toLocaleString("en-IN")}</p>
        <p class="country-region"><b>Region :</b> &nbsp;${country.region}</p>
        <p class="country-capital"><b>Capital :</b> &nbsp;${country.capital?.[0] ?? "—"}</p>
      </div>
    `;
    countriesCardContainer.append(countryCard);
  });
}

filterByRegion.addEventListener("change", (e) => {
  const filteredRegion = countriesData.filter((country) => country.region.includes(e.target.value))
  displayCountries(filteredRegion)
})

filterBySearchInput.addEventListener('input',  (e) => {
  const inputCountry = countriesData.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
  displayCountries(inputCountry)
})


loadCountries(); // 👈 Start the process

themeChanger.addEventListener("click", () => {
  document.body.classList.toggle("dark")

  if (themeText.innerHTML === `Dark Mode`) {
      themeText.innerHTML = `Light Mode`;
    } 
  else {
      themeText.innerHTML = `Dark Mode`;
    }
})