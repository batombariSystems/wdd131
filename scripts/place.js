// Footer current year
const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

// Last modified date
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// Wind Chill Calculation
const temperature = 26; // Celsius
const windSpeed = 10; // km/h

function calculateWindChill(tempC, speedKmh) {

    // Formula valid only at 10°C or below and wind above 4.8 km/h
    if (tempC <= 10 && speedKmh > 4.8) {

        const chill =
            13.12 +
            (0.6215 * tempC) -
            (11.37 * Math.pow(speedKmh, 0.16)) +
            (0.3965 * tempC * Math.pow(speedKmh, 0.16));

        return `${chill.toFixed(1)} °C`;
    } else {
        return "N/A";
    }
}

document.querySelector("#windChill").textContent =
    calculateWindChill(temperature, windSpeed);
