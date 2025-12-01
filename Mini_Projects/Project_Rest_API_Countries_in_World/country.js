const themeChanger = document.querySelector(".theme-changer");
const themeText = document.querySelector("#theme-changer-text");
const moonIcon = document.querySelector(".moon-icon");

const countryNameInURL = new URLSearchParams(location.search).get("countryName");

const flagImg = document.querySelector(".img-container img");
const countryName = document.querySelector(".country-name");
const nativeName = document.querySelector(".native-name");
const population = document.querySelector(".population");
const region = document.querySelector(".region");
const subRegion = document.querySelector(".sub-region");
const capital = document.querySelector(".capital");
const topLevelDomain = document.querySelector(".top-level-domain");
const currencies = document.querySelector(".currencies");
const languages = document.querySelector(".languages");
const borderCountries = document.querySelector(".border-countries");

let countryData = [];

async function loadCountry() {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryNameInURL}?fullText=true`);

    countryData = await response.json();
    // console.log(countryData);

    displayCountry(countryData);

  } 
  
  catch (error) {
    console.error("Something Went Wrong", error);
  }
}

function displayCountry(data) {
  const country = data[0];
  // console.log(country);

  flagImg.src = country.flags.svg;
  flagImg.alt = `${country.name.common} Flag`;
  countryName.innerText = country.name.common;

  if (country.name.nativeName) {
    nativeName.innerText = country.name.official;
  } else {
    nativeName.innerText = country.name.common;
  }

  population.innerText = country.population.toLocaleString("en-IN");
  region.innerText = country.region;

  if (country.subregion) {
    subRegion.innerText = country.subregion;
  }

  if (country.capital) {
    capital.innerText = country.capital?.[0];
  }

  topLevelDomain.innerText = country.tld.join(", ");

  if (country.currencies) {
    currencies.innerText = Object.values(country.currencies).map((currency) => {
      return `"${currency.symbol}" ${currency.name}`;
    });
  }

  if (country.languages) {
    languages.innerText = Object.values(country.languages).join(", ");
  }

  if (country.borders) {
    country.borders.forEach((borderCode) => {
      // console.log(borderCode);
      fetch(`https://restcountries.com/v3.1/alpha/${borderCode}`)
        .then((res) => res.json())
        .then(([borderCountry]) => {
          // console.log(borderCountry);
          const borderCountryTag = document.createElement("a");
          borderCountryTag.innerText = borderCountry.name.common;
          borderCountryTag.href = `country.html?countryName=${borderCountry.name.common}`;
          borderCountries.append(borderCountryTag);
        });
    });
  }
}

loadCountry(); // 👈 Start the process


themeChanger.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (themeText.innerHTML === `Dark Mode`) {
    themeText.innerHTML = `Light Mode`;
    moonIcon.innerHTML = `<i class="fa-regular fa-sun"></i>`;
  } else {
    themeText.innerHTML = `Dark Mode`;
    moonIcon.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }
});
