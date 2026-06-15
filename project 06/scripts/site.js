// Wildlife Data Array

const animals = [
    {
        name: "Ring-tailed Lemur",
        description: "One of Madagascar's most famous animals, recognized by its black-and-white striped tail.",
        image: "images/lemur.jpg"
    },
    {
        name: "Fossa",
        description: "A carnivorous mammal found only in Madagascar and considered the island's top predator.",
        image: "images/fossa.jpg"
    },
    {
        name: "Panther Chameleon",
        description: "Known for its vibrant colors and ability to change appearance.",
        image: "images/chameleon.jpg"
    }
];

// Display Wildlife Cards

const animalContainer = document.querySelector("#animal-container");

if (animalContainer) {

    animals.forEach(animal => {

        animalContainer.innerHTML += `
            <div class="fact-card">
                <img src="${animal.image}"
                     alt="${animal.name}"
                     loading="lazy">

                <h3>${animal.name}</h3>

                <p>${animal.description}</p>
            </div>
        `;
    });
}

// Weather Information Object

const weatherContainer = document.querySelector("#weather-container");

if (weatherContainer) {

    const weather = {
        city: "Antananarivo",
        temperature: 27,
        condition: "Sunny"
    };

    let advice = "";

    if (weather.temperature > 30) {
        advice = "It is very hot today. Carry water and wear light clothing.";
    } else if (weather.temperature >= 25) {
        advice = "The weather is pleasant for sightseeing and outdoor activities.";
    } else {
        advice = "The weather is cool. Consider carrying a light jacket.";
    }

    weatherContainer.innerHTML = `
        <div class="fact-card">
            <h3>${weather.city}</h3>
            <p><strong>Temperature:</strong> ${weather.temperature}°C</p>
            <p><strong>Condition:</strong> ${weather.condition}</p>
            <p>${advice}</p>
        </div>
    `;
}

// Favorite Attraction Buttons

const favoriteButtons = document.querySelectorAll(".favorite-btn");
const favoriteDisplay = document.querySelector("#favorite-display");

favoriteButtons.forEach(button => {

    button.addEventListener("click", () => {

        const place = button.dataset.place;

        localStorage.setItem("favoritePlace", place);

        if (favoriteDisplay) {
            favoriteDisplay.textContent =
                `Favorite Attraction: ${place}`;
        }

        alert(`${place} has been saved as your favorite attraction.`);
    });

});

// Load Saved Favorite Attraction

if (favoriteDisplay) {

    const savedPlace =
        localStorage.getItem("favoritePlace");

    if (savedPlace) {
        favoriteDisplay.textContent =
            `Favorite Attraction: ${savedPlace}`;
    }
}