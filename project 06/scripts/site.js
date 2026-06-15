const animals = [
{
name:"Ring-tailed Lemur",
description:"One of Madagascar's most famous animals."
},
{
name:"Fossa",
description:"A carnivorous mammal found only in Madagascar."
},
{
name:"Panther Chameleon",
description:"Known for its colorful appearance."
}
];

const animalContainer = document.querySelector("#animal-container");

if (animalContainer){

animals.forEach(animal => {

animalContainer.innerHTML += `

<div class="fact-card">
<h3>${animal.name}</h3>
<p>${animal.description}</p>
</div>
`;

});
}

const weatherContainer = document.querySelector("#weather-container");

if(weatherContainer){

const weather = {
city:"Antananarivo",
temperature:27,
condition:"Sunny"
};

let advice;

if(weather.temperature > 30){
advice = "It is very hot today.";
}
else{
advice = "The weather is pleasant for sightseeing.";
}

weatherContainer.innerHTML = `

<h3>${weather.city}</h3>
<p>Temperature: ${weather.temperature}°C</p>
<p>Condition: ${weather.condition}</p>
<p>${advice}</p>
`;
}

const favoriteButtons =
document.querySelectorAll(".favorite-btn");

const favoriteDisplay =
document.querySelector("#favorite-display");

favoriteButtons.forEach(button => {

button.addEventListener("click", () => {

const place = button.dataset.place;

localStorage.setItem(
"favoritePlace",
place
);

if(favoriteDisplay){
favoriteDisplay.textContent =
`Favorite Attraction: ${place}`;
}

});
});

if(favoriteDisplay){

const savedPlace =
localStorage.getItem("favoritePlace");

if(savedPlace){

favoriteDisplay.textContent =
`Favorite Attraction: ${savedPlace}`;
}

}
