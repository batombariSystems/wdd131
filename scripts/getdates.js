// getdates.js

// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Get the last modified date of the document
document.getElementById("lastmodified").textContent = `Last Modification: ${document.lastModified}`;