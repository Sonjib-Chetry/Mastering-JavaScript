        // Required elements
        const getWeatherBtn = document.getElementById('get-weather-btn');
        const citySelect = document.getElementById('city-select');
        const weatherContainer = document.querySelector('.weather-container');

        // Display elements
        const locationEl = document.getElementById('location');
        const weatherIcon = document.getElementById('weather-icon');
        const weatherMain = document.getElementById('weather-main');
        const mainTemp = document.getElementById('main-temperature');
        const feelsLike = document.getElementById('feels-like');
        const humidity = document.getElementById('humidity');
        const wind = document.getElementById('wind');
        const windGust = document.getElementById('wind-gust');

        // Get weather data from API
        async function getWeather(city) {
            try {
                const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
                
                if (!response.ok) {
                    throw new Error(`API request failed with status ${response.status}`);
                }
                
                return await response.json();
            } catch (error) {
                console.error(error);
                return null;
            }
        }

        // Display weather information
        async function showWeather(city) {
            try {
                const data = await getWeather(city);
                
                if (!data) {
                    throw new Error('Failed to fetch weather data');
                }
                
                // Update UI with weather data
                locationEl.textContent = data.name || 'N/A';
                weatherMain.textContent = data.weather?.[0]?.main || 'N/A';
                mainTemp.textContent = data.main?.temp ?? 'N/A';
                feelsLike.textContent = data.main?.feels_like ?? 'N/A';
                humidity.textContent = data.main?.humidity ?? 'N/A';
                wind.textContent = data.wind?.speed ?? 'N/A';
                windGust.textContent = data.wind?.gust ?? 'N/A';
                
                // Handle weather icon
                if (data.weather?.[0]?.icon) {
                    weatherIcon.src = data.weather[0].icon;
                    weatherIcon.alt = data.weather[0].description || 'Weather icon';
                } else {
                    weatherIcon.src = '';
                    weatherIcon.alt = 'N/A';
                }
                
                // Show weather container
                weatherContainer.style.display = 'block';
            } catch (error) {
                console.error('Error showing weather:', error);
                alert("Something went wrong, please try again later");
            }
        }

        // Event listener for button click
        getWeatherBtn.addEventListener('click', () => {
            const selectedCity = citySelect.value;
            if (selectedCity) {
                showWeather(selectedCity);
            }
        });