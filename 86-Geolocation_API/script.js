
// ✅ What Is the Geolocation API?

// The Geolocation API allows web applications to access the geographical location of a user's device—such as their 
// latitude and longitude.
// Since location is sensitive information, the browser must ask the user for permission before sharing it.

// ✅ How getCurrentPosition() Works

// The getCurrentPosition() method retrieves the user's current location.
// It takes up to three arguments:

// Success callback (runs when location is found)

// Error callback (runs when location access fails)

// Optional configuration object (e.g., max age, timeout, accuracy preference)


// Example Code

navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
  },
  (error) => {
    console.log("Error: " + error.message);
  }
);

// ✅ What Happens Here?
// Browser asks user for permission
// If allowed, it fetches location using:
// GPS
// Wi-Fi
// Cell towers
// IP address (least accurate)
// Calls the success function with a position object

/*
📍 Data available in position.coords

| Property    | Meaning                  |
| ----------- | ------------------------ |
| `latitude`  | north–south position     |
| `longitude` | east–west position       |
| `accuracy`  | meters of accuracy       |
| `altitude`  | elevation (if supported) |
| `speed`     | device speed (m/s)       |
| `heading`   | direction of movement    |


⚠️ Error Handling
Common error reasons include:
User denied permission
Location disabled
Timeout
Position unavailable


🔐 Privacy Consideration

Because location is highly personal:
Always explain why you need location
Use data responsibly
Avoid storing location unless necessary

Browser example prompt:
"Allow site to access your location?"

If user denies it, error callback runs.


🎯 In short

| Feature           | Summary                                    |
| ----------------- | ------------------------------------------ |
| API Name          | Geolocation API                            |
| Main Method       | `getCurrentPosition()`                     |
| Needs Permission? | ✅ Yes                                      |
| Returns           | `latitude`, `longitude`, and more          |
| Use Case Examples | Maps, delivery apps, weather, ride-sharing |
*/