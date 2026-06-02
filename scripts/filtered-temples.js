// Footer year
const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

// Last modified
const modified = document.querySelector("#lastModified");
modified.textContent = `Last Modification: ${document.lastModified}`;

// Hamburger menu
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

// Temple data array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Adelaide Australia Temple",
    location: "Adelaide, South Australia",
    dedicated: "2020, June, 15",
    area: 10700,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/adelaide-australia-temple/adelaide-australia-temple-4366.jpg"
  },
  {
    templeName: "Durban South Africa Temple",
    location: "Durban, South Africa",
    dedicated: "2020, February, 16",
    area: 19860,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-7940.jpg"
  },
  {
    templeName: "Veracruz Mexico Temple",
    location: "Veracruz, Mexico",
    dedicated: "2000, July, 9",
    area: 10700,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/veracruz-mexico-temple/veracruz-mexico-temple-17083.jpg"

  }

];// Select the temple grid container
const templeGrid = document.querySelector(".temple-grid");

// Create and display temple cards
function displayTemples(temples) {
  temples.forEach((temple) => {
    const card = document.createElement("figure");

    const name = document.createElement("h3");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

    const area = document.createElement("p");
    area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

    const image = document.createElement("img");
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", temple.templeName);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "400");
    image.setAttribute("height", "250");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(image);

    templeGrid.appendChild(card);
  });
}

// Display all temples
displayTemples(temples);// Navigation links
const homeLink = document.querySelector("a[href='#']:nth-of-type(1)");
const oldLink = document.querySelector("a[href='#']:nth-of-type(2)");
const newLink = document.querySelector("a[href='#']:nth-of-type(3)");
const largeLink = document.querySelector("a[href='#']:nth-of-type(4)");
const smallLink = document.querySelector("a[href='#']:nth-of-type(5)");

const pageTitle = document.querySelector("main h2");

// Home
homeLink.addEventListener("click", () => {
  pageTitle.textContent = "Home";
  templeGrid.innerHTML = "";
  displayTemples(temples);
});

// Old - before 1900
oldLink.addEventListener("click", () => {
  pageTitle.textContent = "Old Temples";
  templeGrid.innerHTML = "";

  const oldTemples = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1900;
  });

  displayTemples(oldTemples);
});

// New - after 2000
newLink.addEventListener("click", () => {
  pageTitle.textContent = "New Temples";
  templeGrid.innerHTML = "";

  const newTemples = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year > 2000;
  });

  displayTemples(newTemples);
});

// Large - over 90,000 sq ft
largeLink.addEventListener("click", () => {
  pageTitle.textContent = "Large Temples";
  templeGrid.innerHTML = "";

  const largeTemples = temples.filter(
    (temple) => temple.area > 90000
  );

  displayTemples(largeTemples);
});

// Small - under 10,000 sq ft
smallLink.addEventListener("click", () => {
  pageTitle.textContent = "Small Temples";
  templeGrid.innerHTML = "";

  const smallTemples = temples.filter(
    (temple) => temple.area < 10000
  );

  displayTemples(smallTemples);
});