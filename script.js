// Function to fetch a random dog image from the Dog CEO API
function getRandomDogImage() {
    // Send a GET request to the Dog CEO API
    fetch('https://dog.ceo/api/breeds/image/random')
      // Once the response is received, parse it as JSON
      .then(response => response.json())
      // Once the JSON data is extracted, process it
      .then(data => {
        // Check if the response is successful and contains a valid dog image URL
        if (data && data.status === "success" && data.message) {
          // If successful, call the function to display the dog image
          displayDogImage(data.message);
        }
      })
      // If there's an error during the fetch operation, log the error
      .catch(error => {
        console.error('Error fetching dog image:', error);
      });
}

// Function to display the dog image on the webpage
function displayDogImage(imageUrl) {
    // Find the container element for the dog image
    const dogImageContainer = document.getElementById('dogImageContainer');
    // Set the inner HTML of the container to display the dog image
    dogImageContainer.innerHTML = `
    <div class="imgbox"><img src="${imageUrl}" alt="Random Dog Image"> </div>`;
}
