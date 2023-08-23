// script.js

const accessKey = '_NiTAU5tNOXemw99EEzQ1LKTGhRnN0PMOrfsloHTlVY'; // Replace with your actual Unsplash access key
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}`;

async function fetchImages() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  
  const imagecontainer = document.getElementById("image-container");

}



function displayImages(images) {
  const imageContainer = document.getElementById('image-container');

  // Clear previous content if any
  imageContainer.innerHTML = '';

  // Display fetched images
  images.forEach(image => {
    const imageElement = document.createElement('img');
    imageElement.src = image.urls.regular;
    imageElement.alt = image.alt_description;
    imageContainer.appendChild(imageElement);
  });
}

fetchImages();
