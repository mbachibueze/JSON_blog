// script.js

const accessKey = 'YOUR_UNSPLASH_ACCESS_KEY'; // Replace with your actual Unsplash access key
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${_NiTAU5tNOXemw99EEzQ1LKTGhRnN0PMOrfsloHTlVY}`;

async function fetchImages() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    displayImages(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
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
